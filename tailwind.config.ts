import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-mode="dark"]'],

  theme: {
    extend: {
      colors: {
        primary: "#D4B139",
        secondary: "#C9A62A",

        text: {
          "100": "#FFEBBB",
          "200": "#141414",
          "300": "#070707",
          "400": "#C4C3C3",
          "500": "#534D3D",
          "600": "#473100",
          "700": "#46484F",
          "800": "#A4A4A4",
        },
        bg: {
          "100": "#FFEBBB",
          "200": "#886400",
          "300": "#46484F",
          "400": "#F2F1EE",
          "500": "#D4B13933",
          "600": "#F9F9F9",
          "700": "#F9F9F9F2",
          "800": "#F2F1EE",
          "900": "#797B86",
          "1000": "#000000F2",
          "1100": "#141414",
          "1200": "#FFEBBB33",
          "1300": "#C4C3C3",
        },
        border: {
          "100": "#C4C3C3",
        },
      },

      screens: {
        "3xs": "320px",
        "2xs": "480px",
        xs: "576px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1440px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
} satisfies Config;
