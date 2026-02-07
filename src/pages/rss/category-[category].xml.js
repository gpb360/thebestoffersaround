/**
 * Category-Specific RSS Feeds
 * URLs: https://thebestoffersaround.com/rss/male-enhancement.xml
 *        https://thebestoffersaround.com/rss/testosterone-boosters.xml
 *        etc.
 */

import { getCollection } from 'astro:content';
import { generateCategoryFeed } from '../../lib/rss-generator';

export async function GET(context) {
  const { category } = context.params;
  const blog = await getCollection('blog');

  // Sort by date descending
  const posts = blog
    .filter(post => post.data.category.toLowerCase() === category.toLowerCase())
    .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf())
    .map(post => ({
      title: post.data.title,
      date: post.data.date,
      excerpt: post.data.excerpt,
      slug: post.slug,
      category: post.data.category,
    }));

  if (posts.length === 0) {
    return new Response('Category not found', { status: 404 });
  }

  return generateCategoryFeed(category, posts, context.site?.href || 'https://thebestoffersaround.com');
}

// Generate static params for all categories
export async function getStaticPaths() {
  const blog = await getCollection('blog');
  const categories = new Set();

  blog.forEach(post => {
    if (post.data.category) {
      // Convert category to URL-friendly format
      const slug = post.data.category
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '');
      categories.add(slug);
    }
  });

  return Array.from(categories).map(category => ({
    params: { category },
  }));
}
