#!/usr/bin/env node

/**
 * Generate Email Digest Script
 * Generates weekly email digest content from recent blog posts
 *
 * Usage:
 *   node scripts/generate-email-digest.js --days 7
 *   node scripts/generate-email-digest.js --posts 5
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load blog data from JSON export
const blogDataPath = join(__dirname, '..', 'src', 'data', 'blog-data.json');
const blogPosts = JSON.parse(readFileSync(blogDataPath, 'utf-8'));

// Load products data
const productsDataPath = join(__dirname, '..', 'src', 'data', 'products-data.json');
const productsData = JSON.parse(readFileSync(productsDataPath, 'utf-8'));

const args = process.argv.slice(2);
let daysBack = 7;
let postCount = 5;

// Parse command line arguments
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--days' && args[i + 1]) daysBack = parseInt(args[i + 1]);
  if (args[i] === '--posts' && args[i + 1]) postCount = parseInt(args[i + 1]);
}

/**
 * Generate HTML email digest
 */
function generateEmailDigest(posts, featuredProduct, date) {
  const postsHtml = posts.map(post => `
    <tr>
      <td style="padding: 20px 0; border-bottom: 1px solid #333;">
        <p style="margin: 0 0 10px; color: #d4af37; font-size: 12px; text-transform: uppercase; font-weight: bold;">
          ${post.category}
        </p>
        <a href="https://thebestoffersaround.com/blog/${post.slug}/" style="color: #e0e0e0; text-decoration: none; font-size: 18px; font-weight: bold; display: block; margin-bottom: 10px;">
          ${post.title}
        </a>
        <p style="margin: 0; color: #a0a0a0; font-size: 14px; line-height: 1.6;">
          ${post.excerpt}
        </p>
        <a href="https://thebestoffersaround.com/blog/${post.slug}/" style="display: inline-block; margin-top: 10px; color: #d4af37; text-decoration: underline; font-size: 14px;">
          Read more →
        </a>
      </td>
    </tr>
  `).join('');

  const productHtml = featuredProduct ? `
    <tr>
      <td style="padding: 30px 0;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background: linear-gradient(135deg, #d4af37 0%, #f4e4bc 10%); border-radius: 8px;">
          <tr>
            <td style="padding: 30px;">
              <p style="margin: 0 0 10px; color: #0a0a0a; font-size: 14px; font-weight: bold; text-transform: uppercase;">
                ⭐ Product Spotlight
              </p>
              <p style="margin: 0 0 10px; color: #0a0a0a; font-size: 24px; font-weight: bold;">
                ${featuredProduct.name}
              </p>
              <p style="margin: 0 0 20px; color: #1a1a1a; font-size: 14px; line-height: 1.6;">
                ${featuredProduct.description}
              </p>
              <p style="margin: 0 0 20px; color: #1a1a1a; font-size: 14px;">
                <strong>Rating:</strong> ${featuredProduct.rating} ★<br>
                <strong>Price:</strong> ${featuredProduct.price}
              </p>
              <a href="https://thebestoffersaround.com/products/${featuredProduct.slug}/" style="display: inline-block; padding: 12px 30px; background-color: #0a0a0a; color: #d4af37; text-decoration: none; font-weight: bold; border-radius: 6px;">
                Learn More →
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  ` : '';

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>This Week's Top Supplement Reviews</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #0a0a0a;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #0a0a0a;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="margin: 0 auto; background-color: #1a1a1a; border-radius: 8px;">
          <!-- Header -->
          <tr>
            <td style="padding: 30px 40px; background: linear-gradient(135deg, #d4af37 0%, #f4e4bc 100%); text-align: center;">
              <h1 style="margin: 0; color: #0a0a0a; font-size: 24px; font-weight: bold;">
                This Week's Top Reviews
              </h1>
              <p style="margin: 10px 0 0; color: #1a1a1a; font-size: 14px;">
                ${date}
              </p>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding: 40px 40px 20px;">
              <h2 style="margin: 0 0 15px; color: #e0e0e0; font-size: 20px;">
                Hi there! 👋
              </h2>
              <p style="margin: 0; color: #a0a0a0; font-size: 14px; line-height: 1.6;">
                Here are this week's top articles from The Best Offers Around. We've been busy researching and reviewing the latest supplements so you don't have to.
              </p>
            </td>
          </tr>

          <!-- Posts -->
          <tr>
            <td style="padding: 20px 40px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                ${postsHtml}
              </table>
            </td>
          </tr>

          <!-- Product -->
          ${productHtml}

          <!-- Tip -->
          <tr>
            <td style="padding: 30px 40px; background-color: #2a2a2a; border-top: 1px solid #333;">
              <p style="margin: 0 0 10px; color: #d4af37; font-size: 14px; font-weight: bold; text-transform: uppercase;">
                💡 Subscriber-Only Tip
              </p>
              <p style="margin: 0; color: #e0e0e0; font-size: 14px; line-height: 1.6;">
                Always check for third-party testing certifications like USP or NSF when choosing supplements. These ensure the product contains what it claims and is free from contaminants.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px; background-color: #0a0a0a; border-top: 1px solid #333; text-align: center;">
              <p style="margin: 0 0 10px; color: #888; font-size: 12px;">
                You're receiving this email because you subscribed to The Best Offers Around newsletter.
              </p>
              <p style="margin: 0; font-size: 12px;">
                <a href="https://thebestoffersaround.com/unsubscribe" style="color: #d4af37; text-decoration: underline;">Unsubscribe</a>
                |
                <a href="https://thebestoffersaround.com/privacy" style="color: #d4af37; text-decoration: underline;">Privacy Policy</a>
                |
                <a href="https://thebestoffersaround.com/blog" style="color: #d4af37; text-decoration: underline;">View All Posts</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return html;
}

/**
 * Get recent posts
 */
function getRecentPosts() {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysBack);

  const posts = Object.entries(blogPosts)
    .map(([slug, post]) => ({ ...post, slug }))
    .filter(post => new Date(post.date) >= cutoffDate)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, postCount);

  return posts;
}

/**
 * Get featured product
 */
function getFeaturedProduct() {
  const productArray = Object.values(productsData);
  return productArray[Math.floor(Math.random() * productArray.length)];
}

/**
 * Main execution
 */
function main() {
  console.log(`\n📧 Generating weekly email digest...\n`);
  console.log(`📅 Looking back ${daysBack} days for posts\n`);

  const posts = getRecentPosts();
  const featuredProduct = getFeaturedProduct();
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (posts.length === 0) {
    console.warn('⚠️  No recent posts found. Generating digest with featured product only.');
  }

  console.log(`📝 Found ${posts.length} recent post(s)`);
  console.log(`⭐ Featured product: ${featuredProduct.name}\n`);

  // Generate digest
  const digestHtml = generateEmailDigest(posts, featuredProduct, date);

  // Ensure output directory exists
  const outputDir = join(dirname(new URL(import.meta.url).pathname), '..', 'public', 'email-drafts');
  mkdirSync(outputDir, { recursive: true });

  // Write to file
  const filename = `weekly-digest-${new Date().toISOString().split('T')[0]}.html`;
  const outputFile = join(outputDir, filename);
  writeFileSync(outputFile, digestHtml);

  console.log(`✅ Email digest generated successfully!`);
  console.log(`📁 Saved to: ${outputFile}`);
  console.log(`\n📋 Digest includes:`);
  posts.forEach(post => {
    console.log(`   • ${post.title}`);
  });
  console.log(`   ⭐ Product spotlight: ${featuredProduct.name}`);
  console.log(`\n✨ Open the HTML file in a browser to preview.\n`);
}

main();
