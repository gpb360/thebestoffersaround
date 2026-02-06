/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        'gold-dark': '#b8941f',
        'off-black': '#0a0a0a',
        'off-white': '#f5f5f5',
        'dark-gray': '#1a1a1a',
      },
    },
  },
  plugins: [],
}
