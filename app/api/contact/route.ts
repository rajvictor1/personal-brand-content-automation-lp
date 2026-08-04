import { NextResponse } from "next/server";
import { z } from "zod";
import { google } from "googleapis";
import { existsSync } from "fs";

export const dynamic = "force-dynamic";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = schema.parse(json);

    const keyPath = process.env.GOOGLE_SERVICE_ACCOUNT_PATH;
    const sheetId = process.env.GOOGLE_SHEET_ID;
    const sheetName = process.env.GOOGLE_SHEET_NAME || "Sheet1";

    if (!keyPath || !sheetId || !existsSync(keyPath)) {
      console.error("[contact] missing credentials", { keyPath, sheetId });
      return NextResponse.json(
        {
          success: false,
          message: "Form submission is not configured yet.",
        },
        { status: 500 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      keyFile: keyPath,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `${sheetName}!A1:D1`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[new Date().toISOString(), data.name, data.email, data.message]],
      },
    });

    return NextResponse.json({
      success: true,
      message: "Thank you — we'll be in touch soon.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    console.error("[contact] error", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
