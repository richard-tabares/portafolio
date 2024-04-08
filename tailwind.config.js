/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        prueba: 'consolas, Arial, Helvetica, sans-serif',
      },
      boxShadow: {
        'flat': '4px 4px 0px 0px',
      },
      colors: {
        primaryLight: '#F9FAFB',
        secondaryLight: '#689699',
        thirdLight: '#526D82',
        primaryDark: '#222',
        secondaryDark: '#EEE',
      },
      screens: {
        
      }
    },
  },
  plugins: [],
}

