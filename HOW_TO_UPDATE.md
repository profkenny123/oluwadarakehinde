# How to update the campaign site & Apps Script

## 1. Redeploy Google Apps Script (required for email + phone ID)

1. Open [script.google.com](https://script.google.com) with the same Google account that owns the Sheet.
2. Open the existing **OK Campaign** project (or the one already linked to your Web App URL).
3. Replace **all** code with the contents of `GOOGLE_APPS_SCRIPT.js` from this folder.
4. **Deploy → Manage deployments → Edit (pencil) → New version → Deploy**.
5. Keep the same Web App URL (Already used on the website).

What this enables:
- Optional **Email** column on the existing Volunteers sheet (no new sheet)
- Welcome email with Campaign Sticker + WhatsApp links when email is provided
- Phone as unique ID (upsert if same phone registers again)
- Supporters list for task logging (name + phone search)

## 2. Website files

After GitHub push / Vercel deploy, these are live:

| File | Change |
|------|--------|
| `index.html` | Email field, NG phone validation, expanded About, redirect to tasks after submit |
| `tasks.html` | Gallery merged, Share now (device share sheet), log only after Copy/Share, name+phone typeahead |
| `gallery.html` | Redirects to `tasks.html#gallery` |
| `GOOGLE_APPS_SCRIPT.js` | Email + welcome mail + phone upsert |

## 3. WhatsApp links in welcome email

- Ogun West / Others: https://chat.whatsapp.com/CxSSZdmVPfW6zhj8yXbZPX
- Yewa North: https://chat.whatsapp.com/KjNTG1ggLpBGKZuO27CbDP
- Imeko Afon: add later in Apps Script `WA_LINKS`

## 4. Test checklist

1. Register with phone `08031234567` + optional email → should land on Daily Tasks.
2. On Tasks: Copy text or Share now → then **Log it** appears.
3. Type name or phone digits → pick from dropdown → submit activity.
4. Check Google Sheet for Email column and new row.
5. If email given, check inbox for welcome message (may land in spam once).
