# Google Sheets Integration - Step-by-Step Guide

## 📊 **Complete Setup in 10 Minutes**

### **Step 1: Create Your Google Sheet**

1. Go to https://sheets.google.com
2. Click **+ Blank** to create a new sheet
3. Name it: **"StreamVerse Leads"**
4. In the first row (headers), add these columns:

   ```
   A1: Email
   B1: Phone
   C1: Country
   D1: Plan
   E1: Price
   F1: Timestamp
   G1: Source
   ```

   Your sheet should look like this:
   ```
   | Email | Phone | Country | Plan | Price | Timestamp | Source |
   |-------|-------|---------|------|-------|-----------|--------|
   |       |       |         |      |       |           |        |
   ```

---

### **Step 2: Set Up Google Apps Script**

1. In your Google Sheet, click **Extensions** (top menu)
2. Click **Apps Script**
3. You'll see a code editor with `function myFunction() { }`
4. **Delete all existing code**
5. **Copy and paste this EXACT code:**

```javascript
function doPost(e) {
  try {
    // Get the active sheet (first sheet in your spreadsheet)
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Add a new row with the lead data
    sheet.appendRow([
      data.email,
      data.phone,
      data.country,
      data.plan,
      data.price,
      data.timestamp,
      data.source || 'website'
    ]);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({success: true, message: 'Lead saved to Google Sheets'})
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({success: false, error: error.toString()})
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Test function to verify it works
function testSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([
    'test@example.com',
    '+1234567890',
    'United States',
    '1 Month Plan',
    '$9.99',
    new Date().toISOString(),
    'test'
  ]);
  Logger.log('Test row added successfully!');
}
```

6. Click **Save** (💾 icon or Ctrl+S)
7. Name your project: **"StreamVerse Lead Collector"**

---

### **Step 3: Test the Script (Optional but Recommended)**

1. In the Apps Script editor, select **testSheet** from the function dropdown (top bar)
2. Click **Run** (▶️ play button)
3. **First time only:** You'll see a warning "Authorization required"
   - Click **Review permissions**
   - Choose your Google account
   - Click **Advanced**
   - Click **Go to StreamVerse Lead Collector (unsafe)** - This is YOUR script, it's safe
   - Click **Allow**
4. Go back to your Google Sheet - you should see a test row added!
5. Delete the test row

---

### **Step 4: Deploy as Web App**

1. In the Apps Script editor, click **Deploy** (top right)
2. Click **New deployment**
3. Click the gear icon ⚙️ next to "Select type"
4. Choose **Web app**
5. Fill in the settings:
   - **Description:** "Lead collection webhook"
   - **Execute as:** **Me (your-email@gmail.com)**
   - **Who has access:** **Anyone** ⚠️ Important!
6. Click **Deploy**
7. You might see another authorization prompt - click **Authorize access** and allow
8. **Copy the Web App URL** - it looks like:
   ```
   https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXXXXXX/exec
   ```
   ⚠️ **SAVE THIS URL - You need it for the next step!**

---

### **Step 5: Add to Your Environment Variables**

1. In VS Code, create a file called `.env.local` in the root of your project
2. Add this line (replace with YOUR actual URL):

```bash
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXXXXXX/exec
```

3. **For production (VPS),** also add it to `.env.production`:

```bash
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXXXXXX/exec
SITE_URL=https://yourdomain.com
```

---

### **Step 6: Test the Full Flow**

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Open your site:** http://localhost:3000/pricing

3. **Click any "Get Started" button**

4. **Fill in the popup form:**
   - Email: test@example.com
   - Country: United States
   - Phone: +1234567890

5. **Click "Continue to WhatsApp"**

6. **Check your Google Sheet** - You should see a new row with all the data!

---

## ✅ **Success! Your Leads Are Now Being Saved**

Every time someone clicks "Get Started" and fills out the form:
- ✅ Data is instantly saved to your Google Sheet
- ✅ WhatsApp opens with pre-filled message
- ✅ You have their email, phone, country for marketing

---

## 📊 **What to Do With Your Data**

### **Immediate Actions:**
1. **Download your sheet as CSV** weekly
2. **Import to Mailchimp** for email campaigns
3. **Create segments** by country or plan
4. **Send follow-up emails** to people who didn't complete signup

### **Automation Ideas:**
1. **Zapier Integration:**
   - Trigger: New row in Google Sheets
   - Action: Add to Mailchimp list automatically
   - Free tier: 100 tasks/month

2. **Email Automation:**
   - Welcome email after 5 minutes
   - Follow-up if no WhatsApp message received
   - Special offers based on selected plan

---

## 🔧 **Troubleshooting**

### **Problem: "Authorization required" error**
**Solution:** You need to authorize the script to access your Google account. Follow Step 3 above.

### **Problem: No data appearing in sheet**
**Solutions:**
1. Check `.env.local` has the correct URL
2. Make sure you deployed as "Anyone" can access
3. Check browser console for errors (F12)
4. Verify the Apps Script is saved

### **Problem: "Permission denied" when deploying**
**Solution:** Make sure you're logged into the Google account that owns the sheet.

### **Problem: Wrong data or missing columns**
**Solution:** Check that your headers in row 1 match exactly:
   ```
   Email | Phone | Country | Plan | Price | Timestamp | Source
   ```

---

## 🎯 **Next Steps**

1. ✅ Test with real submission
2. ✅ Set up Mailchimp (optional) - see main LEAD-COLLECTION-SETUP.md
3. ✅ Add privacy policy update
4. ✅ Start your first email campaign!

---

## 📞 **Quick Reference**

**Your Apps Script URL location:**
- Google Sheet → Extensions → Apps Script → Deploy → Manage deployments → Copy URL

**Environment variable format:**
```bash
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

**Test endpoint directly (optional):**
```bash
curl -X POST "YOUR_WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","phone":"+123","country":"US","plan":"Test","price":"$9.99","timestamp":"2025-11-07","source":"test"}'
```

If you see a success message, it's working! Check your sheet for the new row.
