// Test script to verify Resend email functionality
// Run with: node test-email.js

const { Resend } = require('resend');

const resend = new Resend('re_Q4M5aXE6_EaNLhhY3zqREorHDo5vw5srV');

async function testEmail() {
  try {
    console.log('Sending test email...');
    
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'touradam3@gmail.com', // Your verified Resend email
      subject: 'Test Email from A-dama AI Labs',
      html: '<p>Congrats! Your email integration is working correctly! 🎉</p><p>Your A-dama AI Labs website contact form is ready to use.</p>'
    });

    console.log('✅ Email sent successfully!');
    console.log('Response:', data);
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
}

testEmail();

