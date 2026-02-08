export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  image: string;
  rating: number;
  price: string;
  commission: string;
  guarantee: string;
  affiliateLink: string;
  benefits: string[];
  keyIngredients: string[];
  clinicalProof: string;
  description: string;
  featured: boolean;
}

export const products: Product[] = [
  // =================== 50% COMMISSION PRODUCTS ===================
  {
    id: 'testosil',
    name: 'Testosil',
    slug: 'testosil',
    category: 'testosterone-boosters',
    image: '/images/products/testosil.jpg',
    rating: 4.8,
    price: '$69.99',
    commission: '50%',
    guarantee: 'Lifetime Money-Back Guarantee',
    affiliateLink: 'https://www.testosil.com/ct/752371',
    benefits: [
      '300mg of KSM-66® Ashwagandha',
      'Clinically-validated dosage',
      'Boosts free testosterone by up to 434%',
      'Lifetime guarantee',
      'All-natural formula'
    ],
    keyIngredients: ['KSM-66® Ashwagandha (300mg)', 'Fenugreek', 'Zinc', 'Magnesium', 'Vitamin D3', 'D-Aspartic Acid'],
    clinicalProof: 'Clinical study showed 434% increase in free testosterone levels with KSM-66 Ashwagandha',
    description: 'Testosil is a premium testosterone booster featuring 300mg of patented KSM-66® Ashwagandha - the clinically-validated dosage. Backed by a lifetime guarantee, it\'s designed for men seeking natural testosterone support.',
    featured: true
  },
  {
    id: 'vigrx-plus',
    name: 'VigRX Plus',
    slug: 'vigrx-plus',
    category: 'male-enhancement',
    image: '/images/products/vigrx-plus.jpg',
    rating: 4.7,
    price: '$76.99',
    commission: '50%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.vigrxplus.net/ct/752371',
    benefits: [
      'Doctor-endorsed formula',
      'Backed by clinical study',
      'Improved erection quality',
      'Enhanced sexual stamina',
      'Increased libido'
    ],
    keyIngredients: ['Bioperine', 'Damiana', 'Asian Red Ginseng', 'Epimedium Leaf Extract', 'Hawthorn Berry'],
    clinicalProof: 'Triple-blind clinical study showed significant improvements in erection quality and sexual satisfaction',
    description: 'VigRX Plus is the premier male enhancement supplement, backed by a clinical study and endorsed by Dr. Steven Lamm. Improves erection quality, stamina, and overall sexual performance.',
    featured: true
  },
  {
    id: 'erectin',
    name: 'Erectin',
    slug: 'erectin',
    category: 'male-enhancement',
    image: '/images/products/erectin.jpg',
    rating: 4.7,
    price: '$69.99',
    commission: '50%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.erectin.com/ct/752371',
    benefits: [
      'Backed by clinical study',
      'Endorsed by Dr. Dave David',
      'Rapid release liquid gel capsules',
      'Works within 30 minutes',
      '24-hour effectiveness'
    ],
    keyIngredients: ['Epimedium', 'Muira Puama', 'Catuaba Bark', 'Ginkgo Biloba', 'Asian Red Ginseng'],
    clinicalProof: 'Clinical study demonstrated significant improvements in erectile function and intercourse satisfaction',
    description: 'Erectin features rapid-release liquid gel technology for faster absorption. Endorsed by surgeon Dr. Dave David, clinically proven to improve male sexual performance.',
    featured: false
  },
  {
    id: 'dim3x',
    name: 'DIM 3X',
    slug: 'dim3x',
    category: 'testosterone-boosters',
    image: '/images/products/dim3x.jpg',
    rating: 4.6,
    price: '$54.99',
    commission: '50%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.dim3x.com/ct/752371',
    benefits: [
      'Reduces estrogen levels',
      'Boosts testosterone',
      'Improves mood and focus',
      'Increases strength and stamina',
      'All-natural formula'
    ],
    keyIngredients: ['DIM (Diindolylmethane)', 'BioPerine', 'Vitamin E', 'Calcium D-Glucarate'],
    clinicalProof: 'Clinical studies support DIM for hormone balance and estrogen metabolism',
    description: 'DIM 3X helps men manage estrogen levels naturally. By reducing active estrogen and optimizing testosterone, it improves mood, focus, strength, and stamina.',
    featured: false
  },
  {
    id: 'testodren',
    name: 'Testodren',
    slug: 'testodren',
    category: 'testosterone-boosters',
    image: '/images/products/testodren.jpg',
    rating: 4.7,
    price: '$59.99',
    commission: '50%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.testodren.com/ct/752371',
    benefits: [
      'Clinically-tested patented formula',
      'All-natural testosterone booster',
      'Designed for men over 30',
      'Increases free testosterone',
      'No side effects'
    ],
    keyIngredients: ['Fenugreek Extract (Patented TF-4)', 'BioPerine'],
    clinicalProof: 'Clinical study showed significant increase in free testosterone levels',
    description: 'Testodren features a patented Fenugreek extract clinically tested to boost free testosterone. All-natural formula designed specifically for men over 30 experiencing natural testosterone decline.',
    featured: true
  },
  {
    id: 'calmlean',
    name: 'CalmLean',
    slug: 'calmlean',
    category: 'weight-loss',
    image: '/images/products/calmlean.jpg',
    rating: 4.6,
    price: '$59.99',
    commission: '50%',
    guarantee: 'Lifetime Money-Back Guarantee',
    affiliateLink: 'https://www.calmlean.com/ct/752371',
    benefits: [
      'Stimulant-free formula',
      'Doctor-recommended',
      'Boosts metabolism naturally',
      'Reduces stubborn belly fat',
      'No jitters or crashes'
    ],
    keyIngredients: ['ForsLean', 'Capsimax', 'Chromax', 'BioPerine', 'Green Tea Extract'],
    clinicalProof: 'ForsLean shown to increase lean muscle mass while reducing body fat in clinical studies',
    description: 'CalmLean is a stimulant-free weight loss supplement designed specifically for men. Doctor-recommended formula boosts metabolism without the jitters associated with caffeine-based products.',
    featured: true
  },
  {
    id: 'cortisync',
    name: 'CortiSync',
    slug: 'cortisync',
    category: 'weight-loss',
    image: '/images/products/cortisync.jpg',
    rating: 4.5,
    price: '$64.99',
    commission: '50%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.cortisync.com/ct/752371',
    benefits: [
      'Reduces cortisol levels',
      'Targets belly fat',
      'Clinically proven',
      'Balances stress hormones',
      'Supports weight loss'
    ],
    keyIngredients: ['Sensoril Ashwagandha', 'L-Theanine', 'Magnolia Bark', 'Phosphatidylserine'],
    clinicalProof: 'Clinical study showed significant reduction in cortisol levels and belly fat',
    description: 'CortiSync targets the root cause of belly fat: high cortisol. Clinically proven to balance stress hormones and support healthy weight loss without stimulants.',
    featured: false
  },
  {
    id: 'testrx',
    name: 'TestRX',
    slug: 'testrx',
    category: 'muscle-fitness',
    image: '/images/products/testrx.jpg',
    rating: 4.6,
    price: '$64.99',
    commission: '50%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.testrx.com/ct/752371',
    benefits: [
      'Natural testosterone booster',
      'For muscle building crowd',
      'Increases muscle mass',
      'Boosts energy levels',
      'Improves virility'
    ],
    keyIngredients: ['Zinc Monomethionine', 'Magnesium Aspartate', 'Vitamin B6', 'D-Aspartic Acid', 'Fenugreek'],
    clinicalProof: 'ZMA studies show increased testosterone and strength in athletes',
    description: 'TestRX is designed for men who want bigger muscles, more energy, and better virility. Natural testosterone support optimized for the fitness and bodybuilding community.',
    featured: false
  },
  {
    id: 'primegenix',
    name: 'PrimeGENIX',
    slug: 'primegenix',
    category: 'muscle-fitness',
    image: '/images/products/primegenix.jpg',
    rating: 4.7,
    price: '$69.99',
    commission: '50%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.primegenix.com/ct/752371',
    benefits: [
      'For men over 40',
      'Clinically proven formula',
      'Premium fitness supplements',
      'Science-backed ingredients',
      'Optimal for aging men'
    ],
    keyIngredients: ['D-Aspartic Acid', 'Fenugreek', 'Zinc', 'Magnesium', 'Vitamin D3'],
    clinicalProof: 'Multiple clinical studies support ingredients for testosterone and muscle support in men 40+',
    description: 'PrimeGENIX offers clinically proven natural fitness supplements specifically formulated for men over 40. All ingredients backed by scientific research for optimal performance.',
    featured: false
  },

  // =================== 40% COMMISSION PRODUCTS ===================
  {
    id: 'genf20-muscle',
    name: 'GenF20 Muscle',
    slug: 'genf20-muscle',
    category: 'muscle-fitness',
    image: '/images/products/genf20-muscle.jpg',
    rating: 4.6,
    price: '$69.95',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.genf20muscle.com/ct/752371',
    benefits: [
      'HGH releaser for muscle',
      'Pack on lean muscle mass',
      'Torch body fat',
      'Enhances gym performance',
      'Natural formula'
    ],
    keyIngredients: ['L-Arginine', 'L-Glutamine', 'L-Glycine', 'L-Lysine', 'Tribulus Terrestris'],
    clinicalProof: 'Studies support HGH precursors for increased muscle mass and reduced body fat',
    description: 'GenF20 Muscle is a powerful HGH releaser focused on helping men pack on lean muscle mass and torch body fat. Natural alternative to synthetic HGH.',
    featured: false
  },
  {
    id: 'semenax',
    name: 'Semenax',
    slug: 'semenax',
    category: 'male-enhancement',
    image: '/images/products/semenax.jpg',
    rating: 4.5,
    price: '$59.95',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.semenax.com/ct/752371',
    benefits: [
      'Backed by clinical study',
      'Increases semen volume up to 500%',
      'More intense orgasms',
      'Improved fertility',
      'Enhanced sexual pleasure'
    ],
    keyIngredients: ['Swedish Flower Pollen', 'L-Lysine', 'Zinc Oxide', 'L-Arginine', 'Epimedium'],
    clinicalProof: 'Clinical study showed significant increase in semen volume and orgasm intensity',
    description: 'Semenax is the leading semen volume enhancer, backed by clinical research. Increases volume up to 500% for more intense orgasms and improved fertility.',
    featured: false
  },
  {
    id: 'erectin-gummies',
    name: 'Erectin Gummies',
    slug: 'erectin-gummies',
    category: 'male-enhancement',
    image: '/images/products/erectin-gummies.jpg',
    rating: 4.6,
    price: '$64.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.erectingummies.com/ct/752371',
    benefits: [
      'Award-winning formula',
      'Boosts blood flow in 30 minutes',
      'Improves circulation for 24 hours',
      'Convenient gummies',
      'No pills to swallow'
    ],
    keyIngredients: ['L-Citrulline', 'L-Arginine', 'Maca Root', 'Ginseng', 'Zinc'],
    clinicalProof: 'Award-winning formula with clinically-supported ingredients for blood flow enhancement',
    description: 'Erectin Gummies offer a convenient, tasty alternative to pills. Award-winning formula boosts blood flow within 30 minutes and maintains improvement for 24 hours.',
    featured: false
  },
  {
    id: 'proextender',
    name: 'ProExtender',
    slug: 'proextender',
    category: 'male-enhancement',
    image: '/images/products/proextender.jpg',
    rating: 4.4,
    price: '$199.95',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.proextender.com/ct/752371',
    benefits: [
      'Urologist recommended',
      'Clinically reviewed',
      'Uses traction method',
      'Increases penis size',
      'Revised 2021 for better value'
    ],
    keyIngredients: ['Medical-grade traction device', 'Ergonomic design', 'Adjustable tension'],
    clinicalProof: 'Clinical studies show traction devices increase length by 1-2 inches',
    description: 'ProExtender is a penis enlargement device recommended by urologists and reviewed by clinical studies. Uses the proven traction method to increase penis size naturally.',
    featured: false
  },
  {
    id: 'hypergh-14x',
    name: 'HyperGH 14x',
    slug: 'hypergh-14x',
    category: 'muscle-fitness',
    image: '/images/products/hypergh-14x.jpg',
    rating: 4.5,
    price: '$79.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.hypergh14x.com/ct/752371',
    benefits: [
      'Natural HGH boost for muscle growth',
      'Reduces body fat',
      'Increases lean muscle mass',
      'Faster workout recovery',
      'Enhances gym performance'
    ],
    keyIngredients: ['L-Arginine', 'L-Glutamine', 'L-Glycine', 'L-Lysine', 'L-Tyrosine'],
    clinicalProof: 'Studies support HGH precursors for increasing lean muscle and reducing body fat',
    description: 'HyperGH 14x is designed for serious fitness enthusiasts. Natural HGH boost supports greater lean muscle mass, reduced body fat, and enhanced workout performance.',
    featured: false
  },
  {
    id: 'prosolution-plus',
    name: 'Prosolution Plus',
    slug: 'prosolution-plus',
    category: 'male-enhancement',
    image: '/images/products/prosolution-plus.jpg',
    rating: 4.6,
    price: '$64.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.prosolutionplus.com/ct/752371',
    benefits: [
      'Clinically proven for premature ejaculation',
      '64% improvement in PE symptoms',
      'Improves erection quality',
      'Enhances control',
      'Increases satisfaction'
    ],
    keyIngredients: ['Withania Somnifera', 'Tribulus Terrestris', 'Mucuna Pruriens', 'Curculigo Orchioides'],
    clinicalProof: 'Clinical study showed 64% improvement in premature ejaculation symptoms',
    description: 'Prosolution Plus is one of the few natural supplements clinically proven to improve premature ejaculation. Targets both timing and erection quality.',
    featured: false
  },
  {
    id: 'erectin-gel',
    name: 'Erectin Gel',
    slug: 'erectin-gel',
    category: 'male-enhancement',
    image: '/images/products/erectin-gel.jpg',
    rating: 4.6,
    price: '$59.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.erectingel.com/ct/752371',
    benefits: [
      'Topical application',
      'Four erection-hardening compounds',
      'Absorption enhancers',
      'Improves erectile function',
      'Enhances satisfaction'
    ],
    keyIngredients: ['L-Arginine', 'Menthol', 'Aloe Vera', 'Vitamin E'],
    clinicalProof: 'Topical L-Arginine clinically shown to improve blood flow and erectile function',
    description: 'Erectin Gel is a topical male enhancement solution with four erection-hardening compounds and absorption enhancers. Improves erectile function, desire, and satisfaction.',
    featured: false
  },
  {
    id: 'genf20',
    name: 'GenF20',
    slug: 'genf20',
    category: 'anti-aging',
    image: '/images/products/genf20.jpg',
    rating: 4.7,
    price: '$69.95',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.genf20muscle.com/ct/752371',
    benefits: [
      '#1 rated HGH releaser',
      'Reduces wrinkles and fine lines',
      'Increases muscle tone',
      'Boosts energy levels',
      'Doctor-endorsed'
    ],
    keyIngredients: ['L-Arginine', 'L-Glycine', 'L-Glutamine', 'L-Lysine', 'Astragalus Root Extract'],
    clinicalProof: 'Multiple studies support HGH precursor effectiveness for anti-aging benefits',
    description: 'GenF20 is the #1 rated HGH releaser, targeting anti-aging and muscle building. Safe, affordable, and doctor-endorsed alternative to HGH injections.',
    featured: true
  },
  {
    id: 'volume-pills',
    name: 'Volume Pills',
    slug: 'volume-pills',
    category: 'male-enhancement',
    image: '/images/products/volume-pills.jpg',
    rating: 4.4,
    price: '$54.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.semenax.com/ct/752371',
    benefits: [
      'Increases semen volume',
      'Bigger, more intense orgasms',
      'Improves fertility',
      'Works with ProSolution Pills',
      'Enhanced sexual pleasure'
    ],
    keyIngredients: ['Solidilin', 'Xi Lan Rou Gui', 'Hong Hua Fen', 'Ku Gua', 'Emblica Officinalis'],
    clinicalProof: 'Formulation designed based on traditional medicine and modern research',
    description: 'Volume Pills helps men increase semen volume for bigger, more intense orgasms. Also improves fertility and pairs well with ProSolution Pills for enhanced results.',
    featured: false
  },
  {
    id: 'extenze',
    name: 'Extenze',
    slug: 'extenze',
    category: 'male-enhancement',
    image: '/images/products/extenze.jpg',
    rating: 4.3,
    price: '$49.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.buyextenze.com/ct/752371',
    benefits: [
      'Over 1 billion pills sold',
      'Most well-known brand',
      'Extended-release gel caps',
      'Improves sexual performance',
      'Affordable option'
    ],
    keyIngredients: 'Yohimbe extract, Korean ginseng, horny goat weed, L-arginine, zinc',
    clinicalProof: 'Extensive customer use and testimonials',
    description: 'Extenze is one of the most well-known male enhancement supplements, with over 1 billion pills sold. Extended-release gel caps provide improved absorption and effectiveness.',
    featured: false
  },
  {
    id: 'prosolution-pills',
    name: 'ProSolution Pills',
    slug: 'prosolution-pills',
    category: 'male-enhancement',
    image: '/images/products/prosolution-pills.jpg',
    rating: 4.5,
    price: '$59.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.prosolutionpills.com/ct/752371',
    benefits: [
      'Industry leader for over a decade',
      'Excellent customer results',
      'Fantastic conversions',
      'Great upsell potential',
      'Cross-product sales'
    ],
    keyIngredients: ['Withania Somnifera', 'Solidilin', 'Taj', 'Momordica', 'Drilizen'],
    clinicalProof: 'Proven track record with excellent customer feedback',
    description: 'ProSolution Pills has been an industry leader for over a decade. Excellent customer results, conversions, and strong potential for upsells and cross-product sales.',
    featured: false
  },
  {
    id: 'vigrx-oil',
    name: 'VigRX Oil',
    slug: 'vigrx-oil',
    category: 'male-enhancement',
    image: '/images/products/vigrx-oil.jpg',
    rating: 4.4,
    price: '$49.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.vigrxoil.com/ct/752371',
    benefits: [
      'Topical application',
      '73% get erection in 1 minute',
      'Fast-acting',
      'Improves sexual pleasure',
      'No pills to swallow'
    ],
    keyIngredients: ['Transdermal Delivery System', 'L-Arginine', 'Asian Red Ginseng', 'Ginkgo Biloba', 'Muira Puama'],
    clinicalProof: '73% of men achieved erection within one minute in studies',
    description: 'VigRX Oil is a topical male enhancement solution used to improve sexual pleasure. 73% of men get an erection within a minute or less.',
    featured: false
  },
  {
    id: 'vigrx-delay-spray',
    name: 'VigRX Delay Spray',
    slug: 'vigrx-delay-spray',
    category: 'male-enhancement',
    image: '/images/products/vigrx-delay-spray.jpg',
    rating: 4.5,
    price: '$39.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.vigrxdelayspray.com/ct/752371',
    benefits: [
      'Male desensitizer spray',
      'Last longer in bed',
      'Great upsell with VigRX Plus',
      'Fast-acting',
      'Easy to use'
    ],
    keyIngredients: ['Benzocaine', 'Menthol', 'Aloe Vera'],
    clinicalProof: 'Clinically proven to delay ejaculation',
    description: 'VigRX Delay Spray helps guys delay orgasm so they last longer. Works as a great upsell with VigRX Plus or Semenax.',
    featured: false
  },
  {
    id: 'prosolution-gel',
    name: 'ProSolution Gel',
    slug: 'prosolution-gel',
    category: 'male-enhancement',
    image: '/images/products/prosolution-gel.jpg',
    rating: 4.5,
    price: '$49.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.prosolutiongel.com/ct/752371',
    benefits: [
      'Results in seconds',
      'Stimulates instant erection',
      'Adds control',
      'Prevents premature ejaculation',
      'Topical application'
    ],
    keyIngredients: ['L-Arginine', 'Algae Extract', 'Methyl Nicotinate', 'Bearberry Extract'],
    clinicalProof: 'Rapid-absorption formula for instant results',
    description: 'ProSolution Gel results in literally seconds. Stimulates instant erection and adds control to prevent premature ejaculation. Topical formula for fast action.',
    featured: false
  },
  {
    id: 'genfx',
    name: 'GenFX',
    slug: 'genfx',
    category: 'anti-aging',
    image: '/images/products/genfx.jpg',
    rating: 4.5,
    price: '$59.95',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.genfx.com/ct/752371',
    benefits: [
      'Solid HGH performer',
      'Extensive track record',
      'Strong customer testimonials',
      'Doctor endorsements',
      'Anti-aging focus'
    ],
    keyIngredients: ['L-Arginine', 'L-Glutamine', 'L-Glycine', 'L-Lysine', 'L-Pyroglutamate'],
    clinicalProof: 'Long track record with customer results and medical endorsements',
    description: 'GenFX is a solid performer in the HGH market with extensive track record, strong customer testimonials, and credible doctor endorsements.',
    featured: false
  },
  {
    id: 'nexus-pheromones',
    name: 'Nexus Pheromones',
    slug: 'nexus-pheromones',
    category: 'male-enhancement',
    image: '/images/products/nexus-pheromones.jpg',
    rating: 4.4,
    price: '$54.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.nexuspheromones.com/ct/752371',
    benefits: [
      'Sexual chemistry in a bottle',
      '100% pure androstenone',
      'Makes you attractive to women',
      '100% moneyback guarantee',
      'No side effects'
    ],
    keyIngredients: ['Pure Androstenone Pheromone Concentrate', 'Proprietary Blend'],
    clinicalProof: 'Studies show pheromones influence attraction',
    description: 'Nexus Pheromones is sexual chemistry in a bottle. 100% pure androstenone pheromone concentrate that makes men irresistibly attractive to women.',
    featured: false
  },
  {
    id: 'provacyl',
    name: 'Provacyl',
    slug: 'provacyl',
    category: 'anti-aging',
    image: '/images/products/provacyl.jpg',
    rating: 4.6,
    price: '$69.95',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.provacyl.com/ct/752371',
    benefits: [
      'Addresses andropause',
      'HGH releaser',
      'For baby boomers',
      'Anti-aging market leader',
      'Comprehensive formula'
    ],
    keyIngredients: ['L-Glutamine', 'L-Arginine', 'L-Glycine', 'GABA', 'L-Lysine'],
    clinicalProof: 'Designed to address steady decrease of hormone production in men',
    description: 'Provacyl addresses the steady decrease of hormone production in men (andropause). Powerful HGH releaser designed for baby boomers and leader in anti-aging market.',
    featured: false
  },
  {
    id: 'brainpill',
    name: 'BrainPill',
    slug: 'brainpill',
    category: 'brain-health',
    image: '/images/products/brainpill.jpg',
    rating: 4.6,
    price: '$59.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.brainpill.com/ct/752371',
    benefits: [
      'Boosts focus and concentration',
      'Increases mental energy',
      'Reduces brain fog',
      'Enhances memory recall',
      'Improves cognitive performance'
    ],
    keyIngredients: ['Cognizin', 'Synapsa', 'Vitamin B12', 'Bacopa Monnieri', 'L-Tyrosine'],
    clinicalProof: 'Clinical studies support ingredients for improved memory and cognitive function',
    description: 'BrainPill is a premium nootropic supplement designed to boost focus, mental energy, and reduce brain fog. Perfect for professionals and students seeking peak cognitive performance.',
    featured: true
  },
  {
    id: 'vigrx-nitric-oxide',
    name: 'VigRX Nitric Oxide',
    slug: 'vigrx-nitric-oxide',
    category: 'male-enhancement',
    image: '/images/products/vigrx-nitric-oxide.jpg',
    rating: 4.5,
    price: '$49.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.vigrxnitricoxide.com/ct/752371',
    benefits: [
      'Improves erection quality',
      'Boosts sexual stamina',
      'Increases blood flow',
      'Made with L-Citrulline and L-Arginine',
      'VigRX brand quality'
    ],
    keyIngredients: ['L-Citrulline', 'L-Arginine', 'Epimedium', 'Asian Red Ginseng', 'Ginkgo Biloba'],
    clinicalProof: 'Nitric oxide precursors clinically shown to improve blood flow and erection quality',
    description: 'VigRX Nitric Oxide improves quality of erections, boosts sexual stamina, and increases blood flow. Made with L-Citrulline and L-Arginine for optimal nitric oxide production.',
    featured: false
  },
  {
    id: 'vigrx-incontinix',
    name: 'Vigrx Incontinix',
    slug: 'vigrx-incontinix',
    category: 'male-enhancement',
    image: '/images/products/vigrx-incontinix.jpg',
    rating: 4.4,
    price: '$54.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.vigrxincontinix.com/ct/752371',
    benefits: [
      'Male urinary incontinence',
      'Fewer bathroom visits',
      'Decreased urges at night',
      'Leaks cut in half',
      'Improved quality of life'
    ],
    keyIngredients: ['Saw Palmetto', 'Pumpkin Seed Oil', 'Pygeum Africanum', 'Beta-Sitosterol'],
    clinicalProof: 'Ingredients clinically proven to support prostate and bladder health',
    description: 'Vigrx Incontinix is a male urinary incontinence supplement. Reduces bathroom visits, decreases nighttime urges, cuts leaks in half, and improves quality of life.',
    featured: false
  },
  {
    id: 'vigrx-max-volume',
    name: 'Vigrx Max Volume',
    slug: 'vigrx-max-volume',
    category: 'male-enhancement',
    image: '/images/products/vigrx-max-volume.jpg',
    rating: 4.4,
    price: '$49.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.vigrxmaxvolume.co/ct/752371',
    benefits: [
      'Increases semen volume',
      'Enhances orgasm intensity',
      '3rd option after Semenax',
      'More pleasure',
      'VigRX brand quality'
    ],
    keyIngredients: ['Solidilin', 'Drilizen', 'L-Arginine', 'Zinc Oxide', 'L-Lysine'],
    clinicalProof: 'Formulation designed based on semen volume enhancement research',
    description: 'Vigrx Max Volume increases pleasure and intensity of men\'s orgasms. The 3rd option next to Semenax & Volume Pills for semen volume enhancement.',
    featured: false
  },
  {
    id: 'magnarx',
    name: 'MagnaRX',
    slug: 'magnarx',
    category: 'male-enhancement',
    image: '/images/products/magnarx.jpg',
    rating: 4.3,
    price: '$44.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.magnarx.com/ct/752371',
    benefits: [
      'Premium brand',
      'Huge demand',
      '67 Day Money-Back Guarantee',
      'Increases sexual performance',
      'Trusted brand'
    ],
    keyIngredients: ['L-Arginine', 'Yohimbe', 'Maca', 'Ginseng', 'Oat Straw'],
    clinicalProof: 'Long-standing brand with customer testimonials',
    description: 'MagnaRX is a premium brand with huge demand. Comes with 67 Day Money-Back Guarantee and helps guys increase sexual performance.',
    featured: false
  },
  {
    id: 'vigrx-delay-wipes',
    name: 'VigRX Delay Wipes',
    slug: 'vigrx-delay-wipes',
    category: 'male-enhancement',
    image: '/images/products/vigrx-delay-wipes.jpg',
    rating: 4.5,
    price: '$34.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.vigrxdelaywipes.com/ct/752371',
    benefits: [
      'Convenient wipes',
      'Works in 10 minutes',
      'Higher conversions',
      'Great upsell or stand-alone',
      'Easy to use'
    ],
    keyIngredients: ['Benzocaine', 'Soothing botanicals'],
    clinicalProof: 'Fast-acting formula proven to delay ejaculation',
    description: 'VigRX Delay Wipes offer higher conversions with a convenient format. Works in just 10 minutes. Great as an upsell or stand-alone product.',
    featured: false
  },
  {
    id: 'semenhance',
    name: 'SemEnhance',
    slug: 'semenhance',
    category: 'male-enhancement',
    image: '/images/products/semenhance.jpg',
    rating: 4.4,
    price: '$54.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.semenhance.com/ct/752371',
    benefits: [
      'Semen taste enhancer',
      'All-natural formula',
      'Popular with couples',
      'Lifetime cookie',
      'International shipping'
    ],
    keyIngredients: ['Pineapple extract', 'Papaya enzyme', 'Banana powder', 'Natural sweeteners'],
    clinicalProof: 'Formulated based on natural ingredients known to improve taste',
    description: 'SemEnhance is an all-natural semen taste enhancer. Popular among women and men. Lifetime cookie and international shipping available.',
    featured: false
  },
  {
    id: 'fertility-factor-5',
    name: 'Fertility Factor 5',
    slug: 'fertility-factor-5',
    category: 'male-enhancement',
    image: '/images/products/fertility-factor-5.jpg',
    rating: 4.5,
    price: '$64.99',
    commission: '40%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.fertilityfactor5.com/ct/752371',
    benefits: [
      'Addresses male infertility',
      'Clinically studied formula',
      'Better sperm quantity',
      'Better sperm quality',
      'VigRX brand backing'
    ],
    keyIngredients: ['L-Carnitine', 'Zinc', 'Maca', 'Panax Ginseng', 'L-Arginine'],
    clinicalProof: 'Clinically studied formula for male fertility improvement',
    description: 'Fertility Factor 5 helps couples address male infertility. Clinically studied formula with VigRX name for better sperm quantity and quality.',
    featured: false
  },

  // =================== 30% COMMISSION PRODUCTS ===================
  {
    id: 'primegenix-bone-complex',
    name: 'PrimeGENIX Bone Complex',
    slug: 'primegenix-bone-complex',
    category: 'bone-health',
    image: '/images/products/primegenix-bone-complex.jpg',
    rating: 4.5,
    price: '$49.99',
    commission: '30%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.primegenixbonecomplex.com/ct/752371',
    benefits: [
      'Revolutionary bone support',
      'Full-spectrum formula',
      'For men only',
      'No negative side effects',
      'All-natural'
    ],
    keyIngredients: ['Calcium', 'Vitamin D3', 'Magnesium', 'Zinc', 'Vitamin K2'],
    clinicalProof: 'Comprehensive bone support backed by nutrient science',
    description: 'PrimeGENIX Bone Complex is a revolutionary bone-support formula for men. Full-spectrum bone support for male skeletal structure with all-natural ingredients and no negative side effects.',
    featured: false
  },
  {
    id: 'primegenix-prostate-support',
    name: 'PrimeGENIX Prostate Support',
    slug: 'primegenix-prostate-support',
    category: 'prostate-health',
    image: '/images/products/primegenix-prostate-support.jpg',
    rating: 4.6,
    price: '$54.99',
    commission: '30%',
    guarantee: '67-Day Money-Back Guarantee',
    affiliateLink: 'https://www.primegenixprostatesupport.com/ct/752371',
    benefits: [
      'Promotes prostate health',
      'Improves urinary function',
      'Reduces frequent urination',
      'Improves bladder control',
      'All-natural formula'
    ],
    keyIngredients: ['Beta-Sitosterol', 'Saw Palmetto', 'Pygeum Africanum', 'Nettle Root', 'Pumpkin Seed'],
    clinicalProof: 'Ingredients clinically proven to support prostate health',
    description: 'PrimeGENIX Prostate Support promotes prostate health and urinary function. Contains beta-sitosterol, saw palmetto, and pygeum africanum. Reduces frequent urination and improves bladder control.',
    featured: false
  }
];

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}
