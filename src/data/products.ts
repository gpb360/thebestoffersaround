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
