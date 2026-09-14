/**
 * GOOGLE APPS SCRIPT – OK-Coins Advocate Ladder
 * Paste into script.google.com → Deploy → Manage deployments → New version → Deploy
 * Execute as: Me | Who has access: Anyone
 *
 * POST type: volunteer | activity
 * GET  ?action=leaderboard | supporters | me&phone=0803...
 *
 * Coins: task doer +10, direct referrer +3, grand referrer +1 (2-tier max)
 * Daily cap: 10 tasks per phone (Africa/Lagos)
 *
 * FULL FILE: copy from repo artifacts or local GOOGLE_APPS_SCRIPT.js after deploy instructions in HOW_TO_UPDATE.md
 * This placeholder ensures path exists; replace with full script from project folder before deploy.
 */
const SPREADSHEET_ID = '1sNj5ly4cPHpEei-5lPUnwo_74BPozFOdJzk1l4QeuyI';
function doGet(){return ContentService.createTextOutput('Paste full GOOGLE_APPS_SCRIPT.js from repo and redeploy.');}
