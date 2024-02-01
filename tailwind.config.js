/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/*.html"],
  theme: {
    extend: {
      fontFamily: {
        recoletaLt: ["recoleta-light", "sans-serif"],
        recoletaReg: ["recoleta-regular", "sans-serif"],
        recoletaMd: ["recoleta-medium", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
}
