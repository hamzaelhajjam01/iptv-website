import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, country, phone, planTitle, planPrice, timestamp } = body;

    // Validate required fields
    if (!email || !country || !phone || !planTitle || !planPrice) {
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
            email,
            country,
            phone,
            plan: planTitle,
            price: planPrice,
            timestamp,
            source: 'website_checkout',
          }),
        });
      } catch (error) {
        console.error('Google Sheets save failed:', error);
      }
    }

    // OPTION 2: Email notification to yourself
    // You can set up a service like SendGrid, Mailgun, or Resend
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
            subject: `🎉 New Lead: ${planTitle} - ${email}`,
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
                    <p>Someone just showed interest in StreamVerse</p>
                  </div>
                  <div class="content">
                    <div class="info-box">
                      <p><span class="label">📧 Email:</span> <span class="value">${email}</span></p>
                      <p><span class="label">📱 Phone:</span> <span class="value">${phone}</span></p>
                      <p><span class="label">🌍 Country:</span> <span class="value">${country}</span></p>
                      <p><span class="label">📦 Plan:</span> <span class="value">${planTitle}</span></p>
                      <p><span class="label">💰 Price:</span> <span class="value">${planPrice}</span></p>
                      <p><span class="label">⏰ Time:</span> <span class="value">${new Date(timestamp).toLocaleString()}</span></p>
                    </div>
                    <p style="margin-top: 20px; color: #666;">
                      <strong>Next Steps:</strong><br>
                      1. Follow up on WhatsApp within 5 minutes<br>
                      2. Send them payment instructions<br>
                      3. Add them to your email campaign
                    </p>
                    <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" class="cta">
                      💬 Contact on WhatsApp
                    </a>
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

    // OPTION 3: Third-party CRM/Marketing tools
    // Examples: Mailchimp, ConvertKit, ActiveCampaign, HubSpot
    if (process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_LIST_ID) {
      try {
        const mailchimpServer = process.env.MAILCHIMP_API_KEY.split('-')[1];
        await fetch(
          `https://${mailchimpServer}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.MAILCHIMP_API_KEY}`,
            },
            body: JSON.stringify({
              email_address: email,
              status: 'subscribed',
              merge_fields: {
                PHONE: phone,
                COUNTRY: country,
                PLAN: planTitle,
                PRICE: planPrice,
              },
              tags: ['website-lead', planTitle.toLowerCase().replace(/\s+/g, '-')],
            }),
          }
        );
      } catch (error) {
        console.error('Mailchimp save failed:', error);
      }
    }

    // OPTION 4: Database (for larger scale)
    // You can use Vercel Postgres, Supabase, MongoDB Atlas, etc.
    // Example with Vercel Postgres (requires @vercel/postgres package):
    /*
    if (process.env.POSTGRES_URL) {
      const { sql } = await import('@vercel/postgres');
      await sql`
        INSERT INTO leads (email, phone, country, plan_title, plan_price, created_at)
        VALUES (${email}, ${phone}, ${country}, ${planTitle}, ${planPrice}, ${timestamp})
      `;
    }
    */

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
