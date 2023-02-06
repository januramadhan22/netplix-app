/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "inner-lg": "inset 0 0 1000px 150px rgb(0 0 0 / 0);",
      },
    },
  },
  plugins: [],
};
