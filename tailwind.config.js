/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
      },
      fontFamily:{
        'aul':['PT Serif', 'serif'],
        'hello':['Sansita', 'sans-serif'],
        'jake':['Bebas Neue', 'sans-serif'],
        'opet':['Lobster', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

