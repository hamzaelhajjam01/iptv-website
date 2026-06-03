import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { deviceType, adultContent, planTitle, planPrice, timestamp, email, country, phone } = body;

    // Validate required fields
    if (!email || !phone || !country || !planTitle || !planPrice) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // OPTION 1: Google Sheets Integration (Recommended - Free & Easy)
    // You'll need to set GOOGLE_SHEETS_WEBHOOK_URL in your .env
    if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            // Core fields for the Google Sheet script
            email: email,
            country: country,
            phone: phone,
            plan: planTitle,
            price: planPrice,
            timestamp,
            source: 'website_checkout',
            // Explicit new fields
            deviceType: deviceType,
            adultContent: adultContent,
          }),
        });
      } catch (error) {
        console.error('Google Sheets save failed:', error);
      }
    }

    // OPTION 2: Email notification to yourself
    if (process.env.ADMIN_EMAIL && process.env.RESEND_API_KEY) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'onboarding@resend.dev', // Resend's free test domain
            to: process.env.ADMIN_EMAIL,
            subject: `🎉 New Lead: ${planTitle} - ${deviceType}`,
            html: `
              <!DOCTYPE html>
              <html>
              <head>
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                  .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                  .info-box { background: white; padding: 20px; margin: 15px 0; border-left: 4px solid #667eea; border-radius: 5px; }
                  .label { font-weight: bold; color: #667eea; display: inline-block; width: 120px; }
                  .value { color: #333; }
                  .cta { background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 20px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1>🎉 New Lead!</h1>
                    <p>Someone just clicked to WhatsApp</p>
                  </div>
                  <div class="content">
                    <div class="info-box">
                      <p><span class="label">📱 Device:</span> <span class="value">${deviceType}</span></p>
                      <p><span class="label">🔞 Adult Content:</span> <span class="value">${adultContent}</span></p>
                      <p><span class="label">📦 Plan:</span> <span class="value">${planTitle}</span></p>
                      <p><span class="label">💰 Price:</span> <span class="value">${planPrice}</span></p>
                      <p><span class="label">⏰ Time:</span> <span class="value">${new Date(timestamp).toLocaleString()}</span></p>
                    </div>
                  </div>
                </div>
              </body>
              </html>
            `,
          }),
        });
      } catch (error) {
        console.error('Email notification failed:', error);
      }
    }

    return NextResponse.json(
      { success: true, message: 'Lead saved successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving lead:', error);
    return NextResponse.json(
      { error: 'Failed to save lead' },
      { status: 500 }
    );
  }
}
