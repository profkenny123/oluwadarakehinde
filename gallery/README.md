# Photo & Video Gallery

## How to add photos or videos

1. Upload your file into this `gallery` folder on GitHub.
2. **Name the file as the caption** you want shown on the website.
   - Use hyphens or underscores instead of spaces.
   - Example: `Town-hall-meeting-Ayetoro-August-2026.jpg`
   - Example: `Youth-engagement-Imeko.mp4`
3. Open `gallery.json` in this same folder and add a new entry:

```json
{
  "file": "Town-hall-meeting-Ayetoro-August-2026.jpg",
  "caption": "Town hall meeting Ayetoro August 2026"
}
```

4. Commit / push. Vercel will update the live site automatically.

Supported formats: .jpg .jpeg .png .webp .gif .mp4 .webm
