import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#fdc11f",
          hover: "#e1ac1b",
        },
      },
      animation: {
        "loop-scroll": "loop-scroll 100s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(-100%) " },
          to: { transform: "translateX(0) " },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
