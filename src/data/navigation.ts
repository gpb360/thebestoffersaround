export interface NavLink {
  name: string;
  href: string;
}

export interface DropdownItem {
  name: string;
  href: string;
  description?: string;
}

export interface NavItem {
  name: string;
  href?: string;
  children?: DropdownItem[];
  icon?: string; // Optional: for future icon support
}

export const navigationData: NavItem[] = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Health Deals',
    children: [
      { name: 'Testosterone Boosters', href: '/category/testosterone-boosters' },
      { name: 'Male Enhancement', href: '/category/male-enhancement' },
      { name: 'Weight Loss', href: '/category/weight-loss' },
      { name: 'Muscle & Fitness', href: '/category/muscle-fitness' },
      { name: 'Anti-Aging', href: '/category/anti-aging' },
      { name: 'Brain Health', href: '/category/brain-health' },
    ]
  },
  {
    name: 'Blog',
    href: '/blog'
  },
  // Future categories (commented out for now):
  // {
  //   name: 'Tech Deals',
  //   children: [
  //     { name: 'Laptops', href: '/deals/tech/laptops' },
  //     { name: 'Smartphones', href: '/deals/tech/smartphones' },
  //   ]
  // },
  // {
  //   name: 'Home Deals',
  //   children: [
  //     { name: 'Kitchen', href: '/deals/home/kitchen' },
  //     { name: 'Furniture', href: '/deals/home/furniture' },
  //   ]
  // },
];
