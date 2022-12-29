/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './client/src/**/*.{js,jsx}',
    './client/dist/**/*.html'
  ],
  theme: {
    extend: {
      boxShadow: {
        'circle': '0 0 10px 10px rgba(0, 0, 0, 0.1)'
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
};
