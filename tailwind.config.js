/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        recoletaLt: ["recoleta-light", "sans-serif"],
        recoletaReg: ["recoleta-regular", "sans-serif"],
        recoletaMd: ["recoleta-medium", "sans-serif"],
      },
      colors: {
        cloverGreen: "#2F5A40",
      },
    },
  },
  plugins: [require("daisyui")],
}
