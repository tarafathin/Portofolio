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
        // Dark green palette — diambil dari referensi gambar
        forest: {
          950: "#0D160D",
          900: "#111E11",
          800: "#1A2B1A",
          700: "#243324",
          600: "#2E3D2E",
          500: "#3A4D3A",
        },
        // Accent orange — warna highlight utama
        amber: {
          400: "#F5C842",
          500: "#E8A020",
          600: "#D48A10",
        },
        // Cream / warm white
        cream: {
          50:  "#FEFCF7",
          100: "#F8F2E4",
          200: "#F0E6CC",
          300: "#E4D4AA",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
