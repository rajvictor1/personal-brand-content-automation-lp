import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  source: z.string().url().max(2_000),
  sessionId: z.string().trim().min(1).max(200),
  notes: z.string().trim().max(2_000).optional(),
});

export async function POST(request: Request) {
  const parsed = leadSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid lead details." }, { status: 400 });
  }

  const webhookUrl = process.env.GOOGLE_APPS_SCRIPT_LEAD_WEBHOOK_URL;
  const webhookSecret = process.env.BRANDOPS_LEAD_WEBHOOK_SECRET;
  if (!webhookUrl || !webhookSecret) {
    return NextResponse.json({ error: "Lead capture is not configured." }, { status: 503 });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...parsed.data, secret: webhookSecret }),
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });
    const result = (await response.json().catch(() => null)) as
      | { ok?: boolean; error?: string }
      | null;
    if (!response.ok || !result?.ok) {
      throw new Error(result?.error || `Google Apps Script returned ${response.status}`);
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("BrandOps lead capture failed", error);
    return NextResponse.json({ error: "Unable to save the signup." }, { status: 502 });
  }
}
