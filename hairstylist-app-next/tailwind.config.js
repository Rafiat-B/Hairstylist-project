/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'brown-600': '#410002',
          'brown-700': 'rgb(98, 75, 75)',
        },
        gap: {
          '14': '3.5rem', // 56px
        },
      },
    },
    plugins: [],
  };