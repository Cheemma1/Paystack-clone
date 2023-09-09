/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      Roboto:[ 'Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        'primary-blue': '#011b33;',
        'light-green': '#3BB75E;',
        'hover-blue': '#3BB75E;'
      },


      backgroundImage:{
        'hero-pattern': "url('./src/assets/svg.png')",

        'footer-pattern': "url('./src/assets/woman-holding-various-shopping-bags-copy-space.jpg')",

      }


    },
  },
  plugins: [],
}

