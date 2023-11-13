/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "d-text": "#ebf4f4",
        "d-background": "#091010",
        "d-primary": "#0a838a",
        "d-secondary": "#142324",
        "d-accent": "#5ea3a6",
        text: "#0b1414",
        background: "#eff6f6",
        primary: "#29dae7",
        secondary: "#dbeaeb",
        accent: "#599ea1",
        highlight: "#0a838a",
        "highlight-muted": "#5ea3a6",
        "highlight-dark": "#11b6bb",
      },
    },
  },
  plugins: [],
};
