/**
 * ============================================================================
 * JAYAM BUILDERS - GOOGLE APPS SCRIPT FORM INTEGRATION (Google Sheets)
 * ============================================================================
 * 
 * Instructions to set up:
 * 1. Open Google Sheets (https://sheets.new) and name the spreadsheet:
 *    "Jayam Builders - Website Lead Submissions"
 * 2. In Google Sheets, click "Extensions" -> "Apps Script".
 * 3. Delete any existing code in the editor and paste this entire script.
 * 4. (Optional) Replace 'jayambuildersco@gmail.com' below with your notification email.
 * 5. Click "Deploy" -> "New deployment".
 * 6. Select type: "Web app".
 * 7. Set Description: "Jayam Builders Website Lead Collector".
 * 8. Set Execute as: "Me (your google account)".
 * 9. Set Who has access: "Anyone" (CRITICAL: Must be "Anyone" so the website can submit leads).
 * 10. Click "Deploy", Authorize permissions when prompted.
 * 11. Copy the generated "Web App URL" (e.g., https://script.google.com/macros/s/.../exec).
 * 12. Paste the URL into your project's `.env` as `VITE_GOOGLE_SHEETS_SCRIPT_URL=...`
 * ============================================================================
 */

// Email to receive new lead alert notifications
var NOTIFICATION_EMAIL = "jayambuildersco@gmail.com";
var SHEET_TAB_NAME = "Website Leads";

function doPost(e) {
  try {
    var rawData;
    if (e && e.postData && e.postData.contents) {
      try {
        rawData = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        // Fallback for form-encoded payload
        rawData = e.parameter || {};
      }
    } else if (e && e.parameter) {
      rawData = e.parameter;
    } else {
      rawData = {};
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_TAB_NAME);

    // If sheet doesn't exist, create it and set up column headers
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_TAB_NAME);
      var headers = [
        "Timestamp (IST)",
        "Client Name",
        "Mobile Number",
        "WhatsApp Number",
        "City / Project Location",
        "Project Requirement",
        "Owns Plot?",
        "Plot Size / Dimensions",
        "Approx Built-up Area",
        "Current Stage",
        "Expected Start Timeline",
        "Approx Budget Range",
        "Client Message / Notes",
        "Submission Source",
        "UTM Source",
        "UTM Medium",
        "UTM Campaign",
        "UTM Content"
      ];
      sheet.appendRow(headers);

      // Style header row (Dark Navy with Gold/White text)
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#071322");
      headerRange.setFontColor("#ffffff");
      headerRange.setFontWeight("bold");
      headerRange.setFontFamily("Arial");
      sheet.setFrozenRows(1);
    }

    var timestamp = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");
    var name = rawData.name || "";
    var mobile = rawData.mobile || "";
    var whatsapp = rawData.whatsapp || rawData.mobile || "";
    var city = rawData.city || "";
    var projectType = rawData.projectType || "";
    var plotStatus = rawData.plotStatus || "";
    var plotSize = rawData.plotSize || "";
    var builtUpArea = rawData.builtUpArea || "";
    var currentStage = rawData.currentStage || "";
    var expectedStartTime = rawData.expectedStartTime || "";
    var budgetRange = rawData.budgetRange || "";
    var message = rawData.message || "";
    var source = rawData.source || "Website Estimate Form";

    // Extract UTM parameters if present
    var utmParams = rawData.utmParams || {};
    var utmSource = utmParams.utm_source || rawData.utm_source || "";
    var utmMedium = utmParams.utm_medium || rawData.utm_medium || "";
    var utmCampaign = utmParams.utm_campaign || rawData.utm_campaign || "";
    var utmContent = utmParams.utm_content || rawData.utm_content || "";

    // Append new lead row
    sheet.appendRow([
      timestamp,
      name,
      mobile,
      whatsapp,
      city,
      projectType,
      plotStatus,
      plotSize,
      builtUpArea,
      currentStage,
      expectedStartTime,
      budgetRange,
      message,
      source,
      utmSource,
      utmMedium,
      utmCampaign,
      utmContent
    ]);

    // Format new row styling
    var lastRow = sheet.getLastRow();
    var rowRange = sheet.getRange(lastRow, 1, 1, 18);
    rowRange.setFontFamily("Arial");
    rowRange.setVerticalAlignment("middle");

    // Optional: Send instant email notification to Jayam Builders team
    if (NOTIFICATION_EMAIL) {
      try {
        var emailSubject = "🏗️ New Website Lead: " + name + " (" + city + ") - " + projectType;
        var emailBody =
          "<h3>New Construction Enquiry Received</h3>" +
          "<table border='1' cellpadding='8' cellspacing='0' style='border-collapse: collapse; font-family: Arial, sans-serif;'>" +
          "<tr style='background-color: #071322; color: #ffffff;'><th colspan='2'>Lead Details</th></tr>" +
          "<tr><td><b>Timestamp</b></td><td>" + timestamp + "</td></tr>" +
          "<tr><td><b>Name</b></td><td>" + name + "</td></tr>" +
          "<tr><td><b>Mobile</b></td><td><a href='tel:" + mobile + "'>" + mobile + "</a></td></tr>" +
          "<tr><td><b>WhatsApp</b></td><td><a href='https://wa.me/91" + whatsapp.replace(/[^0-9]/g, '') + "'>" + whatsapp + "</a></td></tr>" +
          "<tr><td><b>City / Location</b></td><td>" + city + "</td></tr>" +
          "<tr><td><b>Project Type</b></td><td>" + projectType + "</td></tr>" +
          "<tr><td><b>Plot Status</b></td><td>" + plotStatus + "</td></tr>" +
          "<tr><td><b>Plot Size</b></td><td>" + plotSize + "</td></tr>" +
          "<tr><td><b>Approx Built-up Area</b></td><td>" + builtUpArea + "</td></tr>" +
          "<tr><td><b>Current Stage</b></td><td>" + currentStage + "</td></tr>" +
          "<tr><td><b>Expected Start</b></td><td>" + expectedStartTime + "</td></tr>" +
          "<tr><td><b>Budget Range</b></td><td>" + budgetRange + "</td></tr>" +
          "<tr><td><b>Message / Notes</b></td><td>" + message + "</td></tr>" +
          "<tr><td><b>Source</b></td><td>" + source + "</td></tr>" +
          "</table>" +
          "<p style='color: #666; font-size: 12px; margin-top: 15px;'>Jayam Builders • Civil Engineers & Builders (Est. 1998)</p>";

        MailApp.sendEmail({
          to: NOTIFICATION_EMAIL,
          subject: emailSubject,
          htmlBody: emailBody
        });
      } catch (mailErr) {
        Logger.log("Email notification error: " + mailErr.toString());
      }
    }

    // Return CORS-compliant JSON response
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Lead saved successfully", timestamp: timestamp }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("Error handling lead submission: " + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Fallback for simple GET requests to test if script is live
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "active", service: "Jayam Builders Lead Webhook Endpoint" }))
    .setMimeType(ContentService.MimeType.JSON);
}
