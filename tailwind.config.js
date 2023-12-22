/** @type {import('tailwindcss').Config} */
import './src/components/*.js'
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.js",
    "./src/pages/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}