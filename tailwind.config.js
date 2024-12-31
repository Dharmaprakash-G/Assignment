/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Add Montserrat font
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        customBlue: '#142d5c',
        mutedGrayBlue: '#6B6B84',
        lightGrayTransparent: 'rgba(235, 235, 235, 0.41)', 
        customTeal: '#235262'
      },
    },
  },
  plugins: [],
}