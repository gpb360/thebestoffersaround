/**
 * Full Content RSS Feed
 * URL: https://thebestoffersaround.com/rss/full.xml
 * Returns complete article HTML for RSS-to-email automation
 */

import { getCollection } from 'astro:content';
import { generateFullContentFeed } from '../../lib/rss-generator';

export async function GET(context) {
  const blog = await getCollection('blog');

  // Sort by date descending - limit to last 10 for full content
  const posts = blog
    .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf())
    .slice(0, 10)
    .map(post => ({
      title: post.data.title,
      date: post.data.date,
      excerpt: post.data.excerpt,
      slug: post.slug,
      category: post.data.category,
      content: post.body,
    }));

  return generateFullContentFeed(posts, context.site?.href || 'https://thebestoffersaround.com');
}
