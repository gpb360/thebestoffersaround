#!/usr/bin/env node

/**
 * Social Media Publisher
 * Scripts to format and prepare social posts for publishing
 */

import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load generated social posts
const socialPostsPath = join(__dirname, '..', 'src', 'data', 'social-posts.json');
const socialPosts = JSON.parse(readFileSync(socialPostsPath, 'utf-8'));

// Load blog data for links
const blogDataPath = join(__dirname, '..', 'src', 'data', 'blog-data.json');
const blogData = JSON.parse(readFileSync(blogDataPath, 'utf-8'));

const SITE_URL = 'https://thebestoffersaround.com';

/**
 * Format post for Facebook
 */
function formatFacebookPost(post) {
  return `🔥 ${post.title}

${post.platforms.facebook}

👇 Read the full guide:
${SITE_URL}/blog/${post.slug}/

💬 What's your experience with ${post.category.toLowerCase()}? Let us know in the comments!

---

#MensHealth #Supplements #Health #${post.category.replace(/\s+/g, '')}
`;
}

/**
 * Format post for Instagram
 */
function formatInstagramPost(post) {
  // Instagram uses shorter captions
  const excerpt = post.platforms.facebook.split('\n')[2].substring(0, 150);

  return `🔥 ${post.title.substring(0, 100)}...

${excerpt}

👉 Link in bio to read the full guide!

💬 Drop a 🙌 if you want more content like this

.

#MensHealth #Supplements #${post.category.replace(/\s+/g, '')} #HealthTips #Wellness
`;
}

/**
 * Format post for Twitter
 */
function formatTwitterPost(post) {
  return post.platforms.twitter;
}

/**
 * Format post for LinkedIn
 */
function formatLinkedInPost(post) {
  return post.platforms.linkedin;
}

/**
 * Format post for Pinterest
 */
function formatPinterestPost(post) {
  const excerpt = post.platforms.facebook.split('\n')[2];
  return `${post.title}

${excerpt}

Read more: ${SITE_URL}/blog/${post.slug}/}
`;
}

/**
 * Format hashtag list
 */
function getHashtags(category) {
  const baseHashtags = ['#MensHealth', '#Supplements', '#Health', '#Wellness'];
  const categoryHashtag = `#${category.replace(/\s+/g, '')}`;
  return [...baseHashtags, categoryHashtag].join(' ');
}

/**
 * Generate posting schedule
 */
function generateSchedule(posts, days = 30) {
  const schedule = [];
  const platforms = ['facebook', 'instagram', 'twitter', 'linkedin'];

  for (let day = 0; day < days; day++) {
    const date = new Date();
    date.setDate(date.getDate() + day);

    platforms.forEach(platform => {
      const postIndex = day % posts.length;
      const post = posts[postIndex];

      schedule.push({
        date: date.toISOString().split('T')[0],
        day_of_week: date.toLocaleDateString('en-US', { weekday: 'long' }),
        platform,
        post_slug: post.slug,
        post_title: post.title,
        content: platform === 'facebook' ? formatFacebookPost(post) :
                 platform === 'instagram' ? formatInstagramPost(post) :
                 platform === 'twitter' ? formatTwitterPost(post) :
                 platform === 'linkedin' ? formatLinkedInPost(post) : '',
        recommended_time: platform === 'instagram' ? '11:00 AM' : '9:00 AM',
      });
    });
  }

  return schedule;
}

/**
 * Export posts by platform
 */
function exportByPlatform() {
  const platforms = {
    facebook: [],
    instagram: [],
    twitter: [],
    linkedin: [],
    pinterest: []
  };

  socialPosts.forEach(post => {
    platforms.facebook.push({
      slug: post.slug,
      title: post.title,
      content: formatFacebookPost(post),
      image_url: `${SITE_URL}${blogData[post.slug]?.image || '/og-default.jpg'}`,
    });

    platforms.instagram.push({
      slug: post.slug,
      title: post.title,
      content: formatInstagramPost(post),
      image_url: `${SITE_URL}${blogData[post.slug]?.image || '/og-default.jpg'}`,
    });

    platforms.twitter.push({
      slug: post.slug,
      title: post.title,
      content: formatTwitterPost(post),
    });

    platforms.linkedin.push({
      slug: post.slug,
      title: post.title,
      content: formatLinkedInPost(post),
      image_url: `${SITE_URL}${blogData[post.slug]?.image || '/og-default.jpg'}`,
    });

    platforms.pinterest.push({
      slug: post.slug,
      title: post.title,
      content: formatPinterestPost(post),
      image_url: `${SITE_URL}${blogData[post.slug]?.image || '/og-default.jpg'}`,
    });
  });

  return platforms;
}

// Main execution
console.log('\n📱 Generating Social Media Content for Publishing...\n');

// Export by platform
const platforms = exportByPlatform();

// Save each platform's content
Object.entries(platforms).forEach(([platformName, posts]) => {
  const outputDir = join(__dirname, '..', 'public', 'social-media', platformName);

  // Create directory
  try {
    writeFileSync(outputDir + '/posts.json', JSON.stringify(posts, null, 2));
    console.log(`✅ ${platformName.toUpperCase()}: ${posts.length} posts ready`);
  } catch (e) {
    // Directory doesn't exist, skip for now
    console.log(`⚠️  ${platformName.toUpperCase()}: ${posts.length} posts (save to ${outputDir}/posts.json)`);
  }
});

// Generate schedule
const schedule = generateSchedule(socialPosts.slice(0, 15), 30);
console.log(`\n📅 Generated 30-day posting schedule (${schedule.length} total posts)`);

// Save schedule
writeFileSync(
  join(__dirname, '..', 'public', 'social-media', 'schedule.json'),
  JSON.stringify(schedule, null, 2)
);

// Show sample
console.log('\n📋 SAMPLE FACEBOOK POST:\n');
console.log('─'.repeat(80));
console.log(formatFacebookPost(socialPosts[0]));
console.log('─'.repeat(80));

console.log('\n📋 SAMPLE INSTAGRAM POST:\n');
console.log('─'.repeat(80));
console.log(formatInstagramPost(socialPosts[0]));
console.log('─'.repeat(80));

console.log('\n✨ Done! Check public/social-media/ for exported content\n');
