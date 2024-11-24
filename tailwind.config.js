/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        warriors: {
          blue: '#1D428A',
          yellow: '#FFC72C',
        },
      },
    },
  },
  plugins: [],
};