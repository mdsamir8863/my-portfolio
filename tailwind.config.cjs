// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      oswald: "Oswald, sans-serif",
    },
    extend: {
      transitionDuration: {
        2500: "2500ms",
      },
    },
  },
  plugins: [],
};
