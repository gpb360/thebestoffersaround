#!/usr/bin/env node

/**
 * Content Scheduling Tool
 * CLI tool for planning and organizing content marketing activities
 *
 * Usage:
 *   node scripts/schedule-content.js --view
 *   node scripts/schedule-content.js --add --date 2026-02-15 --type blog --title "New Post"
 *   node scripts/schedule-content.js --export
 */

import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';

const DATA_FILE = join(dirname(new URL(import.meta.url).pathname), '..', 'src', 'data', 'content-calendar.json');

/**
 * Load content calendar
 */
function loadCalendar() {
  if (!existsSync(DATA_FILE)) {
    return [];
  }
  const data = readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(data);
}

/**
 * Save content calendar
 */
function saveCalendar(calendar) {
  mkdirSync(dirname(DATA_FILE), { recursive: true });
  writeFileSync(DATA_FILE, JSON.stringify(calendar, null, 2));
}

/**
 * View content calendar
 */
function viewCalendar() {
  const calendar = loadCalendar().sort((a, b) => new Date(a.date) - new Date(b.date));

  console.log('\n📅 Content Calendar\n');
  console.log('─'.repeat(80));

  if (calendar.length === 0) {
    console.log('No content scheduled yet.');
    console.log('Use --add to schedule content.\n');
    return;
  }

  // Group by month
  const byMonth = {};
  calendar.forEach(item => {
    const month = item.date.substring(0, 7);
    if (!byMonth[month]) byMonth[month] = [];
    byMonth[month].push(item);
  });

  Object.keys(byMonth).sort().forEach(month => {
    console.log(`\n${month}`);
    console.log('  ' + '─'.repeat(78));

    byMonth[month].forEach(item => {
      const icon = {
        blog: '📝',
        email: '📧',
        social: '📱'
      }[item.type] || '📌';

      const status = {
        draft: '📋',
        scheduled: '📅',
        published: '✅'
      }[item.status] || '⚪';

      console.log(`  ${icon} ${item.date} | ${status} ${item.type.padEnd(8)} | ${item.title}`);

      if (item.platforms && item.platforms.length > 0) {
        console.log(`      Platforms: ${item.platforms.join(', ')}`);
      }

      if (item.slug) {
        console.log(`      Slug: ${item.slug}`);
      }
    });
  });

  console.log('\n' + '─'.repeat(80));
  console.log(`Total: ${calendar.length} items scheduled\n`);
}

/**
 * Add content to calendar
 */
function addToCalendar(args) {
  const dateIndex = args.indexOf('--date');
  const typeIndex = args.indexOf('--type');
  const titleIndex = args.indexOf('--title');
  const slugIndex = args.indexOf('--slug');
  const platformsIndex = args.indexOf('--platforms');
  const productsIndex = args.indexOf('--products');

  if (dateIndex === -1 || typeIndex === -1 || titleIndex === -1) {
    console.error('❌ Missing required arguments: --date, --type, --title');
    process.exit(1);
  }

  const item = {
    id: Date.now().toString(),
    date: args[dateIndex + 1],
    type: args[typeIndex + 1],
    title: args[titleIndex + 1],
    slug: slugIndex !== -1 ? args[slugIndex + 1] : undefined,
    platforms: platformsIndex !== -1 ? args[platformsIndex + 1].split(',') : [],
    products: productsIndex !== -1 ? args[productsIndex + 1].split(',') : [],
    status: 'draft',
    createdAt: new Date().toISOString()
  };

  // Validate date format
  if (!/^\d{4}-\d{2}-\d{2}$/.test(item.date)) {
    console.error('❌ Invalid date format. Use YYYY-MM-DD');
    process.exit(1);
  }

  // Validate type
  if (!['blog', 'email', 'social'].includes(item.type)) {
    console.error('❌ Invalid type. Use: blog, email, or social');
    process.exit(1);
  }

  const calendar = loadCalendar();
  calendar.push(item);
  saveCalendar(calendar);

  console.log(`\n✅ Content added to calendar:`);
  console.log(`   📅 ${item.date}`);
  console.log(`   📝 ${item.title}`);
  console.log(`   Type: ${item.type}`);
  console.log('');
}

