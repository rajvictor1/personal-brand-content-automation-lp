import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function matches(received: string, expected: string) {
  const left = createHash("sha256").update(received).digest();
  const right = createHash("sha256").update(expected).digest();
  return timingSafeEqual(left, right);
}

export async function POST(request: Request) {
  const clientId = process.env.LINKEDIN_CLIENT_ID;
  const redirectUri = process.env.LINKEDIN_REDIRECT_URI;
  const setupToken = process.env.LINKEDIN_CONNECT_TOKEN;
  if (!clientId || !redirectUri || !setupToken) {
    return NextResponse.json({ error: "LinkedIn connection is not configured." }, { status: 503 });
  }

  const form = await request.formData();
  const receivedToken = String(form.get("setup_token") ?? "");
  if (!receivedToken || !matches(receivedToken, setupToken)) {
    return NextResponse.json({ error: "Invalid setup password." }, { status: 401 });
  }

  const state = randomBytes(32).toString("base64url");
  const authorize = new URL("https://www.linkedin.com/oauth/v2/authorization");
  authorize.searchParams.set("response_type", "code");
  authorize.searchParams.set("client_id", clientId);
  authorize.searchParams.set("redirect_uri", redirectUri);
  authorize.searchParams.set("state", state);
  authorize.searchParams.set("scope", "openid profile w_member_social");

  const response = NextResponse.redirect(authorize, 303);
  response.cookies.set("brandops_linkedin_oauth_state", state, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/api/linkedin/oauth/callback",
    maxAge: 10 * 60,
  });
  return response;
}
