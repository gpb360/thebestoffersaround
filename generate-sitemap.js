const fs = require('fs');
const path = require('path');

// Load data
const blogData = require('./src/data/blog-data.json');
const productsData = require('./src/data/products-data.json');

const site = 'https://thebestoffersaround.com';

// Static pages
const staticPages = [
  { path: '', priority: 1.0 },
  { path: 'about', priority: 0.7 },
  { path: 'blog', priority: 0.8 },
  { path: 'contact', priority: 0.5 },
  { path: 'privacy', priority: 0.3 },
];

// Build sitemap
const urls = [
  // Static pages
  ...staticPages.map(({ path, priority }) => ({
    url: `${site}/${path ? path + '/' : ''}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority,
  })),
  // Blog posts
  ...Object.keys(blogData).map(slug => ({
    url: `${site}/blog/${slug}/`,
    lastmod: blogData[slug].date || new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8,
  })),
  // Products
  ...Object.values(productsData).map(product => ({
    url: `${site}/products/${product.slug}/`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.9,
  })),
];

// Generate XML
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ url, lastmod, changefreq, priority }) => `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write to public directory
fs.writeFileSync('./public/sitemap.xml', xml);

console.log(`✅ Generated sitemap with ${urls.length} URLs`);
console.log(`📄 Saved to: ./public/sitemap.xml`);
