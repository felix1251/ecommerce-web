import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#23A6F0",
        secondary: "#23856D",
        "secondary-light": "#2DC071",
      },
      maxWidth: {
        primary: "1380px",
        secondary: "1280px",
        tertiary: "1180px",
      },
      backgroundImage: {
        "better-experence": "url(/better-experence-bg.png)",
      },
      screens: {
        "lg-2": "1064px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
