/**
 * GOOGLE APPS SCRIPT – Paste into script.google.com and redeploy Web App
 * Execute as: Me | Who has access: Anyone
 * GET ?action=leaderboard | ?action=supporters
 * POST type volunteer | activity
 */
const SPREADSHEET_ID = '1YhHcRz1ZJF0DqIjVp5PoQgs6FcRQev30LGwRxZaRt5k';
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    if ((data.type || 'volunteer') === 'activity') return handleActivity(ss, data);
    return handleVolunteer(ss, data);
  } catch (error) {
    return jsonOut({ result: 'error', message: error.toString() });
  }
}
function doGet(e) {
  try {
    const action = (e.parameter && e.parameter.action) || '';
    if (action === 'leaderboard') return getLeaderboard();
    if (action === 'supporters') return getSupporters();
    return ContentService.createTextOutput('OK Campaign API is live.').setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    return jsonOut({ result: 'error', message: error.toString() });
  }
}
function handleVolunteer(ss, data) {
  let sheet = ss.getSheetByName('Volunteers');
  if (!sheet) sheet = ss.getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp','Full Name','Phone Number','LGA','Ward','Polling Agent','Ward Mobilizer','Social Media Advocate','Donor','Submitted At']);
  }
  const helps = Array.isArray(data.helpOptions) ? data.helpOptions : [];
  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.fullName || '', data.phone || '', data.lga || '', data.ward || '',
    helps.includes('Polling Agent') ? 'Yes' : '',
    helps.includes('Ward Mobilizer') ? 'Yes' : '',
    helps.includes('Social Media Advocate') ? 'Yes' : '',
    helps.includes('Donor') ? 'Yes' : '',
    new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })
  ]);
  return jsonOut({ result: 'success' });
}
function handleActivity(ss, data) {
  let sheet = ss.getSheetByName('Activities');
  if (!sheet) { sheet = ss.insertSheet('Activities'); sheet.appendRow(['Timestamp','Full Name','Phone','Task','Note','Week','Submitted At']); }
  if (sheet.getLastRow() === 0) sheet.appendRow(['Timestamp','Full Name','Phone','Task','Note','Week','Submitted At']);
  const now = new Date();
  sheet.appendRow([data.timestamp || now.toISOString(), data.fullName || '', data.phone || '', data.task || '', data.note || '', getWeekKey(now), now.toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })]);
  return jsonOut({ result: 'success' });
}
function getSupporters() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName('Volunteers');
  if (!sheet) sheet = ss.getSheets()[0];
  if (!sheet || sheet.getLastRow() < 2) return jsonOut({ result: 'success', supporters: [] });
  const rows = sheet.getDataRange().getValues();
  const map = {};
  for (let i = 1; i < rows.length; i++) {
    const name = String(rows[i][1] || '').trim();
    const phone = String(rows[i][2] || '').trim();
    if (!name) continue;
    const key = name.toLowerCase();
    if (!map[key]) map[key] = { name: name, phone: phone };
    else if (phone && !map[key].phone) map[key].phone = phone;
  }
  const supporters = Object.values(map).sort(function(a,b){ return a.name.localeCompare(b.name); });
  return jsonOut({ result: 'success', supporters: supporters });
}
function getLeaderboard() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName('Activities');
  if (!sheet || sheet.getLastRow() < 2) return jsonOut({ result: 'success', week: getWeekKey(new Date()), leaders: [] });
  const currentWeek = getWeekKey(new Date());
  const rows = sheet.getDataRange().getValues();
  const counts = {};
  for (let i = 1; i < rows.length; i++) {
    const name = String(rows[i][1] || '').trim();
    const phone = String(rows[i][2] || '').trim();
    const week = String(rows[i][5] || '');
    if (week !== currentWeek) continue;
    if (!name && !phone) continue;
    const key = (phone || name).toLowerCase();
    if (!counts[key]) counts[key] = { name: name || 'Supporter', phone: phone, count: 0 };
    counts[key].count += 1;
    if (name) counts[key].name = name;
  }
  const leaders = Object.values(counts).sort(function(a,b){ return b.count - a.count; }).slice(0, 15).map(function(l, i) {
    return { rank: i + 1, name: l.name, phone: maskPhone(l.phone), tasks: l.count };
  });
  return jsonOut({ result: 'success', week: currentWeek, leaders: leaders });
}
function getWeekKey(d) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
  return date.getUTCFullYear() + '-W' + String(weekNo).padStart(2, '0');
}
function maskPhone(p) {
  if (!p || p.length < 7) return '';
  return p.slice(0, 4) + '***' + p.slice(-2);
}
function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
