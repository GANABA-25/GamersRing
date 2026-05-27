/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        12: "95%",
      },
      colors: {
        whiteGray: "#ffffff1a",
      },
      fontFamily: {
        payback: ["payback", "sans"],
        nostrum: ["nostrum", "sans"],
      },
    },
  },
  plugins: [],
};
