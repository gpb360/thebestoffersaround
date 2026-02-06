export interface BlogPost {
  title: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  content: string;
  image: string;
  excerpt: string;
}

export const blogPosts: Record<string, BlogPost> = {
  'testosterone-boosters-after-30': {
    title: 'Testosterone Boosters After 30: Natural Solutions That Work',
    date: '2026-01-15',
    author: 'The Best Offers Around Team',
    readTime: '8 min read',
    category: 'Testosterone Boosters',
    image: '/images/blog/testosterone-boosters-after-30.jpg',
    excerpt: 'Discover natural, science-backed methods to boost testosterone levels after 30. Learn about lifestyle changes, supplements, and strategies that actually work.',
    content: '<p>Full article content here...</p>'
  },
  'male-enhancement-science': {
    title: 'Male Enhancement Options: What Science Actually Supports',
    date: '2026-01-10',
    author: 'The Best Offers Around Team',
    readTime: '7 min read',
    category: 'Male Enhancement',
    image: '/images/blog/male-enhancement-science.jpg',
    excerpt: 'Cut through the hype and discover what male enhancement solutions are actually supported by clinical research and scientific evidence.',
    content: '<p>Full article content here...</p>'
  },
  'stimulant-free-weight-loss': {
    title: 'Stimulant-Free Weight Loss for Men: CalmLean Review',
    date: '2026-01-05',
    author: 'The Best Offers Around Team',
    readTime: '6 min read',
    category: 'Weight Loss',
    image: '/images/blog/stimulant-free-weight-loss.jpg',
    excerpt: 'Lose weight without the jitters. Discover CalmLean, a stimulant-free weight loss solution designed specifically for men seeking steady, sustainable results.',
    content: '<p>Full article content here...</p>'
  },
  'hgh-releasers-vs-injections': {
    title: 'HGH Releasers vs Injections: What Works Best?',
    date: '2025-12-28',
    author: 'The Best Offers Around Team',
    readTime: '9 min read',
    category: 'Anti-Aging',
    image: '/images/blog/hgh-releasers-vs-injections.jpg',
    excerpt: 'Compare HGH releaser supplements with injections. We break down effectiveness, cost, safety, and which option delivers the best anti-aging results.',
    content: '<p>Full article content here...</p>'
  },
  'nootropics-for-focus': {
    title: 'Nootropics for Focus: BrainPill Review & Guide',
    date: '2025-12-20',
    author: 'The Best Offers Around Team',
    readTime: '7 min read',
    category: 'Brain Health',
    image: '/images/blog/nootropics-for-focus.jpg',
    excerpt: 'Enhance your mental performance with BrainPill. Learn how nootropics can boost focus, memory, and productivity without the crash of caffeine.',
    content: '<p>Full article content here...</p>'
  }
};

export function getBlogPostSlugs(): string[] {
  return Object.keys(blogPosts);
}
