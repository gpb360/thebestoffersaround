# Blog Article Images Plan

## Overview
Generate ultra-realistic blog header images for 5 articles using Grok Imagine API.

## Image Specifications
- **Aspect Ratio:** 16:9 (landscape, ideal for blog headers)
- **Style:** Professional, magazine-quality photography
- **Resolution:** High definition (approximately 1920x1080px)
- **Aesthetic:** Consistent with site design (dark backgrounds, gold accents)

## Blog Articles & Image Concepts

### 1. Testosterone Boosters After 30
**Slug:** `testosterone-boosters-after-30`
**File:** `testosterone-boosters-after-30.jpg`
**Category:** Testosterone Boosters

**Image Concept:**
- Confident mature man (30s-40s) in professional setting
-健身房 or athletic environment
- Dark, moody lighting with warm tones
- Visual theme: Vitality, strength, energy

**Prompt:**
```
Professional editorial photography of a fit confident man in his late 30s working out in a modern luxury gym. Dark dramatic lighting with golden rim lights. He's lifting weights, displaying lean muscle and vitality. Cinematic composition with shallow depth of field. Dark gradient background. High-end fitness magazine aesthetic. 16:9 aspect ratio. Photorealistic, professional quality.
```

---

### 2. Male Enhancement Options: What Science Actually Supports
**Slug:** `male-enhancement-science`
**File:** `male-enhancement-science.jpg`
**Category:** Male Enhancement

**Image Concept:**
- Professional medical/scientific setting
- Laboratory or clinical environment
- Clean, trustworthy aesthetic
- Visual theme: Science, research, credibility

**Prompt:**
```
Professional medical laboratory scene with scientific equipment and supplement bottles arranged artfully. Clean modern aesthetic with cool blue and silver tones. Professional clinical photography style. Shallow depth of field with blurred laboratory background. Trustworthy scientific aesthetic. Dark sophisticated background. 16:9 aspect ratio. Photorealistic, high-end medical photography.
```

---

### 3. Stimulant-Free Weight Loss for Men: CalmLean Review
**Slug:** `stimulant-free-weight-loss`
**File:** `stimulant-free-weight-loss.jpg`
**Category:** Weight Loss

**Image Concept:**
- Fit, healthy man
- Fresh, natural elements (green, clean aesthetic)
- Calm, balanced feeling (not stimulant-jittery)
- Visual theme: Natural health, wellness, balance

**Prompt:**
```
Professional lifestyle photography of a fit athletic man in his 30s preparing a healthy green smoothie in a modern kitchen. Natural morning light streaming in. Fresh vegetables and supplements visible on counter. Clean white and green color palette. Calm balanced aesthetic. Premium lifestyle magazine quality. Dark elegant background elements. 16:9 aspect ratio. Photorealistic.
```

---

### 4. HGH Releasers vs Injections: What Works Best?
**Slug:** `hgh-releasers-vs-injections`
**File:** `hgh-releasers-vs-injections.jpg`
**Category:** Anti-Aging

**Image Concept:**
- Mature man looking youthful and vibrant
- Comparison/split concept or scientific visualization
- Premium anti-aging clinic aesthetic
- Visual theme: Rejuvenation, comparison, choice

**Prompt:**
```
Professional portrait of a handsome man in his 40s-50s with excellent skin and vitality, speaking with a doctor in a modern anti-aging clinic. Premium medical environment with subtle scientific displays. Sophisticated lighting with silver and blue tones. Split composition showing professional consultation. Luxury wellness clinic aesthetic. 16:9 aspect ratio. Photorealistic, premium quality.
```

---

### 5. Nootropics for Focus: BrainPill Review & Guide
**Slug:** `nootropics-for-focus`
**File:** `nootropics-for-focus.jpg`
**Category:** Brain Health

**Image Concept:**
- Professional focused at work
- Modern tech/office environment
- Mental clarity, productivity theme
- Visual theme: Focus, intelligence, productivity

**Prompt:**
```
Professional business photography of a focused professional man working on multiple screens in a modern high-tech office. Blue accent lighting. Brain visualization overlay effects with neural network patterns in subtle glowing blue. Sharp foreground with blurred office background. Productivity and intelligence theme. Dark sophisticated aesthetic. 16:9 aspect ratio. Photorealistic, premium business photography.
```

---

## Implementation Steps

1. **Generate Images** using Grok Imagine API
   - Use 16:9 aspect ratio
   - Sequential processing to avoid rate limits
   - Monitor for completion

2. **Download & Save** to `/public/images/blog/`
   - Filename format: `{slug}.jpg`
   - Verify file integrity

3. **Update Blog Data** in `/src/data/blog.ts`
   - Add `image` property to each blog post
   - Reference new image paths

4. **Update Blog Components**
   - Display featured images on blog listing page
   - Add hero images to individual blog post pages
   - Ensure responsive display

5. **Test Locally**
   - Verify images display correctly
   - Check mobile responsiveness
   - Validate image quality

6. **Deploy to Production**
   - Commit changes
   - Push to trigger Vercel deployment
   - Verify live site

## Success Criteria

✅ All 5 blog articles have professional featured images
✅ Images are relevant to article content
✅ Consistent visual quality across all images
✅ Images display correctly on all devices
✅ Production deployment successful

## Timeline

- **Image Generation:** 15-20 minutes
- **Integration:** 10 minutes
- **Testing & Deployment:** 10 minutes
- **Total:** 35-40 minutes
