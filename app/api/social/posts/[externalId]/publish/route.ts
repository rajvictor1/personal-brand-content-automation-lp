import { createHash, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function authorized(request: Request) {
  const expected = process.env.HERMES_WEBHOOK_TOKEN ?? "";
  const header = request.headers.get("authorization") ?? "";
  const received = header.startsWith("Bearer ") ? header.slice(7).trim() : "";
  if (!expected || !received) return false;
  return timingSafeEqual(
    createHash("sha256").update(received).digest(),
    createHash("sha256").update(expected).digest(),
  );
}

export async function POST(
  request: Request,
  { params }: { params: { externalId: string } },
) {
  if (!authorized(request)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const externalId = decodeURIComponent(params.externalId).trim();
  if (!/^[a-zA-Z0-9_-]{3,160}$/.test(externalId)) {
    return NextResponse.json({ ok: false, error: "Invalid post ID" }, { status: 400 });
  }
  const body = (await request.json().catch(() => null)) as { confirm_publish?: boolean } | null;
  if (body?.confirm_publish !== true) {
    return NextResponse.json({ ok: false, error: "Explicit publish confirmation required" }, { status: 400 });
  }

  const url = process.env.GOOGLE_APPS_SCRIPT_LEAD_WEBHOOK_URL;
  const secret = process.env.BRANDOPS_LEAD_WEBHOOK_SECRET;
  if (!url || !secret) return NextResponse.json({ ok: false, error: "Publisher unavailable" }, { status: 503 });
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "social_post_publish", secret, external_id: externalId }),
      cache: "no-store",
      signal: AbortSignal.timeout(25_000),
    });
    const result = (await response.json().catch(() => null)) as
      | { ok?: boolean; error?: string; platform_post_id?: string }
      | null;
    if (!response.ok || !result?.ok) {
      return NextResponse.json({ ok: false, error: result?.error ?? "Publishing failed" }, { status: 400 });
    }
    return NextResponse.json({
      ok: true,
      external_id: externalId,
      status: "published",
      platform_post_id: result.platform_post_id,
    });
  } catch (error) {
    console.error("LinkedIn publishing failed", error);
    return NextResponse.json({ ok: false, error: "Publisher unavailable" }, { status: 502 });
  }
}
