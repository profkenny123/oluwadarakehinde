/**
 * GOOGLE APPS SCRIPT – Paste this into script.google.com
 * Receives form data and writes it into the Google Sheet.
 *
 * STEPS:
 * 1. Open https://script.google.com → New project
 * 2. Paste this entire file
 * 3. Keep SPREADSHEET_ID as is (already set to your sheet)
 * 4. Deploy → New deployment → Web app
 *    Execute as: Me | Who has access: Anyone
 * 5. Copy the Web App URL and paste it into index.html
 */

const SPREADSHEET_ID = '1PMzbkMeW8yg_6Pl10jPCwJ9J7JQfwOXWOy85kd0bZuw';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheets()[0];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Full Name', 'Phone Number', 'Ward/LGA', 'How would you like to help?', 'Submitted At']);
    }

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.fullName || '',
      data.phone || '',
      data.ward || '',
      data.helpType || '',
      new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('OK Campaign form endpoint is live. Use POST to submit.')
    .setMimeType(ContentService.MimeType.TEXT);
}
