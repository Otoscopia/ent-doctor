import type { Config } from "tailwindcss";

const themeColor = require("./utils/colors.ts");

const config: Config = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: themeColor,
    },
  },
  plugins: [],
};
export default config;
