// tailwind.config.js
/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
 content: ['./src/**/*.{js,jsx,ts,tsx}',
  './src/*',
  './stories/*'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
 ],
};
