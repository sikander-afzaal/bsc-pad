const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Segoe UI", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primaryYellow: "#f1b90c",
        dark: "#1a1a1a",
        textGray: "#c0c0c0",
      },
      backgroundImage: {
        yellowGr: "linear-gradient(to right, #f1b90c, #F0B90B)",
      },
      boxShadow: {
        header: "0px 1px 10px 0px rgb(0 0 0 / 50%)",
        hoverBtn: "1px 2px 15px #f1b90c",
        pancakeSwap: "1px 2px 15px #1FC7D4",
        ido: "1px 2px 15px #02bf02",
        mexc: "1px 2px 15px #4083b1",
        fiat: "1px 2px 15px white",
      },
    },
  },
  plugins: [],
};
