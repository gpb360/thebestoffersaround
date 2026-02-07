/**
 * Content Calendar Data
 * Track planned and scheduled content
 */

export interface ContentSchedule {
  id: string;
  date: string; // YYYY-MM-DD
  type: 'blog' | 'email' | 'social';
  title: string;
  category: string;
  status: 'draft' | 'scheduled' | 'published';
  platforms: string[];
  slug?: string;
  products?: string[];
  createdAt: string;
  updatedAt?: string;
}

/**
 * Sample content schedule data
 * This file will be managed by the schedule-content.js script
 */
export const contentSchedule: ContentSchedule[] = [
  // Example entries - add your own through the CLI tool
];

/**
 * Get upcoming content
 */
export function getUpcomingContent(days: number = 7): ContentSchedule[] {
  const now = new Date();
  const future = new Date();
  future.setDate(future.getDate() + days);

  return contentSchedule.filter(item => {
    const itemDate = new Date(item.date);
    return itemDate >= now && itemDate <= future;
  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

/**
 * Get content by type
 */
export function getContentByType(type: 'blog' | 'email' | 'social'): ContentSchedule[] {
  return contentSchedule.filter(item => item.type === type);
}

/**
 * Get content by status
 */
export function getContentByStatus(status: 'draft' | 'scheduled' | 'published'): ContentSchedule[] {
  return contentSchedule.filter(item => item.status === status);
}
