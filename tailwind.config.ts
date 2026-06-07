import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#060914",
        panel: "rgba(13, 18, 33, 0.74)",
        line: "rgba(255, 255, 255, 0.11)",
        brand: {
          cyan: "#42d6ff",
          violet: "#8f7cff",
          mint: "#58f2b5",
          rose: "#ff6f91"
        }
      },
      boxShadow: {
        glow: "0 0 60px rgba(66, 214, 255, 0.20)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.35)"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"]
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(18px, -22px, 0) scale(1.04)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-900px 0" },
          "100%": { backgroundPosition: "900px 0" }
        }
      },
      animation: {
        drift: "drift 10s ease-in-out infinite",
        shimmer: "shimmer 1.8s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
