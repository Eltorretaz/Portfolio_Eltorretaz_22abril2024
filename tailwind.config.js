/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'bg-black': '#18171c',
      }
    },
  },
  plugins: [],
}