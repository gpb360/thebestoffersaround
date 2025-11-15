# TheBestOffersAround.com - Affiliate Marketing Website

A fully functional affiliate marketing website built with Astro, React, and Tailwind CSS, deployed on Netlify.

## Overview

TheBestOffersAround.com showcases and promotes products from ClickBank and other affiliate marketplaces across multiple categories including Health & Fitness, Digital Marketing, Make Money Online, Self-Improvement, Software & Tools, and eBooks & Courses.

## Features

### Homepage
- Eye-catching hero section with tagline "Discover Today's Best Deals & Offers"
- Trust badges showing verified deals, happy customers, and trusted status
- Featured products grid (6 products)
- Category navigation cards
- Trending products section (4 products)
- Newsletter signup form
- "Why Choose Us" trust-building section
- Affiliate disclosure statement

### Product System
- Card-based product layout with images, titles, descriptions, pricing
- 12 sample products pre-loaded across all categories
- Featured and Trending badges
- Responsive grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Product search and filtering

### Category Pages
- Main categories page listing all 6 categories with icons
- Individual category pages showing filtered products
- Breadcrumb navigation
- Product count display

### Admin Panel
- React-based product management interface at `/admin`
- Add, edit, and delete products
- Form fields for all product properties
- Local storage for demo (replace with database in production)

### Static Pages
- About Us
- Contact (with form)
- Privacy Policy
- Terms of Service
- All professionally formatted

### Design & UX
- Modern, clean, professional aesthetic
- Color scheme: Pink primary (#f67280) with complementary blue (#355c7d)
- Dark theme with gray-950 background
- Mobile-first responsive design
- Smooth transitions and hover effects

### SEO & Social
- Complete SEO meta tags
- Open Graph tags for social sharing
- Twitter Card meta tags
- SEO-friendly URL structure

## Technologies

- **Framework**: Astro 5.15
- **Adapter**: @astrojs/netlify
- **UI Library**: React 19 (for admin panel)
- **Styling**: Tailwind CSS 4
- **Font**: Inter Variable
- **Hosting**: Netlify

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## Key Pages

- `/` - Homepage with hero, featured products, categories
- `/products` - All products with search and filters
- `/categories` - Category listing
- `/category/[id]` - Individual category pages (6 dynamic routes)
- `/admin` - Product management interface
- `/about` - About page
- `/contact` - Contact form
- `/privacy` - Privacy policy
- `/terms` - Terms of service

## Product Categories

1. **Health & Fitness** 💪
2. **Digital Marketing** 📈
3. **Make Money Online** 💰
4. **Self-Improvement** 🌟
5. **Software & Tools** 🔧
6. **eBooks & Courses** 📚

## Customization for Production

To make this production-ready:

1. **Replace Affiliate Links**: Update all `affiliateLink` fields in `/src/data/products.json` with actual affiliate URLs
2. **Add Real Product Images**: Replace Unsplash placeholder URLs with actual product images
3. **Backend Integration**: Replace localStorage with Netlify Blobs or database
4. **Add Authentication**: Secure admin panel with Netlify Identity
5. **Newsletter Integration**: Connect to email service (Mailchimp, ConvertKit)
6. **Contact Form**: Connect to email service or use Netlify Forms
7. **Analytics**: Add Google Analytics tracking code
8. **Domain**: Connect your custom domain

## Project Structure

```
/
├── src/
│   ├── components/      # Astro & React components
│   ├── data/            # Product and category data (JSON)
│   ├── layouts/         # Page layouts with SEO
│   ├── pages/           # File-based routing
│   └── styles/          # Global styles
├── public/              # Static assets
└── netlify/             # Netlify functions and edge functions
```

## Admin Access

Visit `/admin` to manage products. This is a demo interface using browser localStorage. In production, add authentication and use a proper database.

## Notes

- All affiliate links include `rel="noopener noreferrer nofollow"` for SEO best practices
- Affiliate disclosure is prominent on homepage and in footer
- Design is fully responsive and mobile-friendly
- Build completed successfully with no errors

## Deploying to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/astro-platform-starter)

1. Push your code to GitHub
2. Connect to Netlify
3. Deploy!

The site will automatically build and deploy on every push to your main branch.
