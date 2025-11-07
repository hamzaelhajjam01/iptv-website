# Lead Collection & Email Marketing Setup Guide

Your checkout popup now saves all user data (email, phone, country, plan) for future marketing campaigns. Here are the easiest ways to collect and use this data:

---

## 🎯 **RECOMMENDED: Google Sheets (FREE & Easy)**

### Setup Steps:

1. **Create a Google Sheet**
   - Go to [Google Sheets](https://sheets.google.com)
   - Create a new sheet called "StreamVerse Leads"
   - Add headers: `Email | Phone | Country | Plan | Price | Timestamp | Source`

2. **Set up Google Apps Script**
   - In your sheet, click **Extensions → Apps Script**
   - Replace the code with:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.email,
      data.phone,
      data.country,
      data.plan,
      data.price,
      data.timestamp,
      data.source
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. **Deploy as Web App**
   - Click **Deploy → New deployment**
   - Select type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**
   - Copy the **Web App URL**

4. **Add to Your Environment Variables**
   - Create/edit `.env.local` (for local dev) and `.env.production` (for production):

```bash
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

✅ **Done!** All leads will now be saved to your Google Sheet in real-time.

---

## 📧 **Email Marketing Integration**

### Option 1: Mailchimp (Most Popular)

1. **Get API Key**
   - Go to Mailchimp → Account → Extras → API keys
   - Create a new key

2. **Get List ID**
   - Go to Audience → Settings → Audience name and defaults
   - Copy the "Audience ID"

3. **Add to Environment Variables**

```bash
MAILCHIMP_API_KEY=your-api-key-here
MAILCHIMP_LIST_ID=your-list-id-here
```

4. **Benefits**
   - Automatic email sequences
   - Segmentation by plan/country
   - Built-in email templates
   - Free for up to 500 contacts

---

### Option 2: ConvertKit (Creator-Focused)

1. **Get API Secret**
   - Settings → Advanced → API Secret

2. **Create a Form**
   - Forms → New Form
   - Get the Form ID from URL

3. **Add to Environment Variables**

```bash
CONVERTKIT_API_SECRET=your-secret-here
CONVERTKIT_FORM_ID=your-form-id
```

---

### Option 3: Resend (Email Notifications to You)

Get instant email alerts when someone fills the form:

1. **Sign up at [Resend.com](https://resend.com)** (Free tier: 100 emails/day)

2. **Get API Key**
   - Dashboard → API Keys → Create

3. **Add to Environment Variables**

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxx
ADMIN_EMAIL=your@email.com
```

You'll get an email notification for every lead with all their details.

---

## 💾 **Database Storage (Advanced)**

### For Larger Scale Operations:

#### Vercel Postgres (Recommended if hosting on Vercel)

1. **Install package**
```bash
npm install @vercel/postgres
```

2. **Create table in Vercel Dashboard**
```sql
CREATE TABLE leads (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  country VARCHAR(100),
  plan_title VARCHAR(100),
  plan_price VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

3. **Environment Variables** (auto-configured in Vercel)
```bash
POSTGRES_URL=...
```

4. **Uncomment database code in `/app/api/save-lead/route.ts`**

---

## 📱 **SMS Marketing Setup**

### Twilio SMS Integration

1. **Sign up at [Twilio.com](https://www.twilio.com)**

2. **Get Credentials**
   - Account SID
   - Auth Token
   - Twilio Phone Number

3. **Add to Environment Variables**
```bash
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your-auth-token
TWILIO_PHONE_NUMBER=+1234567890
```

4. **Add SMS endpoint** (create `app/api/send-sms/route.ts`):

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { phone, message } = await request.json();
  
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioNumber = process.env.TWILIO_PHONE_NUMBER;

  await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + Buffer.from(`${accountSid}:${authToken}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      To: phone,
      From: twilioNumber,
      Body: message,
    }),
  });

  return NextResponse.json({ success: true });
}
```

---

## 🚀 **Quick Start (Easiest Path)**

**For Immediate Results:**

1. ✅ Set up Google Sheets webhook (5 minutes)
2. ✅ Add Resend for email notifications (5 minutes)
3. ✅ Later: Import Google Sheet contacts into Mailchimp for campaigns

**Environment Variables Summary:**
```bash
# .env.local and .env.production

# WhatsApp
WHATSAPP_NUMBER=1234567890

# Google Sheets (required)
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_ID/exec

# Email notifications (optional but recommended)
RESEND_API_KEY=re_xxxxxxxxxxxxx
ADMIN_EMAIL=your@email.com

# Mailchimp (optional - for email marketing)
MAILCHIMP_API_KEY=xxxxxxxxxxxxxxx-us19
MAILCHIMP_LIST_ID=xxxxxxxxxx

# Twilio SMS (optional - for SMS campaigns)
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxx
TWILIO_PHONE_NUMBER=+1234567890
```

---

## 📊 **Using Your Data for Marketing**

### Email Campaign Ideas:
1. **Welcome Series** - 3 emails over 7 days introducing your service
2. **Abandoned Checkout** - Follow up with users who didn't complete WhatsApp
3. **Plan Upgrades** - Offer upgrades to users on cheaper plans
4. **Country-Specific Offers** - Target by geography
5. **Re-engagement** - Win back inactive subscribers

### SMS Campaign Ideas:
1. **Flash Sales** - 24-hour discount codes
2. **Payment Reminders** - For subscription renewals
3. **Service Updates** - New channels, features
4. **Support Follow-up** - Check satisfaction after signup

---

## 🔒 **Privacy & Compliance**

✅ **Already included in your popup:**
- Secure data collection
- User consent (by submitting form)

⚠️ **Add to your privacy policy:**
- Data collection disclosure
- Email/SMS opt-out instructions
- Data retention policy

**Recommended addition to popup footer:**
```tsx
<p className="text-xs text-gray-500 text-center mt-4">
  🔒 Your information is secure. By submitting, you agree to receive updates via email/SMS.
  <a href="/privacy-policy" className="underline ml-1">Privacy Policy</a>
</p>
```

---

## 🎯 **Next Steps**

1. Choose one lead storage method (Google Sheets recommended to start)
2. Set up environment variables
3. Test the flow with a dummy submission
4. Check your Google Sheet / Email / Database for the test data
5. Set up your first email campaign in Mailchimp
6. Start collecting leads! 🚀

---

Need help with setup? The API endpoint at `/app/api/save-lead/route.ts` is already configured and ready to use with any of these services.
