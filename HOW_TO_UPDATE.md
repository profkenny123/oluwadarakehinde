# How to update the campaign site & Apps Script

## Email column on Google Sheet

A sheet **with Email column** (and all existing volunteers + Activities) is ready:

https://docs.google.com/spreadsheets/d/1sNj5ly4cPHpEei-5lPUnwo_74BPozFOdJzk1l4QeuyI/edit

Headers: Timestamp | Full Name | Phone Number | **Email** | LGA | Ward | ...

Google Drive connector cannot edit cells inside an existing Google Sheet in place. The Email column was added by exporting your data, inserting Email after Phone, and uploading this updated copy.

**Recommended:** Use the sheet above as the live campaign sheet (Apps Script already points to it once you paste the new GOOGLE_APPS_SCRIPT.js).

Your original sheet (without Email) remains at:
https://docs.google.com/spreadsheets/d/1YhHcRz1ZJF0DqIjVp5PoQgs6FcRQev30LGwRxZaRt5k/edit

---

## Redeploy Google Apps Script (required)

1. Open script.google.com with the account that owns the Sheet.
2. Open the existing OK Campaign project.
3. Replace **all** code with `GOOGLE_APPS_SCRIPT.js` from this repo.
4. Deploy → Manage deployments → Edit → New version → Deploy (same Web App URL).

## Website files

| File | Change |
|------|--------|
| index.html | Email field, NG phone validation, About expanded, redirect to tasks |
| tasks.html | Gallery merged, Share now, log after Copy/Share, name+phone typeahead |
| gallery.html | Redirects to tasks.html#gallery |

## WhatsApp in welcome email

- Ogun West / Others: https://chat.whatsapp.com/CxSSZdmVPfW6zhj8yXbZPX
- Yewa North: https://chat.whatsapp.com/KjNTG1ggLpBGKZuO27CbDP
- Imeko Afon: add later in WA_LINKS
