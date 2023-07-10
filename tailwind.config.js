/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities ({
    '.rotate-y-180': {
      transform: "rotateY(180deg)"
    },
    '.-rotate-y-180': {
      transform: "rotateY(-180deg)"
    }
  })
})
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#010513",
        "color-primary-light": "#020726",
        "color-secondary": "#ff7d3b",
        "color-gray": "#333",
        "color-white": "#fff",
        "color-blob": "#A427DF",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: '50px'
      }
    }
  },
  plugins: [rotateY],
}

