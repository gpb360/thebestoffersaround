/**
 * Email Template Generator
 * Generate HTML emails with inline CSS for maximum compatibility
 */

export interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

export interface WelcomeEmailData {
  email: string;
  firstName?: string;
  leadMagnetUrl?: string;
}

export interface WeeklyDigestData {
  posts: Array<{
    title: string;
    url: string;
    excerpt: string;
    category: string;
  }>;
  product?: {
    name: string;
    url: string;
    description: string;
    discount?: string;
  };
  date: string;
}

/**
 * Generate welcome email with lead magnet
 */
export function generateWelcomeEmail(data: WelcomeEmailData): EmailTemplate {
  const { email, firstName = '', leadMagnetUrl } = data;

  const subject = 'Welcome! Your Free Supplement Guide is Inside 🎁';

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to The Best Offers Around</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #0a0a0a;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #0a0a0a;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="margin: 0 auto; background-color: #1a1a1a; border-radius: 8px; overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="padding: 30px 40px; background: linear-gradient(135deg, #d4af37 0%, #f4e4bc 100%); text-align: center;">
              <h1 style="margin: 0; color: #0a0a0a; font-size: 28px; font-weight: bold;">
                The Best Offers Around
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 40px 20px;">
              <h2 style="margin: 0 0 20px; color: #d4af37; font-size: 24px;">
                Welcome to the Community! 👋
              </h2>

              <p style="margin: 0 0 20px; color: #e0e0e0; font-size: 16px; line-height: 1.6;">
                ${firstName ? `Hi ${firstName},` : 'Hi there,'}
              </p>

              <p style="margin: 0 0 20px; color: #e0e0e0; font-size: 16px; line-height: 1.6;">
                You're now part of an exclusive community of 10,000+ health-conscious individuals who trust us for unbiased supplement reviews and expert advice.
              </p>

              <!-- Lead Magnet -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin: 30px 0; background-color: #2a2a2a; border-radius: 8px; border: 2px solid #d4af37;">
                <tr>
                  <td style="padding: 30px; text-align: center;">
                    <p style="margin: 0 0 15px; color: #d4af37; font-size: 18px; font-weight: bold;">
                      🎁 Your Free Gift Inside
                    </p>
                    <p style="margin: 0 0 20px; color: #e0e0e0; font-size: 14px;">
                      Here's your "Ultimate Supplement Guide" with our top 10 clinically-validated recommendations
                    </p>
                    <a href="${leadMagnetUrl || 'https://thebestoffersaround.com/lead-magnet'}" style="display: inline-block; padding: 15px 40px; background-color: #d4af37; color: #0a0a0a; text-decoration: none; font-weight: bold; border-radius: 6px; font-size: 16px;">
                      Download Free Guide →
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin: 0 0 20px; color: #e0e0e0; font-size: 16px; line-height: 1.6;">
                <strong>What to expect:</strong>
              </p>

              <ul style="margin: 0 0 20px; padding-left: 20px; color: #e0e0e0; font-size: 16px; line-height: 1.8;">
                <li>Weekly expert supplement reviews</li>
                <li>Exclusive subscriber discounts</li>
                <li>Men's health tips & research</li>
                <li>No spam, ever. Unsubscribe anytime.</li>
              </ul>

              <p style="margin: 0; color: #e0e0e0; font-size: 16px; line-height: 1.6;">
                Cheers,<br>
                <strong>The Best Offers Around Team</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px; background-color: #0a0a0a; border-top: 1px solid #333;">
              <p style="margin: 0 0 10px; color: #888; font-size: 12px; text-align: center;">
                You're receiving this email because you subscribed to The Best Offers Around newsletter.
              </p>
              <p style="margin: 0; font-size: 12px; text-align: center;">
                <a href="https://thebestoffersaround.com/unsubscribe?email=${email}" style="color: #d4af37; text-decoration: underline;">Unsubscribe</a>
                |
                <a href="https://thebestoffersaround.com/privacy" style="color: #d4af37; text-decoration: underline;">Privacy Policy</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `
Welcome to The Best Offers Around!

${firstName ? `Hi ${firstName},` : 'Hi there,'}

You're now part of an exclusive community of 10,000+ health-conscious individuals.

YOUR FREE GIFT 🎁
Download your "Ultimate Supplement Guide" here: ${leadMagnetUrl || 'https://thebestoffersaround.com/lead-magnet'}

What to expect:
- Weekly expert supplement reviews
- Exclusive subscriber discounts
- Men's health tips & research
- No spam, ever. Unsubscribe anytime.

Cheers,
The Best Offers Around Team

---
Unsubscribe: https://thebestoffersaround.com/unsubscribe?email=${email}
Privacy Policy: https://thebestoffersaround.com/privacy
`;

  return { subject, html, text };
}

/**
 * Generate weekly digest email
 */
