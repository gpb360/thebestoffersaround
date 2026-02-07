#!/usr/bin/env node

/**
 * Test Email Script
 * Verifies Resend email integration is working
 */

import { Resend } from 'resend';

const RESEND_API_KEY = 're_iAruQ65Y_K5bbFLrgcRDw7M6FrgsFty11';
const resend = new Resend(RESEND_API_KEY);

// Test email to your registered address
const testEmail = {
  from: 'The Best Offers Around <onboarding@resend.dev>',
  to: 'garypboyd@rogers.com',
  subject: '✅ Resend Email Test - The Best Offers Around',
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
    </head>
    <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0a0a0a;">
      <div style="background: linear-gradient(135deg, #d4af37 0%, #f4e4bc 100%); padding: 30px; text-align: center; border-radius: 8px;">
        <h1 style="margin: 0; color: #0a0a0a;">✅ Email Test Successful!</h1>
      </div>
      <div style="padding: 30px 0;">
        <h2 style="color: #d4af37;">Your Resend integration is working!</h2>
        <p style="color: #e0e0e0; line-height: 1.6;">
          Great news! Your email service is properly configured and ready to send newsletters.
        </p>
        <ul style="color: #e0e0e0;">
          <li>✅ API key valid</li>
          <li>✅ From address configured</li>
          <li>✅ HTML templates rendering</li>
          <li>✅ Ready to send welcome emails</li>
        </ul>
        <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 10px; color: #d4af37; font-weight: bold;">Next Steps:</p>
          <ol style="color: #e0e0e0; line-height: 1.8;">
            <li>Create your lead magnet PDF</li>
            <li>Upload to /public/downloads/</li>
            <li>Test newsletter signup on your site</li>
            <li>Start collecting subscribers! 🚀</li>
          </ol>
        </div>
        <p style="color: #a0a0a0; font-size: 14px; margin-top: 30px;">
          <strong>Free Tier:</strong> 3,000 emails/month<br>
          <strong>From:</strong> onboarding@resend.dev (upgrade to custom domain anytime)
        </p>
      </div>
      <div style="text-align: center; padding: 20px; border-top: 1px solid #333; margin-top: 30px;">
        <p style="margin: 0; color: #888; font-size: 12px;">
          The Best Offers Around | <a href="https://thebestoffersaround.com" style="color: #d4af37;">thebestoffersaround.com</a>
        </p>
      </div>
    </body>
    </html>
  `
};

console.log('📧 Sending test email to garypboyd@rogers.com...\n');

resend.emails.send(testEmail)
  .then((data) => {
    console.log('✅ SUCCESS! Email sent successfully.\n');
    console.log('Email ID:', data.data.id);
    console.log('\n📬 Check your inbox for the test email!');
    console.log('   (Also check spam folder if not in inbox)\n');
  })
  .catch((error) => {
    console.error('❌ Error sending email:');
    console.error(error.message);
    process.exit(1);
  });
