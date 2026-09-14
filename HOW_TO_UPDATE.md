# How to update the campaign site & Apps Script

## Sheet

Live sheet: https://docs.google.com/spreadsheets/d/1sNj5ly4cPHpEei-5lPUnwo_74BPozFOdJzk1l4QeuyI/edit

Apps Script will auto-add columns on first run:

**Volunteers:** ReferralCode | ReferredBy | Coins | TasksLifetime | LastTaskDate | TasksToday  

**Activities:** DayKey | CoinsAwarded  

**CoinLedger** (new sheet): audit trail of every coin movement

## Redeploy Google Apps Script (required for OK-Coins)

1. Open [script.google.com](https://script.google.com) with the Sheet owner account.
2. Open the OK Campaign project.
3. Replace **all** code with `GOOGLE_APPS_SCRIPT.js` from this repo.
4. **Deploy → Manage deployments → Edit (pencil) → New version → Deploy**.
5. Keep the same Web App URL if possible (site already points to it).

### API (after deploy)

| Method | Action |
|--------|--------|
| POST `type=volunteer` | Register / update; accepts `referredBy` from `?ref=` |
| POST `type=activity` | Log task; +10 self, +3 direct upline, +1 grand; max 10/day |
| GET `?action=me&phone=` | Balance, tier, today count, referral link |
| GET `?action=leaderboard` | Lifetime OK-Coins top 20 |
| GET `?action=supporters` | Name/phone list for typeahead |

### Coin rules

| Event | Coins |
|-------|-------|
| Complete 1 task | **+10** to doer |
| Direct recruit completes a task | **+3** to referrer |
| Recruit’s recruit completes a task | **+1** to grand referrer |
| Max tasks per day (Lagos) | **10** |

Tiers (December awards): Bronze 1k · Silver 5k · Gold 20k · Diamond 50k · Star 100k

## Website files

| File | Change |
|------|--------|
| `GOOGLE_APPS_SCRIPT.js` | OK-Coins, 2-tier referral, daily cap, lifetime leaderboard |
| `tasks.html` | Identity session, dashboard, +10 flow, referral link, lifetime board |
| `index.html` | Captures `?ref=` and sends `referredBy` on volunteer signup |

## Referral links

Format: `https://www.oluwadarakehinde.com/?ref=OK-XXXX`  
Also works with phone: `?ref=0803…`

Share text on tasks includes the signed-in supporter’s personal link.

## WhatsApp in welcome email

- Ogun West / Others: https://chat.whatsapp.com/CxSSZdmVPfW6zhj8yXbZPX
- Yewa North: https://chat.whatsapp.com/KjNTG1ggLpBGKZuO27CbDP
- Imeko Afon: add later in `WA_LINKS`
