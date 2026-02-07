/**
 * Newsletter Unsubscribe API Endpoint
 * GET/POST /api/newsletter/unsubscribe
 *
 * Handles email unsubscription
 */

import type { APIRoute } from 'astro';
import { emailService, normalizeEmail } from '../../../lib/email-service';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  return handleUnsubscribe(url.searchParams);
};

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const params = new URLSearchParams(body);
  return handleUnsubscribe(params);
};

async function handleUnsubscribe(searchParams: URLSearchParams) {
  try {
    const email = searchParams.get('email');

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const normalizedEmail = normalizeEmail(email);

    // Unsubscribe from email service
    await emailService.unsubscribe(normalizedEmail);

    // Track unsubscription
    console.log(`Newsletter unsubscription: ${normalizedEmail}`);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Successfully unsubscribed'
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Newsletter unsubscription error:', error);

    return new Response(
      JSON.stringify({
        error: 'Failed to unsubscribe. Please try again.',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
