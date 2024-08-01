/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,js,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Graphik', 'Inter', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      },
      height: {
        'svh-100px': 'calc(100svh - 100px)',
        'svh-200px': 'calc(100svh - 200px)',
        'svh-50': '50svh'
      },
      boxShadow: {
        'spread-lg': '0px 5px 25px -17px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

