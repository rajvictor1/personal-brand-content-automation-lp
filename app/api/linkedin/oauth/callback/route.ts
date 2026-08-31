import { createHash, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function matches(received: string, expected: string) {
  const left = createHash("sha256").update(received).digest();
  const right = createHash("sha256").update(expected).digest();
  return timingSafeEqual(left, right);
}

function resultPage(title: string, message: string, status = 200) {
  return new NextResponse(
    `<!doctype html><html><body style="font-family:system-ui;max-width:640px;margin:80px auto;padding:24px"><h1>${title}</h1><p>${message}</p></body></html>`,
    { status, headers: { "Content-Type": "text/html; charset=utf-8" } },
  );
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const error = url.searchParams.get("error");
  if (error) return resultPage("LinkedIn was not connected", "Authorization was cancelled.", 400);

  const code = url.searchParams.get("code") ?? "";
  const state = url.searchParams.get("state") ?? "";
  const cookieHeader = request.headers.get("cookie") ?? "";
  const cookieState = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith("brandops_linkedin_oauth_state="))
    ?.split("=")
    .slice(1)
    .join("=") ?? "";

  if (!code || !state || !cookieState || !matches(state, decodeURIComponent(cookieState))) {
    return resultPage("LinkedIn connection failed", "The OAuth state was invalid or expired.", 401);
  }

  const clientId = process.env.LINKEDIN_CLIENT_ID;
  const clientSecret = process.env.LINKEDIN_CLIENT_SECRET;
  const redirectUri = process.env.LINKEDIN_REDIRECT_URI;
  const queueUrl = process.env.GOOGLE_APPS_SCRIPT_LEAD_WEBHOOK_URL;
  const queueSecret = process.env.BRANDOPS_LEAD_WEBHOOK_SECRET;
  if (!clientId || !clientSecret || !redirectUri || !queueUrl || !queueSecret) {
    return resultPage("LinkedIn connection failed", "Server configuration is incomplete.", 503);
  }

  try {
    const tokenResponse = await fetch("https://www.linkedin.com/oauth/v2/accessToken", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });
    const token = (await tokenResponse.json().catch(() => null)) as
      | { access_token?: string; expires_in?: number }
      | null;
    if (!tokenResponse.ok || !token?.access_token) throw new Error("Token exchange failed");

    const profileResponse = await fetch("https://api.linkedin.com/v2/userinfo", {
      headers: { Authorization: `Bearer ${token.access_token}` },
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    const profile = (await profileResponse.json().catch(() => null)) as
      | { sub?: string; name?: string }
      | null;
    if (!profileResponse.ok || !profile?.sub) throw new Error("Profile lookup failed");

    const storeResponse = await fetch(queueUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "linkedin_connection",
        secret: queueSecret,
        access_token: token.access_token,
        expires_in: token.expires_in ?? 0,
        person_id: profile.sub,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });
    const stored = (await storeResponse.json().catch(() => null)) as { ok?: boolean } | null;
    if (!storeResponse.ok || !stored?.ok) throw new Error("Credential storage failed");

    const response = resultPage(
      "LinkedIn connected",
      `${profile.name ?? "Your personal profile"} is connected. You may close this page.`,
    );
    response.cookies.set("brandops_linkedin_oauth_state", "", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/api/linkedin/oauth/callback",
      maxAge: 0,
    });
    return response;
  } catch (connectionError) {
    console.error("LinkedIn OAuth callback failed", connectionError);
    return resultPage("LinkedIn connection failed", "The connection could not be completed.", 502);
  }
}
