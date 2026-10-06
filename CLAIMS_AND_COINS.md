# OK-Coins values & Claims (Oct 2026)

## Coin values
| Action | OK-Coins |
|--------|----------|
| Daily share (task complete) | **+100** to supporter |
| Task upline (optional chain) | +50 to direct referrer, +10 to next |
| New supporter via your referral link | **+500** to you (referrer), +100 to new joiner, +50 to your upline |
| Daily max | 10 tasks / day (Lagos) |

## Awards (claim once per tier)
| Tier | OK-Coins | Reward |
|------|----------|--------|
| Bronze | 1,000 | 1GB data |
| Silver | 5,000 | ₦2,000 airtime |
| Gold | 20,000 | ₦5,000 cash |
| Diamond | 50,000 | ₦15,000 cash |
| Star | 100,000 | ₦30,000 cash |

## Claim flow
1. Supporter reaches tier coins on tasks page.
2. **Claim** button appears → posts to Apps Script `type: claim`.
3. Row added on **Claims** sheet: name, phone, tier, reward, status Pending.
4. Email sent to **profkenny123@gmail.com** with claim details.
5. Fulfil via SMS/WhatsApp to supporter; mark Status = Done on sheet.

## Notification
- **Email (built-in):** MailApp → profkenny123@gmail.com (works after you redeploy the script as yourself).
- **SMS / WhatsApp to +2348103341487:** Apps Script cannot send free WhatsApp/SMS by itself.
  - Options: Gmail phone notifications on claim emails; Twilio / Termii / Africa's Talking for SMS; WhatsApp Cloud API.
  - Recommended short-term: open claim emails on your phone.

## Deploy
1. Open script.google.com project bound to the campaign sheet.
2. Replace code with `GOOGLE_APPS_SCRIPT.js` from artifacts / this docs.
3. Deploy → Manage deployments → Edit → New version → Deploy.
4. First claim creates the **Claims** sheet automatically.
