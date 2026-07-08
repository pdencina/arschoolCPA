import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // AR School - Azul marino institucional (del logo)
        primary: {
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#627d98",
          600: "#486581",
          700: "#334e68",
          800: "#243b53",
          900: "#1a2a3a",
        },
        // Play & Group / Acento cálido - Naranja
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        // Verde sage (After School / secundario)
        sage: {
          50: "#f6f9f6",
          100: "#e8f0e8",
          200: "#d1e1d1",
          300: "#a8c5a8",
          400: "#7daa7d",
          500: "#5a8f5a",
          600: "#4a7a4a",
          700: "#3d633d",
          800: "#334f33",
          900: "#2a402a",
        },
        // Tonos arena/beige (valores, calidez)
        sand: {
          50: "#fdf8f0",
          100: "#f9edd9",
          200: "#f3dbb3",
          300: "#e8c48a",
          400: "#d4a56b",
          500: "#c08b52",
          600: "#a87242",
          700: "#8c5c38",
          800: "#704a2e",
          900: "#5a3c25",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
