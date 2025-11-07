// Quick test script to verify email notifications work
// Run with: node test-email-notification.js

async function testEmailNotification() {
  console.log('\n🧪 Testing Email Notification...\n');

  const testData = {
    email: 'test@example.com',
    phone: '+1234567890',
    country: 'United States',
    planTitle: '1 Month Plan (TEST)',
    planPrice: '$9.99',
    timestamp: new Date().toISOString()
  };

  try {
    const response = await fetch('http://localhost:3000/api/save-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testData)
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Success! Lead saved.');
      console.log('\n📧 Check your email inbox now!');
      console.log('   Email should be from: onboarding@resend.dev');
      console.log('   Subject: 🎉 New Lead: 1 Month Plan (TEST) - test@example.com\n');
    } else {
      console.error('❌ Error:', result.error);
      console.log('\n💡 Make sure:');
      console.log('   1. npm run dev is running');
      console.log('   2. .env.local has RESEND_API_KEY and ADMIN_EMAIL');
      console.log('   3. Your Resend API key is valid\n');
    }
  } catch (error) {
    console.error('❌ Failed to connect:', error.message);
    console.log('\n💡 Is your dev server running? Try: npm run dev\n');
  }
}

// Run the test
testEmailNotification();
