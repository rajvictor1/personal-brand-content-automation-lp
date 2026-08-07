import { NextResponse } from "next/server";
import { z } from "zod";
import { google } from "googleapis";
import { existsSync } from "fs";

export const runtime = "nodejs";
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
    const keyJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
    const sheetId = process.env.GOOGLE_SHEET_ID;
    const sheetName = process.env.GOOGLE_SHEET_NAME || "Sheet1";

    let credentials;

    if (keyJson) {
      try {
        credentials = JSON.parse(keyJson);
      } catch {
        return NextResponse.json(
          { success: false, message: "Invalid service account JSON." },
          { status: 500 }
        );
      }
    } else if (keyPath && existsSync(keyPath)) {
      const file = await import("fs/promises");
      credentials = JSON.parse(await file.readFile(keyPath, "utf8"));
    } else {
      console.error("[contact] missing credentials");
      return NextResponse.json(
        {
          success: false,
          message: "Form submission is not configured yet.",
        },
        { status: 500 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials,
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
      message: "Thank you. We will be in touch soon.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    console.error("[contact] error", error);
    const message =
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again.";
    return NextResponse.json(
      { success: false, message },
      { status: 500 }
    );
  }
}