/**
 * Export calendar to CSV
 */
function exportCalendar() {
  const calendar = loadCalendar().sort((a, b) => new Date(a.date) - new Date(b.date));

  if (calendar.length === 0) {
    console.log('No content to export.');
    return;
  }

  let csv = 'Date,Type,Title,Status,Platforms,Slug,Products\n';

  calendar.forEach(item => {
    csv += [
      item.date,
      item.type,
      `"${item.title}"`,
      item.status,
      item.platforms.join(';'),
      item.slug || '',
      item.products.join(';')
    ].join(',') + '\n';
  });

  console.log(csv);
}

/**
 * Update item status
 */
function updateStatus(args) {
  const idIndex = args.indexOf('--id');
  const statusIndex = args.indexOf('--status');

  if (idIndex === -1 || statusIndex === -1) {
    console.error('❌ Missing required arguments: --id, --status');
    process.exit(1);
  }

  const id = args[idIndex + 1];
  const status = args[statusIndex + 1];

  if (!['draft', 'scheduled', 'published'].includes(status)) {
    console.error('❌ Invalid status. Use: draft, scheduled, or published');
    process.exit(1);
  }

  const calendar = loadCalendar();
  const index = calendar.findIndex(item => item.id === id);

  if (index === -1) {
    console.error(`❌ Item with ID ${id} not found`);
    process.exit(1);
  }

  calendar[index].status = status;
  calendar[index].updatedAt = new Date().toISOString();
  saveCalendar(calendar);

  console.log(`\n✅ Status updated to "${status}" for: ${calendar[index].title}\n`);
}

/**
 * Remove item from calendar
 */
function removeFromCalendar(args) {
  const idIndex = args.indexOf('--id');

  if (idIndex === -1) {
    console.error('❌ Missing required argument: --id');
    process.exit(1);
  }

  const id = args[idIndex + 1];
  const calendar = loadCalendar();
  const index = calendar.findIndex(item => item.id === id);

  if (index === -1) {
    console.error(`❌ Item with ID ${id} not found`);
    process.exit(1);
  }

  const removed = calendar.splice(index, 1)[0];
  saveCalendar(calendar);

  console.log(`\n✅ Removed from calendar: ${removed.title}\n`);
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
Content Scheduling Tool

Usage:
  node scripts/schedule-content.js --view
  node scripts/schedule-content.js --add --date YYYY-MM-DD --type blog|email|social --title "Title"
  node scripts/schedule-content.js --update --id ID --status draft|scheduled|published
  node scripts/schedule-content.js --remove --id ID
  node scripts/schedule-content.js --export

Options:
  --view              View all scheduled content
  --add               Add new content to calendar
  --update            Update existing content status
  --remove            Remove content from calendar
  --export            Export calendar to CSV format
  --date YYYY-MM-DD   Content publication date
  --type TYPE         Content type (blog, email, social)
  --title "Title"     Content title
  --slug SLUG         Blog post slug (for blog type)
  --platforms P1,P2   Social platforms (for social type)
  --products P1,P2    Related product IDs
  --status STATUS     Content status (draft, scheduled, published)
  --id ID             Content item ID

Examples:
  # View calendar
  node scripts/schedule-content.js --view

  # Add blog post
  node scripts/schedule-content.js --add --date 2026-02-15 --type blog --title "Testosterone Guide"

  # Add social media campaign
  node scripts/schedule-content.js --add --date 2026-02-16 --type social --title "Product Launch" --platforms twitter,linkedin,facebook

  # Mark as published
  node scripts/schedule-content.js --update --id 1234567890 --status published

  # Export to CSV
  node scripts/schedule-content.js --export > content-calendar.csv
`);
    return;
  }

  if (args.includes('--view')) {
    viewCalendar();
  } else if (args.includes('--add')) {
    addToCalendar(args);
  } else if (args.includes('--update')) {
    updateStatus(args);
  } else if (args.includes('--remove')) {
    removeFromCalendar(args);
  } else if (args.includes('--export')) {
    exportCalendar();
  } else {
    console.error('❌ Unknown command. Use --view, --add, --update, --remove, or --export');
    process.exit(1);
  }
}

main();
