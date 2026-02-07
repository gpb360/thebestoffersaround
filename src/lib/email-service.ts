/**
 * Email Service Integration
 * Resend API integration for transactional and marketing emails
 */

interface EmailService {
  subscribe(email: string, tags?: string[]): Promise<void>;
  unsubscribe(email: string): Promise<void>;
  updateTags(email: string, tags: string[]): Promise<void>;
  sendEmail(to: string, subject: string, html: string, text?: string): Promise<void>;
}

interface SubscribeResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Resend Email Service Implementation
 */
export class ResendEmailService implements EmailService {
  private apiKey: string;
  private fromEmail: string;
  private fromName: string;

  constructor() {
    this.apiKey = import.meta.env.RESEND_API_KEY || '';
    this.fromEmail = import.meta.env.FROM_EMAIL || 'noreply@thebestoffersaround.com';
    this.fromName = import.meta.env.FROM_NAME || 'The Best Offers Around';

    if (!this.apiKey) {
      console.warn('RESEND_API_KEY not configured. Email service will be disabled.');
    }
  }

  /**
   * Subscribe a new email to the newsletter
   */
  async subscribe(email: string, tags: string[] = []): Promise<void> {
    if (!this.apiKey) {
      console.warn('Email service not configured, simulating subscription');
      return;
    }

    try {
      // In production, you would use Resend's audience/contact management
      // For now, we'll use a simple approach with their contacts API
      const response = await fetch('https://api.resend.com/audiences', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Newsletter Subscribers',
        }),
      });

      // Add contact to audience
      await fetch('https://api.resend.com/contacts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          audienceId: import.meta.env.RESEND_AUDIENCE_ID || 'default',
          tags,
          unsubscribed: false,
        }),
      });

      console.log(`Subscribed ${email} to newsletter`);
    } catch (error) {
      console.error('Subscription error:', error);
      throw new Error('Failed to subscribe email');
    }
  }

  /**
   * Unsubscribe an email from the newsletter
   */
  async unsubscribe(email: string): Promise<void> {
    if (!this.apiKey) {
      console.warn('Email service not configured, simulating unsubscribe');
      return;
    }

    try {
      await fetch(`https://api.resend.com/contacts/${email}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          unsubscribed: true,
        }),
      });

      console.log(`Unsubscribed ${email} from newsletter`);
    } catch (error) {
      console.error('Unsubscribe error:', error);
      throw new Error('Failed to unsubscribe email');
    }
  }

  /**
   * Update tags for a subscriber
   */
  async updateTags(email: string, tags: string[]): Promise<void> {
    if (!this.apiKey) {
      console.warn('Email service not configured');
      return;
    }

    try {
      await fetch(`https://api.resend.com/contacts/${email}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tags,
        }),
      });

      console.log(`Updated tags for ${email}`);
    } catch (error) {
      console.error('Tag update error:', error);
      throw new Error('Failed to update tags');
    }
  }

  /**
   * Send a single email
   */
  async sendEmail(to: string, subject: string, html: string, text?: string): Promise<void> {
    if (!this.apiKey) {
      console.warn('Email service not configured, simulating email send');
      console.log('Email would be sent:', { to, subject, html });
      return;
    }

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: `${this.fromName} <${this.fromEmail}>`,
          to,
          subject,
          html,
          text: text || this.stripHtml(html),
        }),
      });

      if (!response.ok) {
        throw new Error(`Resend API error: ${response.statusText}`);
      }

      console.log(`Email sent to ${to}`);
    } catch (error) {
      console.error('Send email error:', error);
      throw new Error('Failed to send email');
    }
  }

  /**
   * Strip HTML tags for plain text fallback
   */
  private stripHtml(html: string): string {
    return html
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .trim();
  }
}

/**
 * Create singleton instance
 */
export const emailService = new ResendEmailService();

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Normalize email (lowercase, trim)
 */
export function normalizeEmail(email: string): string {
  return email.toLowerCase().trim();
}
