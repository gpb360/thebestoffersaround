#!/usr/bin/env node

/**
 * Export blog data to JSON for automation scripts
 */

import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the TypeScript blog data file
const blogTsPath = join(__dirname, '..', 'src', 'data', 'blog.ts');
const blogContent = readFileSync(blogTsPath, 'utf-8');

// Simple extraction - matches the blogPosts object
const blogPostsMatch = blogContent.match(/export const blogPosts: Record<string, BlogPost> = ({[\s\S]*?});/);

if (!blogPostsMatch) {
  console.error('Could not extract blog posts from blog.ts');
  process.exit(1);
}

// Use Function constructor to safely parse the object
const blogPostsStr = blogPostsMatch[1];
const blogPosts = new Function('return ' + blogPostsStr)();

// Convert to a simpler format for scripts
const blogData = {};
for (const [slug, post] of Object.entries(blogPosts)) {
  blogData[slug] = {
    slug,
    title: post.title,
    date: post.date,
    category: post.category,
    excerpt: post.excerpt,
    content: post.content?.substring(0, 500) || '', // First 500 chars
  };
}

// Write to JSON
const outputPath = join(__dirname, '..', 'src', 'data', 'blog-data.json');
writeFileSync(outputPath, JSON.stringify(blogData, null, 2));

console.log(`✅ Exported ${Object.keys(blogData).length} blog posts to ${outputPath}`);
