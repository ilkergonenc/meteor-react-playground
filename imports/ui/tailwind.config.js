/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./imports/ui/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
