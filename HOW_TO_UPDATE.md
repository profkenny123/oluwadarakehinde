# How to update Gallery, News, and Daily Tasks

## Photo Gallery
1. Upload photo/video into the `gallery` folder on GitHub.
2. Name the file as the caption (use hyphens): `Youth-rally-Ayetoro-Sept-2026.jpg`
3. Edit `gallery/gallery.json` and add:
```json
{ "file": "Youth-rally-Ayetoro-Sept-2026.jpg", "caption": "Youth rally Ayetoro Sept 2026" }
```
4. Commit. Site updates automatically.

## News
1. Open `news.json` on GitHub.
2. Add an object:
```json
{
  "id": "unique-id",
  "title": "Headline of the article",
  "url": "https://example.com/full-article",
  "source": "Newspaper name",
  "date": "2026-09-01",
  "summary": "One or two sentences"
}
```
3. Commit. Appears in News page carousel + list.
4. Clicking a news item opens an in-site reader. If the news site blocks embedding, use **Open original**.

## Daily Tasks & Leaderboard
1. Redeploy the Google Apps Script (paste updated `GOOGLE_APPS_SCRIPT.js`).
2. New deployment → Web app → Anyone.
3. Put the new Web App URL into `tasks.html` (and `index.html` form if needed).
4. Supporters log tasks on the Daily Tasks page; weekly leaderboard appears automatically.

Sheet tabs used:
- First sheet / Volunteers — volunteer form
- Activities — daily task logs (created automatically)
