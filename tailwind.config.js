/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellowC': "#F2C200",
        'redC': "#E21F14",
        'cyanC': "#D0E7ED",
      },
      screens: {
        'lgAux': '1000px',
      },
    },
    plugins: [],
  }
}