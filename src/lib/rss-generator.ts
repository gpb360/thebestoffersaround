/**
 * RSS Feed Generation Utilities
 * Generates RSS 2.0 feeds for blog content
 */

import rss from '@astrojs/rss';

export interface RSSFeedOptions {
  title: string;
  description: string;
  site: URL;
  items: any[];
  customData?: string;
}

/**
 * Generate main RSS feed with excerpts
 */
export function generateRSSFeed(posts: any[], siteUrl: string) {
  return rss({
    title: 'The Best Offers Around - Blog',
    description: 'Expert reviews of premium health supplements. Discover clinically-validated products for men\'s health, wellness, and performance.',
    site: siteUrl,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.date),
      description: post.excerpt,
      link: `/blog/${post.slug}/`,
      author: 'The Best Offers Around',
      category: post.category,
      customData: `<image>${new URL(post.image, siteUrl).href}</image>`,
    })),
    customData: `<language>en-us</language><managingEditor>noreply@thebestoffersaround.com (The Best Offers Around)</managingEditor><webMaster>noreply@thebestoffersaround.com</webMaster>`,
  });
}

/**
 * Generate category-specific RSS feed
 */
export function generateCategoryFeed(category: string, posts: any[], siteUrl: string) {
  const categoryPosts = posts.filter(post => post.category === category);

  return rss({
    title: `The Best Offers Around - ${category}`,
    description: `Latest ${category} articles and reviews`,
    site: siteUrl,
    items: categoryPosts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.date),
      description: post.excerpt,
      link: `/blog/${post.slug}/`,
      author: 'The Best Offers Around',
      category: post.category,
    })),
    customData: `<language>en-us</language>`,
  });
}

/**
 * Generate full-content RSS feed
 * Includes complete article HTML for RSS-to-email automation
 */
export function generateFullContentFeed(posts: any[], siteUrl: string) {
  return rss({
    title: 'The Best Offers Around - Full Content',
    description: 'Complete articles with full content',
    site: siteUrl,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.date),
      description: post.excerpt,
      link: `/blog/${post.slug}/`,
      author: 'The Best Offers Around',
      category: post.category,
      customData: `<content:encoded><![CDATA[${post.content}]]></content:encoded>`,
    })),
    customData: `<language>en-us</language>`,
  });
}

/**
 * Generate excerpt-only RSS feed
 */
export function generateExcerptFeed(posts: any[], siteUrl: string) {
  return rss({
    title: 'The Best Offers Around - Excerpts',
    description: 'Article excerpts and summaries',
    site: siteUrl,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.date),
      description: post.excerpt,
      link: `/blog/${post.slug}/`,
      author: 'The Best Offers Around',
      category: post.category,
    })),
    customData: `<language>en-us</language>`,
  });
}

/**
 * Get all unique categories from blog posts
 */
export function getCategories(posts: any[]): string[] {
  const categories = new Set<string>();
  posts.forEach(post => {
    if (post.category) {
      categories.add(post.category);
    }
  });
  return Array.from(categories).sort();
}
