import { NextRequest, NextResponse } from "next/server";
import { auditAIFindability } from "@/lib/aiFindabilityAudit";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const url = body?.url;

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid website URL." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body?.email || "")) {
      // We still run the audit but note the missing email on client side
    }

    const result = await auditAIFindability(url);

    return NextResponse.json({ ok: true, result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Audit failed";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
