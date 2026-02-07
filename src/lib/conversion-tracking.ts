/**
 * Conversion Tracking Utility
 * Track conversions across channels with UTM parameter handling and attribution
 */

export interface ConversionData {
  email?: string;
  source?: string; // utm_source
  medium?: string; // utm_medium
  campaign?: string; // utm_campaign
  referrer?: string;
  entryPage?: string;
  exitPage?: string;
  timeOnSite?: number; // seconds
  pagesViewed?: number;
  productClicks?: string[];
  signupMethod?: string;
}

export interface AttributionData {
  firstTouch: {
    source: string;
    medium: string;
    campaign: string;
    timestamp: string;
  };
  lastTouch: {
    source: string;
    medium: string;
    campaign: string;
    timestamp: string;
  };
  conversions: Array<{
    type: string;
    value?: number;
    timestamp: string;
  }>;
}

/**
 * Get UTM parameters from URL
 */
export function getUTMParameters(): {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
} {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_content: params.get('utm_content') || undefined,
    utm_term: params.get('utm_term') || undefined,
  };
}

/**
 * Store first touch attribution
 */
export function storeFirstTouch() {
  if (typeof window === 'undefined') return;

  // Check if first touch already recorded
  const existing = localStorage.getItem('attribution_first_touch');
  if (existing) return;

  const utmParams = getUTMParameters();
  const firstTouch = {
    source: utmParams.utm_source || 'direct',
    medium: utmParams.utm_medium || 'none',
    campaign: utmParams.utm_campaign || '(none)',
    content: utmParams.utm_content || undefined,
    term: utmParams.utm_term || undefined,
    referrer: document.referrer || 'direct',
    landing_page: window.location.pathname,
    timestamp: new Date().toISOString(),
  };

  localStorage.setItem('attribution_first_touch', JSON.stringify(firstTouch));

  // Track in PostHog
  if ((window as any).posthog) {
    (window as any).posthog.capture('first_touch', {
      ...firstTouch,
    });
  }
}

/**
 * Update last touch attribution
 */
export function updateLastTouch() {
  if (typeof window === 'undefined') return;

  const utmParams = getUTMParameters();
  const lastTouch = {
    source: utmParams.utm_source || 'direct',
    medium: utmParams.utm_medium || 'none',
    campaign: utmParams.utm_campaign || '(none)',
    content: utmParams.utm_content || undefined,
    term: utmParams.utm_term || undefined,
    referrer: document.referrer || 'direct',
    page: window.location.pathname,
    timestamp: new Date().toISOString(),
  };

  localStorage.setItem('attribution_last_touch', JSON.stringify(lastTouch));
}

/**
 * Get attribution data
 */
export function getAttribution(): AttributionData | null {
  if (typeof window === 'undefined') return null;

  const firstTouchRaw = localStorage.getItem('attribution_first_touch');
  const lastTouchRaw = localStorage.getItem('attribution_last_touch');
  const conversionsRaw = localStorage.getItem('attribution_conversions');

  if (!firstTouchRaw || !lastTouchRaw) return null;

  return {
    firstTouch: JSON.parse(firstTouchRaw),
    lastTouch: JSON.parse(lastTouchRaw),
    conversions: conversionsRaw ? JSON.parse(conversionsRaw) : [],
  };
}

/**
 * Track conversion
 */
export function trackConversion(type: string, value?: number, metadata?: Record<string, any>) {
  if (typeof window === 'undefined') return;

  const attribution = getAttribution();
  const conversion = {
    type,
    value,
    timestamp: new Date().toISOString(),
    attribution: {
      firstTouch: attribution?.firstTouch,
      lastTouch: attribution?.lastTouch,
    },
    ...metadata,
  };

  // Store in conversions list
  const conversionsRaw = localStorage.getItem('attribution_conversions');
  const conversions = conversionsRaw ? JSON.parse(conversionsRaw) : [];
  conversions.push(conversion);
  localStorage.setItem('attribution_conversions', JSON.stringify(conversions));

  // Track in PostHog
  if ((window as any).posthog) {
    (window as any).posthog.capture('conversion', {
      conversion_type: type,
      conversion_value: value,
      ...metadata,
      ...attribution,
    });

    // Update user properties
    (window as any).posthog.people.set({
      total_conversions: conversions.length,
      total_value: conversions.reduce((sum: number, c: any) => sum + (c.value || 0), 0),
      last_conversion_date: new Date().toISOString(),
    });
  }
}

