/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      Roboto:[ 'Roboto', 'sans-serif'],
      Boing:["Boing WEB Bold"]
    },

    extend: {
      colors: {
        'primary-blue': '#011b33;',
        'light-green': '#3BB75E;',
        'check-green': '#F1FEF4;'
      },


      backgroundImage:{
        'hero-pattern': "url('./src/assets/svg.png')",

        'trusted-pattern': "url('./src/assets/pseudo.png')",
        
        'partner-pattern': "url('./src/assets/circular-pattern.png')",
        'last-pattern': "url('./src/assets/pseudo (2).png')",

      }


    },
  },
  plugins: [],
}