export function generateWeeklyDigest(data: WeeklyDigestData): EmailTemplate {
  const { posts, product, date } = data;

  const subject = `This Week's Top Supplement Reviews - ${date}`;

  const postsHtml = posts.map(post => `
    <tr>
      <td style="padding: 20px 0; border-bottom: 1px solid #333;">
        <p style="margin: 0 0 10px; color: #d4af37; font-size: 12px; text-transform: uppercase; font-weight: bold;">
          ${post.category}
        </p>
        <a href="${post.url}" style="color: #e0e0e0; text-decoration: none; font-size: 18px; font-weight: bold; display: block; margin-bottom: 10px;">
          ${post.title}
        </a>
        <p style="margin: 0; color: #a0a0a0; font-size: 14px; line-height: 1.6;">
          ${post.excerpt}
        </p>
      </td>
    </tr>
  `).join('');

  const productHtml = product ? `
    <tr>
      <td style="padding: 30px 0;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background: linear-gradient(135deg, #d4af37 0%, #f4e4bc 10%); border-radius: 8px;">
          <tr>
            <td style="padding: 30px;">
              <p style="margin: 0 0 10px; color: #0a0a0a; font-size: 14px; font-weight: bold; text-transform: uppercase;">
                ⭐ Product Spotlight
              </p>
              <p style="margin: 0 0 10px; color: #0a0a0a; font-size: 24px; font-weight: bold;">
                ${product.name}
              </p>
              <p style="margin: 0 0 20px; color: #1a1a1a; font-size: 14px; line-height: 1.6;">
                ${product.description}
              </p>
              <a href="${product.url}" style="display: inline-block; padding: 12px 30px; background-color: #0a0a0a; color: #d4af37; text-decoration: none; font-weight: bold; border-radius: 6px;">
                ${product.discount ? `Save ${product.discount} - ` : ''}Learn More →
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  ` : '';

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #0a0a0a;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #0a0a0a;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="margin: 0 auto; background-color: #1a1a1a; border-radius: 8px;">
          <!-- Header -->
          <tr>
            <td style="padding: 30px 40px; background: linear-gradient(135deg, #d4af37 0%, #f4e4bc 100%); text-align: center;">
              <h1 style="margin: 0; color: #0a0a0a; font-size: 24px; font-weight: bold;">
                This Week's Top Reviews
              </h1>
              <p style="margin: 10px 0 0; color: #1a1a1a; font-size: 14px;">
                ${date}
              </p>
            </td>
          </tr>

          <!-- Posts -->
          <tr>
            <td style="padding: 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                ${postsHtml}
              </table>
            </td>
          </tr>

          <!-- Product -->
          ${productHtml}

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px; background-color: #0a0a0a; border-top: 1px solid #333; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #888;">
                <a href="https://thebestoffersaround.com/unsubscribe" style="color: #d4af37;">Unsubscribe</a>
                |
                <a href="https://thebestoffersaround.com/privacy" style="color: #d4af37;">Privacy Policy</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `
THIS WEEK'S TOP REVIEWS - ${date}

${posts.map((post, i) => `
${i + 1}. ${post.title}
${post.category}
${post.excerpt}
Read more: ${post.url}
`).join('\n')}

${product ? `
⭐ PRODUCT SPOTLIGHT
${product.name}
${product.description}
${product.discount ? `Save ${product.discount} - ` : ''}${product.url}
` : ''}

---
Unsubscribe: https://thebestoffersaround.com/unsubscribe
`;

  return { subject, html, text };
}

/**
 * Generate confirmation email for double opt-in
 */
export function generateConfirmationEmail(email: string, confirmUrl: string): EmailTemplate {
  const subject = 'Please Confirm Your Subscription';

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #0a0a0a;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #0a0a0a;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="margin: 0 auto; background-color: #1a1a1a; border-radius: 8px;">
          <tr>
            <td style="padding: 40px; text-align: center;">
              <h2 style="margin: 0 0 20px; color: #d4af37; font-size: 24px;">
                Confirm Your Subscription
              </h2>
              <p style="margin: 0 0 30px; color: #e0e0e0; font-size: 16px; line-height: 1.6;">
                Please click the button below to confirm your email address and start receiving our expert supplement reviews.
              </p>
              <a href="${confirmUrl}" style="display: inline-block; padding: 15px 40px; background-color: #d4af37; color: #0a0a0a; text-decoration: none; font-weight: bold; border-radius: 6px; font-size: 16px;">
                Confirm Subscription →
              </a>
              <p style="margin: 30px 0 0; color: #888; font-size: 14px;">
                This link will expire in 24 hours.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `
CONFIRM YOUR SUBSCRIPTION

Please click the link below to confirm your email address:

${confirmUrl}

This link will expire in 24 hours.

If you didn't request this subscription, you can safely ignore this email.
`;

  return { subject, html, text };
}