/**
 * Track email signup conversion
 */
export function trackEmailSignup(method: string, placement: string, email?: string) {
  trackConversion('email_signup', 0, {
    method,
    placement,
    email: email ? email.substring(0, 3) + '***@***' : undefined, // Partial email for privacy
  });
}

/**
 * Track product click with attribution
 */
export function trackAttributedProductClick(productId: string, productName: string, location: string) {
  if (typeof window === 'undefined') return;

  const attribution = getAttribution();

  // Store product click
  const clicksRaw = localStorage.getItem('product_clicks');
  const clicks = clicksRaw ? JSON.parse(clicksRaw) : [];
  clicks.push({
    productId,
    productName,
    location,
    timestamp: new Date().toISOString(),
    attribution: {
      source: attribution?.lastTouch.source,
      medium: attribution?.lastTouch.medium,
      campaign: attribution?.lastTouch.campaign,
    },
  });
  localStorage.setItem('product_clicks', JSON.stringify(clicks));

  // Track in PostHog
  if ((window as any).posthog) {
    (window as any).posthog.capture('affiliate_product_clicked', {
      product_id: productId,
      product_name: productName,
      location,
      ...attribution,
    });
  }
}

/**
 * Track affiliate purchase (for tracking conversions)
 */
export function trackAffiliatePurchase(productId: string, productName: string, value: number) {
  trackConversion('affiliate_purchase', value, {
    product_id: productId,
    product_name: productName,
  });

  // Update conversion count
  const countRaw = localStorage.getItem('affiliate_conversions');
  const count = countRaw ? parseInt(countRaw) : 0;
  localStorage.setItem('affiliate_conversions', (count + 1).toString());

  // Track in PostHog
  if ((window as any).posthog) {
    (window as any).posthog.people.set({
      affiliate_conversions: count + 1,
      total_affiliate_value: (parseFloat(localStorage.getItem('total_affiliate_value') || '0') + value).toString(),
    });
  }
}

/**
 * Generate affiliate link with tracking parameters
 */
export function generateAttributedLink(baseLink: string, productId: string, location: string): string {
  const attribution = getAttribution();

  // Add custom tracking parameters to affiliate link
  const url = new URL(baseLink);
  url.searchParams.set('utm_source', attribution?.lastTouch.source || 'website');
  url.searchParams.set('utm_medium', attribution?.lastTouch.medium || 'affiliate');
  url.searchParams.set('utm_campaign', attribution?.lastTouch.campaign || 'product_link');
  url.searchParams.set('utm_content', productId);
  url.searchParams.set('utm_term', location);

  return url.toString();
}

/**
 * Initialize conversion tracking on page load
 */
export function initConversionTracking() {
  if (typeof window === 'undefined') return;

  // Store first touch if not already stored
  storeFirstTouch();

  // Update last touch on each page
  updateLastTouch();

  // Track session start
  const sessionId = Date.now().toString();
  localStorage.setItem('current_session_id', sessionId);

  if ((window as any).posthog) {
    (window as any).posthog.register({
      session_id: sessionId,
    });
  }
}

/**
 * Get conversion funnel data
 */
export function getFunnelData(): {
  visitors: number;
  signups: number;
  productClicks: number;
  conversions: number;
} {
  if (typeof window === 'undefined') {
    return { visitors: 0, signups: 0, productClicks: 0, conversions: 0 };
  }

  const attribution = getAttribution();
  const clicksRaw = localStorage.getItem('product_clicks');
  const clicks = clicksRaw ? JSON.parse(clicksRaw) : [];

  return {
    visitors: 1, // Current user
    signups: attribution?.conversions.filter(c => c.type === 'email_signup').length || 0,
    productClicks: clicks.length,
    conversions: attribution?.conversions.filter(c => c.type === 'affiliate_purchase').length || 0,
  };
}
