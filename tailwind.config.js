/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "g-gray1": "var(--g-gray1)",
      "g-primary": "var(--g-primary)"
    }
  },
  plugins: []
};
