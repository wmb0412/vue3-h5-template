/** @type {import('tailwindcss').Config} */

const spacing = Array.from({ length: 1000 }).reduce((_map, _, index) => {
  _map[index] = `${index}px`;
  return _map;
}, {});
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    spacing,
    colors: {
      "g-gray1": "var(--g-gray1)",
      "g-primary": "var(--g-primary)",
      "g-background-2": "var(--g-background-2)"
    }
  },
  plugins: []
};
