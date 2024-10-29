import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    listStyleType: {
      disc: "disc",
      decimal: "decimal",
    },
    extend: {
      colors: {
        main: "rgb(251 148 0)",
        background: "rgba(249,249,249,1)",
        "banner-red": "#DF5457",
        "banner-orange": "#FA864E",
        "banner-yellow": "#EEBD64",
        pastelorange: "rgb(245, 211, 147)",
        pastelgreen: "rgb(194, 242, 213)",
        pastelblue: "rgb(164, 238, 252)",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
