#!/usr/bin/env python3

# Read products.ts
with open('src/data/products.ts', 'r') as f:
    lines = f.readlines()
    content = ''.join(lines)

# Define 11 new products to insert
new_products = """
  },
  {
    id: 'dim3x',
    name: 'DIM3X',
    slug: 'dim3x',
    category: 'estrogen-management',
    image: '/images/products/dim3x.jpg',
    rating: 4.5,
    price: '$59.99',
    commission: '50%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.dim3x.com/ct/752371',
    benefits: [
      'Helps lower active estrogen levels',
      'Boosts mood, focus, strength and stamina',
      'Promotes healthy testosterone-to-estrogen balance',
      'Reduces water retention',
      'Clinically-tested formula'
    ],
    keyIngredients: ['DIM (Diindolylmethane)', 'Calcium D-Glucarate', 'Vitamin D3', 'BioPerine', 'Phytosterols'],
    clinicalProof: 'Helps men reduce active estrogen levels naturally using bioavailable DIM compound',
    description: 'DIM3X helps men reduce active estrogen levels to boost mood, focus, strength, and stamina. Clinically-tested formula promotes healthy hormonal balance.',
    featured: false,
    metaTitle: 'DIM3X Review 2026: Natural Estrogen Management & Hormonal Balance',
    metaDescription: 'Comprehensive DIM3X review. Learn how bioavailable DIM helps lower estrogen, boost testosterone, and improve overall hormonal balance for men.',
    keywords: ['dim3x review', 'estrogen blocker', 'reduce estrogen men', 'hormonal balance supplements', 'natural estrogen control']
  },
  {
    id: 'testodren',
    name: 'Testodren',
    slug: 'testodren',
    category: 'testosterone-boosters',
    image: '/images/products/testodren.jpg',
    rating: 4.6,
    price: '$64.99',
    commission: '50%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.testodren.com/ct/752371',
    benefits: [
      'Clinically-tested patented formula',
      'All-natural testosterone booster',
      'Helps guys get bigger muscles',
      'More energy and better virility',
      'Designed for men over 30'
    ],
    keyIngredients: ['Testofen', 'Eurycoma Longifolia', 'Tribulus Terrestris', 'Fenugreek', 'Zinc', 'Magnesium'],
    clinicalProof: 'All-natural testosterone boosting supplement with clinically-tested, patented formula designed for muscle crowd and men over 30',
    description: 'Testodren is a clinically-tested, all-natural testosterone booster with a patented formula. Helps men increase muscle mass, energy, and virility.',
    featured: false,
    metaTitle: 'Testodren Review 2026: Patented Natural Testosterone Booster',
    metaDescription: 'Complete Testodren review. Discover how this patented, natural testosterone booster helps men build muscle, increase energy, and enhance virility.',
    keywords: ['testodren review', 'natural testosterone booster', 'testosterone supplements', 'muscle building testosterone', 'testodren results']
  },
  {
    id: 'cortisync',
    name: 'CortiSync',
    slug: 'cortisync',
    category: 'stress-management',
    image: '/images/products/cortisync.jpg',
    rating: 4.5,
    price: '$54.99',
    commission: '50%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.cortisync.com/ct/752371',
    benefits: [
      'Reduces cortisol (stress hormone)',
      'Promotes weight loss by balancing hormones',
      'Clinically proven to balance cortisol',
      'Combats stress-related belly fat',
      'No jitters or anxiety'
    ],
    keyIngredients: ['Sensoril', 'L-Theanine', 'Magnolia Bark Extract', 'Phosphatidylserine', 'Holy Basil Leaf'],
    clinicalProof: 'Clinically proven to balance cortisol levels that cause belly fat and weight gain',
    description: 'CortiSync reduces cortisol (stress hormone) to promote weight loss. Clinically proven formula helps balance hormones and combat stress-related belly fat.',
    featured: false,
    metaTitle: 'CortiSync Review 2026: Clinically-Proven Cortisol Reduction',
    metaDescription: 'Comprehensive CortiSync review. Learn how reducing cortisol levels helps promote weight loss, reduce belly fat, and balance hormones naturally.',
    keywords: ['cortisync review', 'cortisol reducer', 'stress hormone supplement', 'weight loss cortisol', 'reduce belly fat']
  },
  {
    id: 'testrx',
    name: 'TestRX',
    slug: 'testrx',
    category: 'testosterone-boosters',
    image: '/images/products/testrx.jpg',
    rating: 4.3,
    price: '$59.99',
    commission: '50%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.testrx.com/ct/752371',
    benefits: [
      'Natural testosterone booster',
      'Helps get bigger muscles',
      'More energy and better virility',
      'Designed for bodybuilders and athletes',
      'Supports workout performance'
    ],
    keyIngredients: ['Tribulus Terrestris', 'Maca Root', 'Zinc', 'Magnesium', 'Longjack', 'D-Aspartic Acid'],
    clinicalProof: 'Natural formula designed for bodybuilders and athletes seeking testosterone support for bigger muscles and enhanced performance',
    description: 'TestRX is a natural testosterone booster designed for bodybuilders and athletes. Helps increase muscle mass, energy, and virility.',
    featured: false,
    metaTitle: 'TestRX Review 2026: Natural Testosterone Booster for Bodybuilders',
    metaDescription: 'Comprehensive TestRX review. Discover how this natural testosterone booster helps bodybuilders get bigger muscles, more energy, and enhanced performance.',
    keywords: ['testrx review', 'testosterone booster bodybuilding', 'testosterone supplements athletes', 'muscle building testosterone', 'testrx results']
  },
  {
    id: 'primegenix',
    name: 'PrimeGENIX',
    slug: 'primegenix',
    category: 'muscle-fitness',
    image: '/images/products/primegenix.jpg',
    rating: 4.6,
    price: '$69.99',
    commission: '50%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.primegenix.com/ct/752371',
    benefits: [
      'Clinically proven natural supplements',
      'Formulated for men 40+',
      'All ingredients backed by scientific research',
      'Supports muscle mass and strength',
      'Premium fitness supplements'
    ],
    keyIngredients: ['Ashwagandha', 'D-Aspartic Acid', 'Rhodiola Rosea', 'Tribulus Terrestris', 'Fenugreek', 'Zinc'],
    clinicalProof: 'Clinically proven natural premium fitness supplements specifically formulated for men over 40 seeking muscle growth and strength',
    description: 'PrimeGENIX is clinically proven natural fitness supplements specifically formulated for men over 40. All ingredients are backed by scientific research.',
    featured: false,
    metaTitle: 'PrimeGENIX Review 2026: Premium Fitness Supplements for Men 40+',
    metaDescription: 'Comprehensive PrimeGENIX review. Discover clinically proven supplements designed for men 40+ seeking muscle growth, strength, and enhanced performance.',
    keywords: ['primegenix review', 'fitness supplements men 40', 'muscle building over 40', 'natural fitness supplements', 'primegenix results']
  },
  {
    id: 'erectin-gummies',
    name: 'Erectin Gummies',
    slug: 'erectin-gummies',
    category: 'male-enhancement',
    image: '/images/products/erectin-gummies.jpg',
    rating: 4.7,
    price: '$64.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.erectingummies.com/ct/752371',
    benefits: [
      'Award-winning formula',
      'Boosts blood flow within 30 minutes',
      'Improves circulation for 24 hours',
      'Convenient gummy form',
      'Fast-acting male enhancement'
    ],
    keyIngredients: ['Epimedium', 'Muira Puama', 'L-Citrulline', 'L-Arginine', 'Asian Red Ginseng', 'Ginkgo Biloba'],
    clinicalProof: 'Award-winning formula demonstrated to boost blood flow within 30 minutes with 24-hour circulation improvements',
    description: 'Erectin Gummies feature an award-winning formula that boosts blood flow within 30 minutes and improves circulation for 24 hours. Convenient gummy form.',
    featured: true,
    metaTitle: 'Erectin Gummies Review 2026: Fast-Acting Male Enhancement Gummies',
    metaDescription: 'Comprehensive Erectin Gummies review. Award-winning formula delivers results in 30 minutes with 24-hour circulation benefits. Convenient gummies.',
    keywords: ['erectin gummies review', 'male enhancement gummies', 'fast acting male enhancement', 'natural ED gummies', 'erectin gummies results']
  },
  {
    id: 'proextender',
    name: 'ProExtender',
    slug: 'proextender',
    category: 'penis-enlargement',
    image: '/images/products/proextender.jpg',
    rating: 4.3,
    price: '$199.99',
    commission: '40%',
    guarantee: '1-Year Money-Back Guarantee',
    affiliateLink: 'https://www.proextender.com/ct/752371',
    benefits: [
      'Medical device for penis enlargement',
      'Uses traction method for gains',
      'Recommended by urologists',
      'Reviewed by clinical studies',
      '1-year guarantee included'
    ],
    keyIngredients: ['Medical-grade traction device', 'Adjustable tension', 'Comfort strap system', 'Doctor-designed protocol', 'Support resources'],
    clinicalProof: 'Recommended by urologists and reviewed by clinical studies for effective penis enlargement using traction method',
    description: 'ProExtender is a medical-grade traction device for penis enlargement recommended by urologists. Reviewed by clinical studies with a 1-year guarantee.',
    featured: false,
    metaTitle: 'ProExtender Review 2026: Medical-Grade Penis Enlargement Device',
    metaDescription: 'Comprehensive ProExtender review. Medical-grade traction device using proven method. Recommended by urologists with 1-year guarantee.',
    keywords: ['proextender review', 'penis enlargement device', 'penis extender', 'penis traction method', 'medical penis enlarger']
  },
  {
    id: 'erectin-gel',
    name: 'Erectin Gel',
    slug: 'erectin-gel',
    category: 'male-enhancement',
    image: '/images/products/erectin-gel.jpg',
    rating: 4.6,
    price: '$69.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.erectingel.com/ct/752371',
    benefits: [
      'Four erection-hardening compounds',
      'Absorption enhancers',
      'Improves erectile function',
      'Sexual desire enhancement',
      'Intercourse satisfaction'
    ],
    keyIngredients: ['Epimedium', 'Muira Puama', 'Catuaba Bark', 'Ginkgo Biloba', 'Asian Red Ginseng', 'Proprietary absorption blend'],
    clinicalProof: 'Four erection-hardening compounds and absorption enhancers work to improve erectile function, sexual desire, and intercourse satisfaction',
    description: 'Erectin Gel features four erection-hardening compounds and absorption enhancers to improve erectile function, sexual desire, and intercourse satisfaction.',
    featured: true,
    metaTitle: 'Erectin Gel Review 2026: Topical Male Enhancement for Fast Results',
    metaDescription: 'Comprehensive Erectin Gel review. Four erection-hardening compounds with absorption enhancers improve erectile function, sexual desire, and satisfaction.',
    keywords: ['erectin gel review', 'topical male enhancement', 'fast acting male enhancement', 'natural ED gel', 'erectin gel results']
  },
  {
    id: 'genf20-muscle',
    name: 'GenF20 Muscle',
    slug: 'genf20-muscle',
    category: 'muscle-fitness',
    image: '/images/products/genf20-muscle.jpg',
    rating: 4.7,
    price: '$69.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.genf20muscle.com/ct/752371',
    benefits: [
      '#1 rated HGH releaser for muscle building',
      'Helps pack on lean muscle mass',
      'Torches body fat effectively',
      'Natural boost for gym performance',
      'Doctor-endorsed'
    ],
    keyIngredients: ['L-Arginine', 'L-Glutamine', 'L-Glycine', 'L-Lysine', 'Astragalus Root Extract', 'Deer Antler Velvet'],
    clinicalProof: 'Rated #1 HGH releaser focused on helping men pack on lean muscle mass and torch body fat naturally',
    description: 'GenF20 Muscle is the #1 rated HGH releaser for muscle building. Helps pack on lean muscle mass and torch body fat naturally.',
    featured: true,
    metaTitle: 'GenF20 Muscle Review 2026: #1 Rated HGH Muscle Builder',
    metaDescription: 'Comprehensive GenF20 Muscle review. #1 rated HGH releaser helps you pack on lean muscle mass and torch body fat naturally.',
    keywords: ['genf20 muscle review', 'hgh muscle builder', 'lean muscle supplements', 'genf20 muscle results', 'best hgh releaser']
  },
  {
    id: 'buy-extenze',
    name: 'BuyExtenze',
    slug: 'buy-extenze',
    category: 'male-enhancement',
    image: '/images/products/buy-extenze.jpg',
    rating: 4.5,
    price: '$59.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.buyextenze.com/ct/752371',
    benefits: [
      'Over 1 billion pills sold',
      'One of most well-known male enhancement supplements',
      'Extended-release gel caps',
      'Trusted brand for decades',
      'Strong customer following'
    ],
    keyIngredients: ['Yohimbe', 'Tribulus Terrestris', 'L-Arginine', 'Ginseng Blend', 'Zinc', 'Ginkgo Biloba'],
    clinicalProof: 'With over 1 billion pills sold and decades on the market, BuyExtenze has established itself as one of the most recognized male enhancement brands',
    description: 'BuyExtenze is one of the most well-known male enhancement supplements with over 1 billion pills sold. Extended-release gel caps for sustained results.',
    featured: true,
    metaTitle: 'BuyExtenze Review 2026: The Original Male Enhancement Formula',
    metaDescription: 'Comprehensive BuyExtenze review. With over 1 billion pills sold, discover why this trusted brand has been a top choice for decades. Extended-release technology.',
    keywords: ['buyextenze review', 'extenze review', 'male enhancement pills', 'best male enhancement supplement', 'extenze results']
  },
  {
    id: 'prosolution-pills',
    name: 'ProSolution Pills',
    slug: 'prosolution-pills',
    category: 'male-enhancement',
    image: '/images/products/prosolution-pills.jpg',
    rating: 4.6,
    price: '$64.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.prosolutionpills.com/ct/752371',
    benefits: [
      'Industry leader for over a decade',
      'Excellent customer results',
      'Fantastic conversions and return sales',
      'Improves erection quality',
      'Enhances sexual stamina'
    ],
    keyIngredients: ['Drilizen', 'Solidilin', 'Taj', 'Momordica', 'L-Arginine', 'Zinc'],
    clinicalProof: 'Industry-leading male enhancement brand with over a decade of success, excellent customer feedback, and fantastic conversion rates',
    description: 'ProSolution Pills is an industry-leading male enhancement brand for over a decade. Excellent customer results, fantastic conversions, and strong return sales.',
    featured: true,
    metaTitle: 'ProSolution Pills Review 2026: Industry-Leading Male Enhancement',
    metaDescription: 'Comprehensive ProSolution Pills review. Industry leader for over a decade with excellent results, fantastic conversions, and strong return sales.',
    keywords: ['prosolution pills review', 'prosolution results', 'male enhancement industry leader', 'best male enhancement brand', 'prosolution customer reviews']
  },
  {
    id: 'genf20-muscle',
    name: 'GenFX',
    slug: 'genf20-muscle',
    category: 'anti-aging',
    image: '/images/products/genf20-muscle.jpg',
    rating: 4.5,
    price: '$59.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.genfx.com/ct/752371',
    benefits: [
      'Solid performer in HGH market',
      'Extensive track record',
      'Strong customer testimonials',
      'Credible doctor endorsements',
      'Safe and affordable'
    ],
    keyIngredients: ['L-Arginine', 'L-Glutamine', 'L-Glycine', 'L-Lysine', 'Astragalus Root Extract', 'Alpha-GPC'],
    clinicalProof: 'Solid performer with extensive track record, strong customer testimonials, and credible doctor endorsements in HGH market',
    description: 'GenFX is a solid performer in the HGH market with extensive track record, strong customer testimonials, and credible doctor endorsements.',
    featured: false,
    metaTitle: 'GenFX Review 2026: Proven HGH Releaser for Anti-Aging',
    metaDescription: 'Comprehensive GenFX review. Solid HGH performer with extensive track record, strong testimonials, and credible doctor endorsements.',
    keywords: ['genfx review', 'hgh releaser', 'anti-aging supplements', 'genfx results', 'best hgh releaser']
  }
"""

# Find the position to insert (before the closing bracket)
# We need to insert before the last "  };" (which is just before the export functions)

# Split content into two parts
parts = content.split("];")

# Insert new products
new_content = parts[0] + "\n" + new_products + "\n" + parts[1]

# Write back to file
with open('src/data/products.ts', 'w') as f:
    f.write(new_content)

print("Successfully updated products.ts with 11 new products!")
print("Total products should now be:", len([p.strip() for p in new_products.split('\n ')]))
