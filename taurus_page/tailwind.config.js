/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1440px'
    },
    extend: {
      colors: {
        lightBlue: 'big-teal-50'
      } 
    },
  
  plugins: [],
}
}
