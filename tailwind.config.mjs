/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "d-text": "#e5e3ed",
        "d-background": "#0b0a0f",
        "d-primary": "#585077",
        "d-secondary": "#201d2b",
        "d-accent": "#7c72a1",
        text: "#14121c",
        background: "#f1f0f5",
        primary: "#9088af",
        secondary: "#d7d5e2",
        accent: "#685e8d",
        highlight: "#b684fc",
        "highlight-muted": "rgb(136, 58, 234)",
        "highlight-dark": "#8128d9",
      },
    },
  },
  plugins: [],
};
