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
        hero: "url('/images/hero.jpg')",
        "footer-texture": "url('/images/footer-texture.png')",
        dream: "url('/images/dream.jpg')",
        design: "url('/images/design.jpg')",
        build: "url('/images/build2.jpg')",
        process: "url('/images/process.jpg')",
        reviews: "url('/images/reviews.jpg')",
        services: "url('/images/services.jpg')",
        contact: "url('/images/contact2.jpg')",
        sod: "url('/images/sod.jpg')",
        sprinkler: "url('/images/sprinklers.jpg')",
        fireplaces: "url('/images/fireplace.jpg')",
        wall: "url('/images/wall.jpg')",
        pavers: "url('/images/pavers.jpg')",
        trampoline: "url('/images/trampoline.jpg')",
      },
      backgroundColor: {
        "overlay-sm": "rgba(0, 0, 0, 0.3)",
        "overlay-md": "rgba(0, 0, 0, 0.4)",
        "overlay-lg": "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [require("daisyui")],
}
