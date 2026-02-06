/**
 * PostHog Analytics Configuration
 * Tracks page views, scroll depth, and affiliate CTA clicks
 */

export const POSTHOG_KEY = import.meta.env.PUBLIC_POSTHOG_KEY || 'phc_demo';
export const POSTHOG_HOST = import.meta.env.PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

/**
 * Initialize PostHog client-side
 */
export function initPostHog() {
  if (typeof window !== 'undefined') {
    // Dynamic import to avoid SSR issues
    import('posthog-js').then(({ default: posthog }) => {
      posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        capture_pageview: false, // We'll manually capture
        persistence: 'localStorage',
        loaded: (ph) => {
          // Set user properties if available
          if (window.localStorage.getItem('affiliate_conversions')) {
            ph.people.set({
                has_converted: true,
                conversions: window.localStorage.getItem('affiliate_conversions')
            });
          }
        },
      });

      // Store on window for global access
      (window as any).posthog = posthog;
    }).catch(err => {
      console.error('Failed to load PostHog:', err);
    });
  }
}

/**
 * Track page view with custom properties
 */
export function trackPageView(properties: {
  article_title?: string;
  category?: string;
  word_count?: number;
  product_name?: string;
  page_type: 'blog' | 'product' | 'category' | 'homepage';
}) {
  if (typeof window !== 'undefined' && (window as any).posthog) {
    (window as any).posthog.capture('$pageview', {
      ...properties,
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Track affiliate CTA click
 */
export function trackAffiliateClick(data: {
  productId: string;
  productName: string;
  ctaLocation: string;  // e.g., 'introduction', 'mid-article', 'conclusion', 'sidebar'
  articleSlug?: string;
  articleCategory?: string;
  buttonText?: string;
}) {
  if (typeof window !== 'undefined' && (window as any).posthog) {
    (window as any).posthog.capture('affiliate_cta_clicked', {
      ...data,
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Track scroll depth milestones
 */
export function trackScrollDepth(depth: number, articleSlug: string) {
  if (typeof window !== 'undefined' && (window as any).posthog) {
    (window as any).posthog.capture(`article_scroll_${depth}percent`, {
      article_slug: articleSlug,
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Set up scroll depth tracking for blog articles
 */
export function setupScrollTracking(articleSlug: string) {
  if (typeof window === 'undefined') return;

  const thresholds = [25, 50, 75, 100];
  const tracked = new Set<number>();

  const handler = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    for (const threshold of thresholds) {
      if (scrollPercent >= threshold && !tracked.has(threshold)) {
        trackScrollDepth(threshold, articleSlug);
        tracked.add(threshold);
      }
    }
  };

  window.addEventListener('scroll', handler);
  return () => window.removeEventListener('scroll', handler);
}

/**
 * Track time on page
 */
export function trackTimeOnPage(articleSlug: string) {
  if (typeof window === 'undefined') return null;

  const startTime = Date.now();

  return () => {
    const duration = Math.round((Date.now() - startTime) / 1000); // seconds

    if ((window as any).posthog) {
      (window as any).posthog.capture('article_time_on_page', {
        article_slug: articleSlug,
        duration_seconds: duration,
      });
    }
  };
}

/**
 * Track internal link click
 */
export function trackInternalLink(destination: string, linkText: string, articleSlug?: string) {
  if (typeof window !== 'undefined' && (window as any).posthog) {
    (window as any).posthog.capture('internal_link_clicked', {
      destination_url: destination,
      link_text: linkText,
      article_slug: articleSlug,
    });
  }
}
