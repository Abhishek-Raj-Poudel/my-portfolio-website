/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "darkest": "#121212",
        "darkest2":"#222222",
        "body":"#4C566A"
      },
      fontFamily: {
        primary: ["JetBrains Mono"]
      }
    },
  },
  plugins: [],
}
