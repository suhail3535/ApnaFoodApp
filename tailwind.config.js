/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Pacifico: ["Pacifico", "cursive"],
      
        PassionOne: ["Passion One", "sans-serif"],
      },
      spacing: {
        "underline-offset": "4px",
      },
    },
    plugins: [],
  },
};
