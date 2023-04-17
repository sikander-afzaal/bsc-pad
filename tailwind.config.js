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
        title: "linear-gradient(180deg, #1a1a1a 0%, #eef3fc 100%)",
      },
      boxShadow: {
        header: "0px 1px 10px 0px rgb(0 0 0 / 50%)",
        hoverBtn: "1px 2px 15px #f1b90c",
        pancakeSwap: "1px 2px 15px #1FC7D4",
        ido: "1px 2px 15px #02bf02",
        mexc: "1px 2px 15px #4083b1",
        fiat: "1px 2px 15px white",
        round: "0 10px 30px 0 rgba(5, 16, 44, .15)",
      },
      keyframes: {
        spinAnti: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        spinClock: "spin 15s linear infinite 0s",
        spinAntiClock: "spinAnti 10s linear infinite 0s",
      },
    },
  },
  plugins: [],
};
