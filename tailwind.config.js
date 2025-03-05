// const withMT = require("@material-tailwind/react/utils/withMT");
import { mtConfig } from "@material-tailwind/react";
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        xxl: "1320px",
      },
    },
    fontFamily: {
      sans: "Cairo, sans-serif",
    },
  },
  plugins: [mtConfig],
  darkMode: "class",
};
