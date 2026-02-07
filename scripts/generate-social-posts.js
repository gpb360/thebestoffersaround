#!/usr/bin/env node

/**
 * Generate Social Posts Script
 * CLI tool to generate social media content from blog posts
 *
 * Usage:
 *   node scripts/generate-social-posts.js --all
 *   node scripts/generate-social-posts.js --slug ultimate-guide-male-enhancement
 *   node scripts/generate-social-posts.js --category "male-enhancement"
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load blog data from JSON export
const blogDataPath = join(__dirname, '..', 'src', 'data', 'blog-data.json');
const blogPosts = JSON.parse(readFileSync(blogDataPath, 'utf-8'));

const args = process.argv.slice(2);
const flags = {
  all: false,
  slug: null,
  category: null,
};

// Parse command line arguments
for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--all') flags.all = true;
  else if (arg === '--slug' && args[i + 1]) flags.slug = args[i + 1];
  else if (arg === '--category' && args[i + 1]) flags.category = args[i + 1];
}

/**
 * Generate Twitter post
 */
function generateTwitterPost(post) {
  const hashtags = '#MensHealth #Supplements #Testosterone #Health';
  const maxLength = 280 - hashtags.length - 5; // 5 for spacing

  let content = `🔥 ${post.title}\n\n`;

  // Add hook
  const hooks = [
    `Did you know? ${post.excerpt.substring(0, 50)}...`,
    `💡 ${post.excerpt.substring(0, 60)}...`,
    `📌 ${post.excerpt.substring(0, 70)}...`,
  ];
  content += hooks[Math.floor(Math.random() * hooks.length)] + '\n\n';

  // Add CTA
  content += `👇 Read the full guide:\n`;
  content += `https://thebestoffersaround.com/blog/${post.slug}/\n\n`;
  content += hashtags;

  return content;
}

/**
 * Generate LinkedIn post
 */
function generateLinkedInPost(post) {
  let content = `${post.title}\n\n`;

  // Add summary
  content += `I just published a comprehensive guide on ${post.category.toLowerCase()}.\n\n`;

  // Add key points
  const keyPoints = [
    `✅ Expert analysis and research`,
    `✅ Science-backed recommendations`,
    `✅ Practical tips you can use today`,
  ];
  content += keyPoints.join('\n');
  content += '\n\n';

  // Add excerpt
  content += `Here's what you'll learn:\n`;
  content += `${post.excerpt}\n\n`;

  // Add CTA
  content += `🔗 Read the full article: https://thebestoffersaround.com/blog/${post.slug}/\n\n`;
  content += `#MensHealth #Health #Wellness #Supplements`;

  return content;
}

/**
 * Generate Facebook post
 */
function generateFacebookPost(post) {
  let content = `📢 ${post.title}\n\n`;

  // Add question as hook
  const questions = [
    `Are you looking for the best ${post.category.toLowerCase()} solutions?`,
    `Want to know more about ${post.category.toLowerCase()}?`,
    `Interested in improving your ${post.category.toLowerCase()} knowledge?`,
  ];
  content += questions[Math.floor(Math.random() * questions.length)] + '\n\n';

  // Add excerpt
  content += `${post.excerpt}\n\n`;

  // Add engagement prompt
  content += `👇 What's your experience with ${post.category.toLowerCase()}? Let us know in the comments!\n\n`;
  content += `Read more: https://thebestoffersaround.com/blog/${post.slug}/`;

  return content;
}

/**
 * Generate posts for a single article
 */
function generatePostsForArticle(post) {
  return {
    slug: post.slug,
    title: post.title,
    category: post.category,
    platforms: {
      twitter: generateTwitterPost(post),
      linkedin: generateLinkedInPost(post),
      facebook: generateFacebookPost(post),
    },
    generatedAt: new Date().toISOString(),
  };
}

/**
 * Filter posts based on flags
 */
function filterPosts() {
  const allPosts = Object.entries(blogPosts).map(([slug, post]) => ({ ...post, slug }));

  if (flags.slug) {
    const post = allPosts.find(p => p.slug === flags.slug);
    return post ? [post] : [];
  }

  if (flags.category) {
    return allPosts.filter(p =>
      p.category.toLowerCase().includes(flags.category.toLowerCase())
    );
  }

  if (flags.all) {
    return allPosts;
  }

  // Default: return last 5 posts
  return allPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);
}

/**
 * Main execution
 */
function main() {
  const posts = filterPosts();

  if (posts.length === 0) {
    console.error('No posts found matching the criteria.');
    process.exit(1);
  }

  console.log(`\n📝 Generating social media posts for ${posts.length} article(s)...\n`);

  const socialPosts = posts.map(generatePostsForArticle);

  // Ensure output directory exists
  const outputDir = join(dirname(new URL(import.meta.url).pathname), '..', 'src', 'data');
  mkdirSync(outputDir, { recursive: true });

  // Write to file
  const outputFile = join(outputDir, 'social-posts.json');
  writeFileSync(outputFile, JSON.stringify(socialPosts, null, 2));

  console.log(`✅ Generated ${socialPosts.length} social post sets`);
  console.log(`📁 Saved to: ${outputFile}\n`);

  // Print sample
  const sample = socialPosts[0];
  console.log('📋 Sample Twitter post:');
  console.log('─'.repeat(80));
  console.log(sample.platforms.twitter);
  console.log('─'.repeat(80));
  console.log('');

  console.log('📋 Sample LinkedIn post:');
  console.log('─'.repeat(80));
  console.log(sample.platforms.linkedin);
  console.log('─'.repeat(80));
  console.log('');

  console.log(`✨ Done! Run \`cat ${outputFile}\` to see all generated posts.\n`);
}

main();
