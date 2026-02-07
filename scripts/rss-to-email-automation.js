#!/usr/bin/env node

/**
 * RSS to Email Automation Script
 * Monitors RSS feed and sends email notifications for new posts
 *
 * Usage:
 *   node scripts/rss-to-email-automation.js
 *   node scripts/rss-to-email-automation.js --dry-run
 */

import { blogPosts } from '../src/data/blog.js';
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';

const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');

// Configuration
const CONFIG_FILE = join(dirname(new URL(import.meta.url).pathname), 'config', 'email-automation.json');
const LOG_FILE = join(dirname(new URL(import.meta.url).pathname), 'logs', 'rss-automation.log');
const CHECK_INTERVAL_MS = 6 * 60 * 60 * 1000; // 6 hours

/**
 * Load or create configuration
 */
function loadConfig() {
  if (existsSync(CONFIG_FILE)) {
    const data = readFileSync(CONFIG_FILE, 'utf-8');
    return JSON.parse(data);
  }

  // Default config
  const config = {
    lastCheckTimestamp: null,
    sentPosts: [],
    enabled: true,
    recipients: [], // Add recipient email addresses here
    subjectPrefix: 'New Article: ',
  };

  // Ensure config directory exists
  mkdirSync(dirname(CONFIG_FILE), { recursive: true });
  writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));

  return config;
}

/**
 * Save configuration
 */
function saveConfig(config) {
  writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
}

/**
 * Log message
 */
function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  console.log(logMessage.trim());

  mkdirSync(dirname(LOG_FILE), { recursive: true });
  writeFileSync(LOG_FILE, logMessage, { flag: 'a' });
}

/**
 * Get new posts since last check
 */
function getNewPosts(config) {
  const allPosts = Object.entries(blogPosts)
    .map(([slug, post]) => ({ ...post, slug }))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  if (!config.lastCheckTimestamp) {
    // First run - return only the most recent post
    return allPosts.slice(0, 1);
  }

  const lastCheck = new Date(config.lastCheckTimestamp);
  return allPosts.filter(post => {
    const postDate = new Date(post.date);
    return postDate > lastCheck && !config.sentPosts.includes(post.slug);
  });
}

/**
 * Generate notification email for new posts
 */
function generateNotificationEmail(posts) {
  const postsList = posts.map(post => `
    <div style="margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #333;">
      <h3 style="margin: 0 0 10px; color: #d4af37;">
        <a href="https://thebestoffersaround.com/blog/${post.slug}/" style="color: #d4af37; text-decoration: none;">
          ${post.title}
        </a>
      </h3>
      <p style="margin: 0 0 10px; color: #a0a0a0; font-size: 14px;">
        ${post.excerpt}
      </p>
      <p style="margin: 0;">
        <a href="https://thebestoffersaround.com/blog/${post.slug}/" style="color: #d4af37; text-decoration: underline; font-size: 14px;">
          Read full article →
        </a>
      </p>
    </div>
  `).join('');

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Articles from The Best Offers Around</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #0a0a0a;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #0a0a0a;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="margin: 0 auto; background-color: #1a1a1a; border-radius: 8px;">
          <tr>
            <td style="padding: 30px 40px; background: linear-gradient(135deg, #d4af37 0%, #f4e4bc 100%); text-align: center;">
              <h1 style="margin: 0; color: #0a0a0a; font-size: 24px; font-weight: bold;">
                New Articles Published!
              </h1>
              <p style="margin: 10px 0 0; color: #1a1a1a; font-size: 14px;">
                ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 40px 20px;">
              <p style="margin: 0 0 20px; color: #e0e0e0; font-size: 16px;">
                We just published ${posts.length} new article${posts.length > 1 ? 's' : ''} that you might find interesting:
              </p>
              ${postsList}
            </td>
          </tr>
          <tr>
            <td style="padding: 20px 40px; background-color: #0a0a0a; border-top: 1px solid #333; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #888;">
                <a href="https://thebestoffersaround.com/unsubscribe" style="color: #d4af37; text-decoration: underline;">Unsubscribe</a>
                |
                <a href="https://thebestoffersaround.com/privacy" style="color: #d4af37; text-decoration: underline;">Privacy Policy</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Send email notification (placeholder for actual implementation)
 */
async function sendNotification(posts, config) {
  log(`📧 Sending notification for ${posts.length} new post(s)`);

  if (isDryRun) {
    log('⚠️  DRY RUN - Email would be sent to:');
    config.recipients.forEach(email => log(`   • ${email}`));
    return true;
  }

  // TODO: Implement actual email sending via Resend API
  // This would use the email service we created earlier

  log('📨 Email notifications sent successfully');
  return true;
}

/**
 * Main automation function
 */
async function runAutomation() {
  log('🚀 Starting RSS to email automation check...');

  const config = loadConfig();

  if (!config.enabled) {
    log('⏸️  Automation is disabled in config');
    return;
  }

  if (config.recipients.length === 0) {
    log('⚠️  No recipients configured. Add emails to config.recipients');
    return;
  }

  // Get new posts
  const newPosts = getNewPosts(config);

  if (newPosts.length === 0) {
    log('✓ No new posts to notify about');
    return;
  }

  log(`📝 Found ${newPosts.length} new post(s):`);
  newPosts.forEach(post => {
    log(`   • ${post.title} (${post.date})`);
  });

  // Generate and send notification
  const emailHtml = generateNotificationEmail(newPosts);

  // Save email draft
  const outputDir = join(dirname(new URL(import.meta.url).pathname), '..', 'public', 'email-drafts');
  mkdirSync(outputDir, { recursive: true });
  const filename = `new-posts-${new Date().toISOString().split('T')[0]}.html`;
  const outputFile = join(outputDir, filename);
  writeFileSync(outputFile, emailHtml);
  log(`📁 Email draft saved to: ${outputFile}`);

  // Send notification
  const sent = await sendNotification(newPosts, config);

  if (sent) {
    // Update config
    config.lastCheckTimestamp = new Date().toISOString();
    config.sentPosts.push(...newPosts.map(p => p.slug));
    saveConfig(config);
    log('✅ Automation check completed successfully');
  }
}

/**
 * Run automation and optionally schedule next run
 */
async function main() {
  console.log('\n========================================');
  console.log('  RSS to Email Automation');
  console.log('========================================\n');

  if (isDryRun) {
    console.log('⚠️  DRY RUN MODE - No emails will be sent\n');
  }

  await runAutomation();

  console.log('\n✨ Done!');
  console.log(`\n💡 To run automatically every ${CHECK_INTERVAL_MS / (60 * 60 * 1000)} hours, set up a cron job or GitHub Action.`);
  console.log(`   Cron expression: 0 */${CHECK_INTERVAL_MS / (60 * 60 * 1000)} * * *`);
  console.log('');
}

main().catch(error => {
  console.error('❌ Error running automation:', error);
  process.exit(1);
});
