import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#f5efe6",
        ink: "#111b25",
        steel: {
          50: "#f3f6f8",
          100: "#e5ebef",
          200: "#c8d4dd",
          300: "#9fb2c0",
          400: "#71889b",
          500: "#52697d",
          600: "#3c5062",
          700: "#2c3d4c",
          800: "#1c2b38",
          900: "#111b25"
        },
        copper: {
          50: "#fff4eb",
          100: "#ffe5cf",
          200: "#ffc998",
          300: "#f3a25a",
          400: "#d98434",
          500: "#bc6921",
          600: "#975219",
          700: "#744015",
          800: "#4f2b10",
          900: "#2f1808"
        },
        pine: {
          50: "#eefaf7",
          100: "#d8f3ea",
          200: "#afe2d3",
          300: "#73c3b0",
          400: "#3f9f8a",
          500: "#25796a",
          600: "#1d5c52",
          700: "#184840",
          800: "#12332d",
          900: "#0b201d"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(17, 27, 37, 0.12)",
        lift: "0 24px 80px rgba(17, 27, 37, 0.18)"
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 24px, 0)"
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)"
          }
        },
        "soft-pulse": {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 18px 40px rgba(37, 121, 106, 0.14)"
          },
          "50%": {
            transform: "scale(1.04)",
            boxShadow: "0 22px 52px rgba(37, 121, 106, 0.24)"
          }
        },
        "float-soft": {
          "0%, 100%": {
            transform: "translateY(0px)"
          },
          "50%": {
            transform: "translateY(-8px)"
          }
        }
      },
      animation: {
        "fade-up": "fade-up 800ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "soft-pulse": "soft-pulse 2.8s ease-in-out infinite",
        "float-soft": "float-soft 7s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;

