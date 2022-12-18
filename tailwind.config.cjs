/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1E1B18",
        white: "#FFFFFB"
      },
      fontFamily: {
        body: ["DM Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}