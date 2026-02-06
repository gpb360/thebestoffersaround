export interface BlogPost {
  title: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  content: string;
}

export const blogPosts: Record<string, BlogPost> = {
  'testosterone-boosters-after-30': {
    title: 'Testosterone Boosters After 30: Natural Solutions That Work',
    date: '2026-01-15',
    author: 'The Best Offers Around Team',
    readTime: '8 min read',
    category: 'Testosterone Boosters',
    content: '<p>Full article content here...</p>'
  },
  'male-enhancement-science': {
    title: 'Male Enhancement Options: What Science Actually Supports',
    date: '2026-01-10',
    author: 'The Best Offers Around Team',
    readTime: '7 min read',
    category: 'Male Enhancement',
    content: '<p>Full article content here...</p>'
  },
  'stimulant-free-weight-loss': {
    title: 'Stimulant-Free Weight Loss for Men: CalmLean Review',
    date: '2026-01-05',
    author: 'The Best Offers Around Team',
    readTime: '6 min read',
    category: 'Weight Loss',
    content: '<p>Full article content here...</p>'
  },
  'hgh-releasers-vs-injections': {
    title: 'HGH Releasers vs Injections: What Works Best?',
    date: '2025-12-28',
    author: 'The Best Offers Around Team',
    readTime: '9 min read',
    category: 'Anti-Aging',
    content: '<p>Full article content here...</p>'
  },
  'nootropics-for-focus': {
    title: 'Nootropics for Focus: BrainPill Review & Guide',
    date: '2025-12-20',
    author: 'The Best Offers Around Team',
    readTime: '7 min read',
    category: 'Brain Health',
    content: '<p>Full article content here...</p>'
  }
};

export function getBlogPostSlugs(): string[] {
  return Object.keys(blogPosts);
}
