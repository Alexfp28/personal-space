/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'winter-dark': '#0A1929',
        'winter-darker': '#051018',
        'winter-mid': '#1E3A5F',
        'winter-blue': '#2E5984',
        'winter-light': '#F0F4F8',
        'winter-snow': '#FFFFFF',
        'winter-frost': '#E3F2FD',
        'aurora-blue': '#64B5F6',
        'aurora-cyan': '#4FC3F7',
        'aurora-teal': '#26C6DA',
        'aurora-purple': '#B39DDB',
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.glass-effect': {
          background: 'rgba(30, 58, 95, 0.6)',
          backdropFilter: 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
          border: '1px solid rgba(100, 181, 246, 0.2)',
        },
        '.frost-border': {
          border: '1px solid rgba(100, 181, 246, 0.2)',
          boxShadow: '0 0 10px rgba(100, 181, 246, 0.3)',
          transition: 'box-shadow 0.3s ease',
          '&:hover': {
            boxShadow: '0 0 20px rgba(100, 181, 246, 0.5)',
          },
        },
      });
    },
  ],
}
