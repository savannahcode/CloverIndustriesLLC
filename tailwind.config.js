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
      backgroundImage: {
        "home-hero-bg": "url('/images/home-hero-bg.png')",
        "footer-texture": "url('/images/footer-texture.png')",
      },
      backgroundColor: {
        overlay: "rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [require("daisyui")],
}
