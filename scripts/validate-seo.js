#!/usr/bin/env node

/**
 * SEO Validation Script
 * Runs comprehensive SEO checks on all blog posts and products
 * Run with: node scripts/validate-seo.js
 */

import { blogPosts } from '../src/data/blog.js';
import { products } from '../src/data/products.js';

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

class SEOValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.passed = 0;
    this.failed = 0;
  }

  log(message, color = colors.reset) {
    console.log(`${color}${message}${colors.reset}`);
  }

  // Validation: Meta tags
  validateMetaTags(title, description, type = 'blog') {
    const issues = [];

    if (!title || title.length < 30) {
      issues.push('Title too short (min 30 chars recommended)');
    }
    if (title && title.length > 60) {
      issues.push('Title too long (max 60 chars for optimal display)');
    }

    if (!description || description.length < 120) {
      issues.push('Meta description too short (min 120 chars recommended)');
    }
    if (description && description.length > 160) {
      issues.push('Meta description too long (max 160 chars)');
    }

    return issues;
  }

  // Validation: Heading structure
  validateHeadingStructure(html) {
    const issues = [];

    if (!html) {
      issues.push('Content is empty');
      return issues;
    }

    const h1Count = (html.match(/<h1/g) || []).length;
    const h2Count = (html.match(/<h2/g) || []).length;
    const h3Count = (html.match(/<h3/g) || []).length;

    if (h1Count === 0) {
      issues.push('Missing H1 tag');
    }
    if (h1Count > 1) {
      issues.push(`Multiple H1 tags found (${h1Count}), should have exactly one`);
    }

    if (h2Count < 2) {
      this.warnings.push('Low H2 count (min 2 recommended for content structure)');
    }

    if (h3Count > 0 && h2Count === 0) {
      issues.push('Has H3 tags but no H2 tags (invalid hierarchy)');
    }

    return issues;
  }

  // Validation: Word count
  validateWordCount(content, type = 'blog') {
    const issues = [];

    // Strip HTML tags
    const textContent = content.replace(/<[^>]*>/g, '');
    const wordCount = textContent.split(/\s+/).filter(w => w.length > 0).length;

    const minWords = type === 'blog' ? 1500 : 1000;

    if (wordCount < minWords) {
      issues.push(`Word count too low: ${wordCount} words (min ${minWords} recommended)`);
    }

    return { wordCount, issues };
  }

  // Validation: Keyword density
  validateKeywordDensity(content, keywords) {
    if (!keywords || keywords.length === 0) {
      return [];
    }

    const issues = [];
    const textContent = content.toLowerCase().replace(/<[^>]*>/g, '');
    const wordCount = textContent.split(/\s+/).filter(w => w.length > 0).length;

    for (const keyword of keywords) {
      const keywordLower = keyword.toLowerCase();
      const regex = new RegExp(keywordLower, 'g');
      const matches = textContent.match(regex) || [];
      const density = (matches.length / wordCount) * 100;

      if (density < 0.5) {
        this.warnings.push(`Keyword "${keyword}" has low density: ${density.toFixed(2)}% (target 0.5-2%)`);
      } else if (density > 3) {
        issues.push(`Possible keyword stuffing for "${keyword}": ${density.toFixed(2)}% (max 3%)`);
      }
    }

    return issues;
  }

  // Validation: Internal links
  validateInternalLinks(content, slug) {
    const issues = [];
    const warnings = [];

    // Find all internal links
    const linkRegex = /href="\/(blog|category|products)\/[^"]+"/g;
    const links = content.match(linkRegex) || [];

    if (links.length < 2) {
      warnings.push(`Low internal link count: ${links.length} (min 2 recommended for SEO)`);
    }

    return { issues, warnings };
  }

  // Validation: Image alt text
  validateImageAlt(html) {
    const issues = [];

    const imgRegex = /<img[^>]*>/g;
    const imgs = html.match(imgRegex) || [];

    for (const img of imgs) {
      if (!img.includes('alt=')) {
        issues.push('Image missing alt attribute');
      } else if (img.includes('alt=""')) {
        this.warnings.push('Image has empty alt text');
      }
    }

    return issues;
  }

  // Validate a single blog post
  validateBlogPost(slug, post) {
    this.log(`\n${colors.bright}Validating: ${post.title}${colors.reset}`);
    this.log(`  URL: /blog/${slug}`, colors.cyan);

    const allIssues = [];

    // 1. Meta tags validation
    const metaIssues = this.validateMetaTags(post.title, post.metaDescription);
    allIssues.push(...metaIssues.map(m => `  [META] ${m}`));

    // Check if keywords exist
    if (!post.keywords || post.keywords.length === 0) {
      allIssues.push('  [META] Missing keywords array');
    }

    // 2. Heading structure
    const headingIssues = this.validateHeadingStructure(post.content);
    allIssues.push(...headingIssues.map(m => `  [STRUCTURE] ${m}`));

    // 3. Word count
    const { wordCount, issues: wcIssues } = this.validateWordCount(post.content);
    allIssues.push(...wcIssues.map(m => `  [CONTENT] ${m}`));
    this.log(`  Word count: ${wordCount}`, colors.blue);

    // 4. Keyword density
    const keywordIssues = this.validateKeywordDensity(post.content, post.keywords);
    allIssues.push(...keywordIssues.map(m => `  [SEO] ${m}`));

    // 5. Internal links
    const { issues: linkIssues, warnings: linkWarnings } = this.validateInternalLinks(post.content, slug);
    allIssues.push(...linkIssues.map(m => `  [LINKS] ${m}`));
    this.warnings.push(...linkWarnings.map(w => `[${slug}] ${w}`));

    // 6. Image alt text
    const altIssues = this.validateImageAlt(post.content);
    allIssues.push(...altIssues.map(m => `  [ACCESSIBILITY] ${m}`));

    // 7. Related posts
    if (!post.relatedPosts || post.relatedPosts.length === 0) {
      this.warnings.push(`[${slug}] No related posts configured (important for internal linking)`);
    }

    // 8. Affiliate products
    if (!post.affiliateProducts || post.affiliateProducts.length === 0) {
      this.warnings.push(`[${slug}] No affiliate products linked (missed revenue opportunity)`);
    }

    return allIssues;
  }

  // Validate a single product
  validateProduct(product) {
    this.log(`\n${colors.bright}Validating Product: ${product.name}${colors.reset}`);
    this.log(`  URL: /products/${product.slug}`, colors.cyan);

    const allIssues = [];

    // 1. Meta tags
    const metaIssues = this.validateMetaTags(
      product.metaTitle || product.name,
      product.metaDescription
    );
    allIssues.push(...metaIssues.map(m => `  [META] ${m}`));

    // 2. Check if full review content exists
    if (!product.fullReviewContent) {
      allIssues.push('  [CONTENT] Missing fullReviewContent (2000+ word comprehensive review)');
    }

    // 3. Keywords
    if (!product.keywords || product.keywords.length === 0) {
      allIssues.push('  [META] Missing keywords array');
    }

    return allIssues;
  }

  // Run all validations
  async validateAll() {
    this.log(`\n${colors.bright}${colors.cyan}╔══════════════════════════════════════════╗${colors.reset}`);
    this.log(`${colors.bright}${colors.cyan}║     SEO VALIDATION REPORT               ║${colors.reset}`);
    this.log(`${colors.bright}${colors.cyan}╚══════════════════════════════════════════╝${colors.reset}\n`);

    // Validate blog posts
    this.log(`${colors.bright}📝 BLOG POSTS${colors.reset}`);
    this.log('═'.repeat(50));

    for (const [slug, post] of Object.entries(blogPosts)) {
      const issues = this.validateBlogPost(slug, post);

      if (issues.length > 0) {
        this.failed++;
        this.log('', colors.red);
        issues.forEach(issue => this.log(`  ❌ ${issue}`, colors.red));
      } else {
        this.passed++;
        this.log('  ✅ All checks passed!', colors.green);
      }
    }

    // Validate products
    this.log(`\n${colors.bright}🛍️  PRODUCTS${colors.reset}`);
    this.log('═'.repeat(50));

    for (const product of products) {
      const issues = this.validateProduct(product);

      if (issues.length > 0) {
        this.failed++;
        this.log('', colors.red);
        issues.forEach(issue => this.log(`  ❌ ${issue}`, colors.red));
      } else {
        this.passed++;
        this.log('  ✅ All checks passed!', colors.green);
      }
    }

    // Print summary
    this.log(`\n${colors.bright}📊 SUMMARY${colors.reset}`);
    this.log('═'.repeat(50));
    this.log(`  Total items: ${this.passed + this.failed}`);
    this.log(`  Passed: ${this.passed}`, colors.green);
    this.log(`  Failed: ${this.failed}`, this.failed > 0 ? colors.red : colors.green);
    this.log(`  Warnings: ${this.warnings.length}`, colors.yellow);

    if (this.warnings.length > 0) {
      this.log(`\n${colors.yellow}⚠️  WARNINGS:${colors.reset}`);
      this.warnings.slice(0, 10).forEach(w => this.log(`  ${w}`, colors.yellow));
      if (this.warnings.length > 10) {
        this.log(`  ... and ${this.warnings.length - 10} more`, colors.yellow);
      }
    }

    this.log('');

    // Return exit code
    return this.failed === 0 ? 0 : 1;
  }
}

// Run validation
const validator = new SEOValidator();
const exitCode = await validator.validateAll();

process.exit(exitCode);
