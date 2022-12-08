/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const form = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      extend: {
        opacity: ['disabled'],
      },
      gridTemplateRows: {
        layout: '100px 1fr 80px',
      },
    },
  },
  plugins: [form, typography],
};
