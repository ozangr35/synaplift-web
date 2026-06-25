import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: {
          DEFAULT: "#0A0A0A",
          50: "#121214",
          100: "#1A1A1E",
          200: "#2A2A2E",
          300: "#3A3A3E",
        },
        neon: {
          blue: "#00CCFF",
          green: "#39FF14",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 40px -8px rgba(0, 204, 255, 0.35)",
        "neon-green": "0 0 40px -8px rgba(57, 255, 20, 0.3)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.45)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
  plugins: [],
};

export default config;
