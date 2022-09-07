/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pseudo': "url('./assets/laptop.jpg')",
        
      }
    },
  },
  plugins: [],
}
