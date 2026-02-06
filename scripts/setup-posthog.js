#!/usr/bin/env node

/**
 * PostHog Setup Helper
 * Run with: node scripts/setup-posthog.js
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const envPath = path.resolve(__dirname, '../.env');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function setupPostHog() {
  console.log('\n🔌 PostHog Setup Helper\n');

  // Check if .env already exists
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    if (envContent.includes('PUBLIC_POSTHOG_KEY')) {
      console.log('✅ PostHog is already configured in .env file!');
      console.log('\nCurrent configuration:');
      console.log(envContent.split('\n')
        .filter(line => line.includes('POSTHOG'))
        .join('\n'));

      const update = await question('\nDo you want to update it? (y/n): ');
      if (update.toLowerCase() !== 'y') {
        console.log('\n👍 Keeping existing configuration.');
        rl.close();
        return;
      }
    }
  }

  console.log('\n📝 Let\'s configure PostHog for your affiliate site.\n');
  console.log('📍 Steps to get your API key:');
  console.log('   1. Go to https://app.posthog.com/signup (create account if needed)');
  console.log('   2. Go to Project Settings');
  console.log('   3. Copy your Project API Key');
  console.log('');

  const apiKey = await question('✏️  Enter your PostHog API Key (or press Enter to skip): ');

  if (!apiKey || apiKey.trim() === '') {
    console.log('\n⏭️  Skipping PostHog setup. You can add it later manually.');
    console.log('   See POSTHOG_SETUP.md for instructions.\n');
    rl.close();
    return;
  }

  const region = await question('🌍 Region (us/eu) [default: us]: ') || 'us';
  const host = region === 'eu'
    ? 'https://app.eu.posthog.com'
    : 'https://app.posthog.com';

  // Create or update .env file
  let envContent = '';
  if (fs.existsSync(envPath)) {
    envContent = fs.readFileSync(envPath, 'utf-8');
    // Remove existing PostHog vars
    envContent = envContent
      .split('\n')
      .filter(line => !line.includes('POSTHOG'))
      .join('\n');
  }

  envContent += `\n# PostHog Analytics\nPUBLIC_POSTHOG_KEY=${apiKey.trim()}\nPUBLIC_POSTHOG_HOST=${host}\n`;

  fs.writeFileSync(envPath, envContent.trim() + '\n');

  console.log('\n✅ PostHog configured successfully!');
  console.log('\n📄 .env file created/updated with:');
  console.log(`   PUBLIC_POSTHOG_KEY=${apiKey.substring(0, 10)}...`);
  console.log(`   PUBLIC_POSTHOG_HOST=${host}`);
  console.log('\n🚀 Next steps:');
  console.log('   1. Restart your dev server: npm run dev');
  console.log('   2. Visit http://localhost:4321');
  console.log('   3. Check browser console for PostHog initialization');
  console.log('   4. Go to https://app.posthog.com to see your events!\n');

  rl.close();
}

setupPostHog().catch(console.error);
