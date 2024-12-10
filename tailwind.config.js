/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(187 128 88)",
        background: {
          light: "#EAE0D5",
          dark: "#0A0908",
        },
        surface: {
          light: "#C6AC8F",
          dark: "#22333B",
        },
        border: {
          light: "#5E503F",
          dark: "#EAE0D5",
        },
      },
      fontFamily: {
        sans: ["var(--font-sfpro)"],
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        verySmall: "0.5rem",
        3: "3rem",
        2: "2rem",
        1: "1rem",
      }
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};