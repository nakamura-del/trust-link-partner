import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#238BCB",
          light: "#59C6FF",
          deep: "#1A6FA3",
        },
        secondary: "#59C6FF",
        ink: "#0F172A",
        subtle: "#5F5F5F",
        surface: "#F7FAFC",
        night: "#0B1220",
      },
      fontFamily: {
        sans: ["var(--font-noto)", "var(--font-inter-tight)", "sans-serif"],
        display: ["var(--font-inter-tight)", "var(--font-noto)", "sans-serif"],
      },
      letterSpacing: {
        tight2: "-0.01em",
        luxe: "0.03em",
        wide2: "0.08em",
        widest2: "0.18em",
      },
      maxWidth: {
        content: "1360px",
      },
      backgroundImage: {
        // 青はアクセント用に最小限のグラデーションのみ保持
        "blue-gradient": "linear-gradient(135deg, #238BCB 0%, #1A6FA3 100%)",
      },
      boxShadow: {
        // 影は極薄
        subtle: "0 1px 2px rgba(15,23,42,0.04)",
        card: "0 1px 3px rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.04)",
        lift: "0 2px 6px rgba(15,23,42,0.06), 0 18px 40px rgba(15,23,42,0.06)",
        btn: "0 2px 10px rgba(35,139,203,0.22)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
