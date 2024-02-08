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
        secondary: "1180px",
        tertiary: "1000px",
      },
    },
  },
  plugins: [],
};

export default config;
