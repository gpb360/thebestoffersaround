/**
 * Main RSS Feed Endpoint
 * URL: https://thebestoffersaround.com/rss.xml
 * Returns the last 20 posts with excerpts
 */

import { getCollection } from 'astro:content';
import { generateRSSFeed } from '../lib/rss-generator';

export async function GET(context) {
  const blog = await getCollection('blog');

  // Sort by date descending and get last 20 posts
  const posts = blog
    .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf())
    .slice(0, 20)
    .map(post => ({
      title: post.data.title,
      date: post.data.date,
      excerpt: post.data.excerpt,
      slug: post.slug,
      category: post.data.category,
      image: post.data.image,
      content: post.body,
    }));

  return generateRSSFeed(posts, context.site?.href || 'https://thebestoffersaround.com');
}
