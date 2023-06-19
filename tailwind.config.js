/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': '0px',
      'tablet': '769px',
      'desktop': '1023px',
    },
    boxShadow: {
      'v1': 'rgba(0, 0, 0, 0.4) 0px 2px 15px -3px'
    },
    fontFamily: {
      'lato': 'Lato'
    }
  },
  plugins: [],
}