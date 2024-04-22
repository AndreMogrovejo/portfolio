/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1B1A55',
        'primary-light': '#535C91',
        'primary-dark': '#070F2B',
        'secondary-light': '#ffb900',
        'secondary-dark': '#ff7730',
        'tertiary-light': '#2998ff',
        'tertiary-dark': '#5643fa',
        'grey-light-1': '#f7f7f7',
        'grey-light-2': '#eee',
        'grey-dark': '#777',
        'grey-dark-2': '#999',
        'grey-dark-3': '#333'
      }
    }
  },
  plugins: []
}
// https://colorhunt.co/palette/070f2b1b1a55535c919290c3
