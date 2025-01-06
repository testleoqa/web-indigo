/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        celeste: "#ADD8E6",
        azul: "rgb(84, 125, 207)",
      },
    },
  },
  plugins: [],
};
