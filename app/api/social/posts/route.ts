import { createHash, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const postSchema = z.object({
  external_id: z.string().trim().min(3).max(160),
  brand: z.literal("brandops"),
  platforms: z.array(z.literal("linkedin")).min(1).max(1),
  content: z.string().trim().min(10).max(3_000),
  image_url: z.union([z.literal(""), z.string().url().max(2_000)]).default(""),
  image_brief: z.string().trim().max(2_000).default(""),
  source_urls: z.array(z.string().url().max(2_000)).max(10).default([]),
  scheduled_at: z.string().datetime({ offset: true }),
  approval_status: z.literal("review_required"),
  medical_review_required: z.literal(false),
});

function tokensMatch(received: string, expected: string) {
  const receivedHash = createHash("sha256").update(received).digest();
  const expectedHash = createHash("sha256").update(expected).digest();
  return timingSafeEqual(receivedHash, expectedHash);
}

export async function POST(request: Request) {
  const configuredToken = process.env.HERMES_WEBHOOK_TOKEN;
  const authorization = request.headers.get("authorization") ?? "";
  const receivedToken = authorization.startsWith("Bearer ")
    ? authorization.slice(7).trim()
    : "";

  if (!configuredToken) {
    return NextResponse.json(
      { ok: false, code: "not_configured", error: "Social post intake is not configured." },
      { status: 503 },
    );
  }

  if (!receivedToken || !tokensMatch(receivedToken, configuredToken)) {
    return NextResponse.json(
      { ok: false, code: "unauthorized", error: "Invalid webhook credentials." },
      { status: 401 },
    );
  }

  const parsed = postSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        code: "invalid_post",
        error: "Post failed validation.",
        issues: parsed.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      },
      { status: 400 },
    );
  }

  const queueUrl = process.env.GOOGLE_APPS_SCRIPT_LEAD_WEBHOOK_URL;
  const queueSecret = process.env.BRANDOPS_LEAD_WEBHOOK_SECRET;
  if (!queueUrl || !queueSecret) {
    return NextResponse.json(
      { ok: false, code: "queue_not_configured", error: "Social post queue is not configured." },
      { status: 503 },
    );
  }

  try {
    const queueResponse = await fetch(queueUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "social_post",
        secret: queueSecret,
        ...parsed.data,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });
    const result = (await queueResponse.json().catch(() => null)) as
      | { ok?: boolean; duplicate?: boolean; status?: string; error?: string }
      | null;

    if (!queueResponse.ok || !result?.ok) {
      throw new Error(result?.error || `Queue returned ${queueResponse.status}`);
    }

    return NextResponse.json(
      {
        ok: true,
        external_id: parsed.data.external_id,
        status: result.status ?? "review_required",
        duplicate: result.duplicate ?? false,
        message: result.duplicate
          ? "Post was already queued; no duplicate was created."
          : "Post accepted and queued for review.",
      },
      { status: result.duplicate ? 200 : 201 },
    );
  } catch (error) {
    console.error("BrandOps social post intake failed", error);
    return NextResponse.json(
      { ok: false, code: "queue_unavailable", error: "Unable to queue the post." },
      { status: 502 },
    );
  }
}
