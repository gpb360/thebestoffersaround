# PostHog Setup Guide

The PostHog wizard requires an interactive terminal. Here's how to set it up manually:

## Option 1: Get Your PostHog API Key

1. **Sign up for PostHog** (if you haven't already):
   - Go to https://app.posthog.com/signup
   - Create a free account (no credit card required)

2. **Get your API Key**:
   - Go to https://app.posthog.com/project/settings
   - Find "Project API Key" under the Configuration section
   - Copy your API key (looks like: `phc_xxxxxxxxxxxxx`)

3. **Add to your project**:
   ```bash
   # Create .env file in project root
   echo "PUBLIC_POSTHOG_KEY=your_actual_api_key_here" > .env
   echo "PUBLIC_POSTHOG_HOST=https://app.posthog.com" >> .env
   ```

## Option 2: Use PostHog Cloud (Recommended for Start)

If you don't have a PostHog account yet:

1. **Sign up**: https://app.posthog.com/signup
2. **Create a project**: Give it a name like "The Best Offers Around"
3. **Copy your API key** from Project Settings
4. **Add to `.env`** (see Option 1, step 3)

## Option 3: Self-Host PostHog (Advanced)

If you want to self-host for complete data control:

```bash
# Using Docker
docker run -p 8000:8000 posthog/posthog:latest
```

Then use:
```
PUBLIC_POSTHOG_KEY=your_key
PUBLIC_POSTHOG_HOST=http://localhost:8000
```

## Verify Setup

After adding your API key:

```bash
# Start development server
npm run dev

# Visit http://localhost:4321
# Check browser console for PostHog initialization
```

You should see PostHog initialized successfully in the browser console.

## Events That Will Be Tracked

Once set up, PostHog will automatically track:

1. **Page Views** - Every page visit with metadata
2. **Scroll Depth** - How far users scroll (25%, 50%, 75%, 100%)
3. **Affiliate Clicks** - Every CTA button click
4. **Time on Page** - How long users spend reading
5. **Internal Links** - Navigation between articles

## Create Your First Dashboard

1. Go to https://app.posthog.com
2. Click "Dashboards" → "New Dashboard"
3. Add these insights:

### Content Performance Insights

**Page Views by Article:**
- Click "Add insight"
- Choose "Trends"
- Event: `$pageview`
- Break down by: `$current_url`
- Display: Bar chart

**Average Scroll Depth:**
- Event: `article_scroll_100percent`
- Compare with `article_scroll_25percent`, `article_scroll_50percent`, `article_scroll_75percent`

**Affiliate CTA Clicks:**
- Event: `affiliate_cta_clicked`
- Break down by: `product_name`
- Display: Pie chart

### Conversion Funnel

1. Click "Add insight"
2. Choose "Funnels"
3. Steps:
   - Step 1: `$pageview` (viewed article)
   - Step 2: `article_scroll_50percent` (read half)
   - Step 3: `affiliate_cta_clicked` (clicked CTA)

## Data Retention

Free PostHog Cloud tier includes:
- **1 million events per month** (generous for most sites)
- **30-day data retention**
- **Unlimited team members**

Should be more than enough for your affiliate site!

## Privacy & GDPR

PostHog is GDPR-compliant by default:
- No personal data collected without consent
- IP addresses are anonymized
- Data processed in EU/US based on your region

You can configure additional privacy settings in:
https://app.posthog.com/project/settings/privacy

## Troubleshooting

**Events not appearing?**
1. Check browser console for errors
2. Verify `.env` file exists with correct API key
3. Restart dev server: `npm run dev`

**Wrong region?**
If you're using EU region, change:
```
PUBLIC_POSTHOG_HOST=https://app.eu.posthog.com
```

**Need help?**
- PostHog Docs: https://posthog.com/docs
- PostHog Slack: https://posthog.com/slack
- Email: support@posthog.com

## Next Steps

After setup:

1. ✅ Verify events are flowing in PostHog
2. ✅ Create your first dashboard
3. ✅ Set up alert for low traffic
4. ✅ Configure weekly email reports

Then focus on creating content! 🚀
