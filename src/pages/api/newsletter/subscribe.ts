/**
 * Newsletter Subscribe API Endpoint
 * POST /api/newsletter/subscribe
 *
 * Handles email subscription with validation and tracking
 */

import type { APIRoute } from 'astro';
import { emailService, isValidEmail, normalizeEmail } from '../../../lib/email-service';
import { generateWelcomeEmail } from '../../../lib/email-templates';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, placement, tags = [] } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const normalizedEmail = normalizeEmail(email);

    if (!isValidEmail(normalizedEmail)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check for honeypot field (bot detection)
    if (body.website || body.url || body.phone) {
      // Silently succeed to not alert bots
      return new Response(
        JSON.stringify({ success: true, message: 'Subscribed' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Subscribe to email service
    await emailService.subscribe(normalizedEmail, tags);

    // Send welcome email with lead magnet
    const welcomeEmail = generateWelcomeEmail({
      email: normalizedEmail,
      firstName: body.firstName || '',
      leadMagnetUrl: process.env.LEAD_MAGNET_URL || 'https://thebestoffersaround.com/lead-magnet',
    });

    await emailService.sendEmail(
      normalizedEmail,
      welcomeEmail.subject,
      welcomeEmail.html,
      welcomeEmail.text
    );

    // Track conversion (would integrate with PostHog server-side here)
    console.log(`Newsletter subscription: ${normalizedEmail} from ${placement || 'unknown'}`);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Successfully subscribed',
        email: normalizedEmail
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);

    return new Response(
      JSON.stringify({
        error: 'Failed to subscribe. Please try again.',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// Handle OPTIONS for CORS
export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
