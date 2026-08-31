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
    if (payload.type === "social_post") {
      return saveSocialPost(payload);
    }
    if (payload.type === "linkedin_connection") {
      return saveLinkedInConnection(payload);
    }
    if (payload.type === "social_post_approve") {
      return approveSocialPost(payload);
    }
    if (payload.type === "social_post_publish") {
      return publishSocialPost(payload);
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

function saveSocialPost(payload) {
  if (!payload.external_id || payload.brand !== "brandops") {
    return jsonResponse({ ok: false, error: "Invalid social post" });
  }
  if (!Array.isArray(payload.platforms) || payload.platforms.length !== 1 ||
      payload.platforms[0] !== "linkedin" ||
      payload.approval_status !== "review_required") {
    return jsonResponse({ ok: false, error: "Unsupported publishing configuration" });
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName("Social Posts");
    if (!sheet) {
      sheet = spreadsheet.insertSheet("Social Posts");
      sheet.appendRow([
        "Received At", "External ID", "Brand", "Platforms", "Content",
        "Image URL", "Image Brief", "Source URLs", "Scheduled At",
        "Approval Status", "Publishing Status", "Platform Post ID", "Last Error",
      ]);
      sheet.setFrozenRows(1);
    }

    if (sheet.getLastRow() > 1) {
      const existingIds = sheet.getRange(2, 2, sheet.getLastRow() - 1, 1)
        .getDisplayValues().flat();
      if (existingIds.includes(String(payload.external_id))) {
        return jsonResponse({
          ok: true,
          duplicate: true,
          status: "review_required",
        });
      }
    }

    sheet.appendRow([
      new Date(),
      sanitize(payload.external_id),
      "brandops",
      "linkedin",
      sanitize(payload.content),
      sanitize(payload.image_url || ""),
      sanitize(payload.image_brief || ""),
      sanitize((payload.source_urls || []).join("\n")),
      sanitize(payload.scheduled_at),
      "review_required",
      "queued",
      "",
      "",
    ]);
    return jsonResponse({ ok: true, duplicate: false, status: "review_required" });
  } finally {
    lock.releaseLock();
  }
}

function saveLinkedInConnection(payload) {
  if (!payload.access_token || !payload.person_id) {
    return jsonResponse({ ok: false, error: "Invalid LinkedIn connection" });
  }
  const properties = PropertiesService.getScriptProperties();
  properties.setProperties({
    LINKEDIN_ACCESS_TOKEN: String(payload.access_token),
    LINKEDIN_PERSON_ID: String(payload.person_id),
    LINKEDIN_TOKEN_EXPIRES_AT: String(
      Date.now() + Math.max(Number(payload.expires_in || 0) - 300, 0) * 1000
    ),
  });
  return jsonResponse({ ok: true });
}

function findSocialPost(externalId) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("Social Posts");
  if (!sheet || sheet.getLastRow() < 2) return null;
  const ids = sheet.getRange(2, 2, sheet.getLastRow() - 1, 1).getDisplayValues().flat();
  const index = ids.indexOf(String(externalId));
  return index === -1 ? null : { sheet: sheet, row: index + 2 };
}

function approveSocialPost(payload) {
  const post = findSocialPost(payload.external_id);
  if (!post) return jsonResponse({ ok: false, error: "Post not found" });
  if (post.sheet.getRange(post.row, 11).getDisplayValue() === "published") {
    return jsonResponse({ ok: false, error: "Post already published" });
  }
  post.sheet.getRange(post.row, 10).setValue("approved");
  post.sheet.getRange(post.row, 11).setValue("approved");
  return jsonResponse({ ok: true, status: "approved" });
}

function publishSocialPost(payload) {
  const post = findSocialPost(payload.external_id);
  if (!post) return jsonResponse({ ok: false, error: "Post not found" });

  const approval = post.sheet.getRange(post.row, 10).getDisplayValue();
  const status = post.sheet.getRange(post.row, 11).getDisplayValue();
  if (approval !== "approved") {
    return jsonResponse({ ok: false, error: "Post is not approved" });
  }
  if (status === "published") {
    return jsonResponse({
      ok: true,
      platform_post_id: post.sheet.getRange(post.row, 12).getDisplayValue(),
    });
  }

  const properties = PropertiesService.getScriptProperties();
  const accessToken = properties.getProperty("LINKEDIN_ACCESS_TOKEN");
  const personId = properties.getProperty("LINKEDIN_PERSON_ID");
  const expiresAt = Number(properties.getProperty("LINKEDIN_TOKEN_EXPIRES_AT") || 0);
  if (!accessToken || !personId || Date.now() >= expiresAt) {
    return jsonResponse({ ok: false, error: "LinkedIn connection is missing or expired" });
  }

  const content = post.sheet.getRange(post.row, 5).getDisplayValue();
  try {
    const response = UrlFetchApp.fetch("https://api.linkedin.com/rest/posts", {
      method: "post",
      contentType: "application/json",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Linkedin-Version": "202607",
        "X-Restli-Protocol-Version": "2.0.0",
      },
      payload: JSON.stringify({
        author: "urn:li:person:" + personId,
        commentary: content,
        visibility: "PUBLIC",
        distribution: {
          feedDistribution: "MAIN_FEED",
          targetEntities: [],
          thirdPartyDistributionChannels: [],
        },
        lifecycleState: "PUBLISHED",
        isReshareDisabledByAuthor: false,
      }),
      muteHttpExceptions: true,
    });
    const code = response.getResponseCode();
    const headers = response.getAllHeaders();
    const postId = headers["x-restli-id"] || headers["X-RestLi-Id"] || "";
    if (code < 200 || code >= 300 || !postId) {
      const error = "LinkedIn returned " + code + ": " + response.getContentText().slice(0, 500);
      post.sheet.getRange(post.row, 11).setValue("failed");
      post.sheet.getRange(post.row, 13).setValue(sanitize(error));
      return jsonResponse({ ok: false, error: error });
    }
    post.sheet.getRange(post.row, 11).setValue("published");
    post.sheet.getRange(post.row, 12).setValue(String(postId));
    post.sheet.getRange(post.row, 13).setValue("");
    return jsonResponse({ ok: true, platform_post_id: String(postId) });
  } catch (error) {
    post.sheet.getRange(post.row, 11).setValue("failed");
    post.sheet.getRange(post.row, 13).setValue(sanitize(error));
    return jsonResponse({ ok: false, error: "LinkedIn publishing failed" });
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
