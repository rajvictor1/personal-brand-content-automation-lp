const SPREADSHEET_ID = "1yQdwjkXd4cbools__ah-IWm0whN9O2FHEBKsXe36QkY";
const SHEET_NAME = "Leads";
const NOTIFICATION_EMAIL = "rkrajeshk2018@gmail.com";

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents || "{}");
    const expectedSecret = PropertiesService.getScriptProperties().getProperty("WEBHOOK_SECRET");
    if (!expectedSecret || payload.secret !== expectedSecret) {
      return jsonResponse({ ok: false, error: "Unauthorized" });
    }
    if (!payload.name || !isValidEmail(payload.email)) {
      return jsonResponse({ ok: false, error: "Invalid lead details" });
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
      if (!sheet) throw new Error("Leads sheet not found");
      const rowCount = Math.max(sheet.getLastRow() - 1, 1);
      const existingEmails = sheet.getRange(2, 3, rowCount, 1).getDisplayValues().flat()
        .map((value) => value.toLowerCase());
      if (!existingEmails.includes(String(payload.email).toLowerCase())) {
        sheet.appendRow([
          new Date(), sanitize(payload.name), sanitize(payload.email),
          sanitize(payload.source || "brandops.site chat"),
          sanitize(payload.sessionId || "unknown"), "New Lead",
          sanitize(payload.notes || "Early-access signup"),
        ]);
        GmailApp.sendEmail(
          NOTIFICATION_EMAIL,
          "New BrandOps early-access signup",
          [`Name: ${payload.name}`, `Email: ${payload.email}`,
           `Source: ${payload.source || "brandops.site chat"}`,
           `Time: ${new Date().toISOString()}`].join("\n"),
        );
      }
    } finally {
      lock.releaseLock();
    }
    return jsonResponse({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse({ ok: false, error: "Internal error" });
  }
}

function sanitize(value) {
  const text = String(value).trim();
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || ""));
}

function jsonResponse(body) {
  return ContentService.createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
