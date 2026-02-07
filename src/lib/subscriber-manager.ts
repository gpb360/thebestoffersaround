/**
 * Subscriber Management
 * LocalStorage management and queue system for subscriber data
 */

export interface Subscriber {
  email: string;
  subscribedAt: string;
  placement?: string;
  tags?: string[];
  leadMagnetDelivered?: boolean;
}

export interface SubscriberQueue {
  pending: Subscriber[];
  processed: string[];
  failed: Array<{ email: string; error: string; timestamp: string }>;
}

const STORAGE_KEY = 'newsletter_subscribers';
const QUEUE_KEY = 'newsletter_queue';
const LAST_SYNC_KEY = 'newsletter_last_sync';

/**
 * Get all subscribers from localStorage
 */
export function getSubscribers(): Subscriber[] {
  if (typeof window === 'undefined') return [];

  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading subscribers:', error);
    return [];
  }
}

/**
 * Add a new subscriber
 */
export function addSubscriber(subscriber: Subscriber): void {
  if (typeof window === 'undefined') return;

  try {
    const subscribers = getSubscribers();

    // Check for duplicates
    const exists = subscribers.some(s => s.email === subscriber.email);
    if (exists) {
      console.log('Subscriber already exists:', subscriber.email);
      return;
    }

    subscribers.push(subscriber);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(subscribers));

    // Add to processing queue
    addToQueue(subscriber);
  } catch (error) {
    console.error('Error adding subscriber:', error);
  }
}

/**
 * Update subscriber tags
 */
export function updateSubscriberTags(email: string, tags: string[]): void {
  if (typeof window === 'undefined') return;

  try {
    const subscribers = getSubscribers();
    const index = subscribers.findIndex(s => s.email === email);

    if (index !== -1) {
      subscribers[index].tags = tags;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(subscribers));
    }
  } catch (error) {
    console.error('Error updating subscriber tags:', error);
  }
}

/**
 * Get queue status
 */
export function getQueue(): SubscriberQueue {
  if (typeof window === 'undefined') return { pending: [], processed: [], failed: [] };

  try {
    const data = localStorage.getItem(QUEUE_KEY);
    return data ? JSON.parse(data) : { pending: [], processed: [], failed: [] };
  } catch (error) {
    console.error('Error reading queue:', error);
    return { pending: [], processed: [], failed: [] };
  }
}

/**
 * Add subscriber to processing queue
 */
function addToQueue(subscriber: Subscriber): void {
  const queue = getQueue();
  queue.pending.push(subscriber);
  localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
}

/**
 * Mark subscriber as processed
 */
export function markProcessed(email: string): void {
  const queue = getQueue();
  const index = queue.pending.findIndex(s => s.email === email);

  if (index !== -1) {
    const [subscriber] = queue.pending.splice(index, 1);
    queue.processed.push(email);
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
  }
}

/**
 * Mark subscriber as failed
 */
export function markFailed(email: string, error: string): void {
  const queue = getQueue();
  const index = queue.pending.findIndex(s => s.email === email);

  if (index !== -1) {
    queue.pending.splice(index, 1);
    queue.failed.push({
      email,
      error,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
  }
}

/**
 * Get last sync timestamp
 */
export function getLastSync(): Date | null {
  if (typeof window === 'undefined') return null;

  try {
    const data = localStorage.getItem(LAST_SYNC_KEY);
    return data ? new Date(data) : null;
  } catch (error) {
    return null;
  }
}

/**
 * Update last sync timestamp
 */
export function updateLastSync(): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(LAST_SYNC_KEY, new Date().toISOString());
}

/**
 * Sync pending subscribers to server
 */
export async function syncSubscribers(): Promise<void> {
  const queue = getQueue();

  if (queue.pending.length === 0) {
    return;
  }

  for (const subscriber of queue.pending) {
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(subscriber),
      });

      if (response.ok) {
        markProcessed(subscriber.email);
      } else {
        markFailed(subscriber.email, 'Server error');
      }
    } catch (error) {
      markFailed(subscriber.email, error instanceof Error ? error.message : 'Unknown error');
    }
  }

  updateLastSync();
}

/**
 * Clean up old data (older than 30 days)
 */
export function cleanupOldData(): void {
  if (typeof window === 'undefined') return;

  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  // Clean processed list
  const queue = getQueue();
  queue.processed = queue.processed.filter(email => {
    const subscriber = getSubscribers().find(s => s.email === email);
    if (!subscriber) return true;
    return new Date(subscriber.subscribedAt) > thirtyDaysAgo;
  });

  localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
}

/**
 * Get subscriber count
 */
export function getSubscriberCount(): number {
  return getSubscribers().length;
}

/**
 * Check if email is already subscribed
 */
export function isSubscribed(email: string): boolean {
  const subscribers = getSubscribers();
  return subscribers.some(s => s.email === email);
}
