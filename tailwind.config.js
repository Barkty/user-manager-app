/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '500px',
      },
      colors: {
        "soft-pink": "#feebfe"
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', "sans-serif"]
      }
    },
  },
  plugins: [],
}

