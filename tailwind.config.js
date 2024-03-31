/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-secondary": "#343a40",
        "primary": "#80ed99",
        "accent": "#495057"
      }
    },
  },
  plugins: [],
}