# The Best Offers Around - Astro Affiliate Site

A modern, high-performance static affiliate site built with Astro and Tailwind CSS for SellHealth products.

## Features

- ⚡ **Blazing fast** - Static site generation for optimal performance
- 📱 **Mobile-first responsive** design
- 🎨 **Professional dark theme** with gold accents
- 🔍 **SEO-optimized** with meta tags and Schema.org markup
- 💰 **Affiliate-ready** with all SellHealth links integrated
- 🎯 **Conversion-optimized** layouts
- 📝 **Blog system** for content marketing
- 🛡️ **FTC-compliant** privacy policy

## Quick Start

### Prerequisites

- Node.js 18+ installed
- Git installed

### Installation

1. **Navigate to project directory:**
   ```bash
   cd /home/garyp/astro-affiliate-site
   ```

2. **Install dependencies (if needed):**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:4321
   ```

## Project Structure

```
astro-affiliate-site/
├── public/
│   └── images/              # Static images (add product images here)
│       └── products/        # Product images
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── ProductCard.astro
│   ├── data/
│   │   └── products.ts      # Product database
│   ├── layouts/
│   │   └── Layout.astro     # Base layout
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   ├── about.astro
│   │   ├── privacy.astro
│   │   ├── contact.astro
│   │   ├── products/[slug].astro    # Dynamic product pages
│   │   ├── category/[category].astro  # Dynamic category pages
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [slug].astro
│   └── styles/
│       └── global.css       # Tailwind styles
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs      # Tailwind configuration
├── package.json
└── README.md
```

## Deployment

### GitHub + Vercel (Recommended)

#### Step 1: Initialize Git Repository

```bash
cd /home/garyp/astro-affiliate-site
git init
git add .
git commit -m "Initial commit - Astro affiliate site"
```

#### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create repository: `thebestoffersaround`
3. Don't initialize with README (we already have code)
4. Copy the repository URL

#### Step 3: Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/thebestoffersaround.git
git branch -M main
git push -u origin main
```

#### Step 4: Deploy to Vercel

1. Go to https://vercel.com
2. Sign up/login with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Astro
6. Click "Deploy"

#### Step 5: Connect Domain

1. In Vercel dashboard, go to Settings > Domains
2. Add domain: `thebestoffersaround.com`
3. Vercel will provide DNS records
4. Go to your domain registrar (Hostinger)
5. Add the DNS records provided by Vercel
6. Wait for DNS propagation (usually 1-24 hours)
7. SSL certificate is automatic

### Alternative: Netlify

1. Push code to GitHub
2. Go to https://netlify.com
3. "Add new site" > "Import an existing project"
4. Connect to GitHub
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy

## Customization

### Update Product Images

Add product images to `public/images/products/`:
- testosil.jpg
- vigrx-plus.jpg
- calmlean.jpg
- erectin.jpg
- semenax.jpg
- prosolution-plus.jpg
- genf20.jpg
- brainpill.jpg
- hypergh-14x.jpg
- volume-pills.jpg

### Update Products

Edit `src/data/products.ts` to modify product information, pricing, or add new products.

### Customize Colors

Edit `src/styles/global.css` to modify the color scheme:
- Primary: #0a0a0a (deep black)
- Secondary: #d4af37 (gold)
- Text: #f5f5f5 (off-white)
- Background: #1a1a1a (dark gray)

### Add Blog Posts

1. Create new entry in `src/pages/blog/[slug].astro` blogPosts object
2. Or add new Markdown files if you set up MDX support

## Google Analytics

1. Replace `G-XXXXXXXXXX` in `src/layouts/Layout.astro` with your actual GA4 measurement ID
2. Or remove the Analytics script entirely if not needed

## Contact Form

The contact form uses Formspree (free tier):

1. Sign up at https://formspree.io
2. Create a new form
3. Copy your form ID
4. Replace `your-form-id` in `src/pages/contact.astro` with your actual form ID

## Affiliate Links

All affiliate links are configured in `src/data/products.ts` with your tracking code:
- Testosil: https://www.testosil.com/ct/752371
- VigRX Plus: https://www.vigrxplus.net/ct/752371
- CalmLean: https://www.calmlean.com/ct/752371
- And more...

## Build for Production

```bash
npm run build
```

Output will be in `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `astro check` - Check for TypeScript errors
- `astro add` - Add Astro integrations

## Performance Optimization

The site is optimized for:
- Fast loading times (< 1 second)
- High Google PageSpeed scores (85+ mobile, 95+ desktop)
- SEO best practices
- Core Web Vitals

## SEO Checklist

- [x] Meta titles and descriptions
- [x] Semantic HTML structure
- [x] Schema.org markup (Product, Article, WebSite)
- [x] Open Graph tags
- [x] Mobile responsive
- [x] Fast loading
- [x] XML sitemap (Astro auto-generates)
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Build backlinks

## Next Steps

1. **Add product images** to `public/images/products/`
2. **Configure Google Analytics** in Layout.astro
3. **Set up contact form** with Formspree
4. **Deploy to Vercel**
5. **Connect domain**
6. **Submit sitemap to Google Search Console**
7. **Create more blog content**

## Support

For issues or questions:
- Astro docs: https://docs.astro.build
- Tailwind docs: https://tailwindcss.com/docs
- Vercel docs: https://vercel.com/docs

## License

This project is proprietary. All rights reserved.

---

**Built with ❤️ using Astro + Tailwind CSS**
