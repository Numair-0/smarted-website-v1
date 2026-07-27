import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Deterministic Ledger — deep indigo, the "ground truth" tone
        ledger: {
          50: "#EEF0FC",
          100: "#DCE0F9",
          400: "#5B62D8",
          600: "#3B3FB0",
          700: "#2C2E86",
          900: "#181A4A",
          950: "#0F1030",
        },
        // Execution Blue — the primary interactive/action tone
        execute: {
          400: "#4C8DFF",
          500: "#2F6FEF",
          600: "#1E56D6",
          700: "#173F9E",
        },
        // Semantic Cyan — the "intelligence" accent, used sparingly
        semantic: {
          300: "#8CE9F2",
          400: "#4FD3E0",
          500: "#22B8C9",
        },
        signal: {
          green: "#16A34A",
          amber: "#D97706",
          rose: "#E11D48",
          violet: "#7C3AED",
        },
        canvas: {
          DEFAULT: "#FFFFFF",
          tint: "#F7F8FC",
          line: "#E7E9F4",
        },
        ink: {
          900: "#0C0E1F",
          700: "#33364F",
          500: "#5C5F78",
          400: "#84869C",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        xl2: "0.5rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(12, 14, 31, 0.04), 0 8px 24px rgba(12, 14, 31, 0.06)",
        lifted: "0 4px 12px rgba(12, 14, 31, 0.06), 0 24px 48px rgba(24, 26, 74, 0.08)",
        glow: "0 0 0 1px rgba(47, 111, 239, 0.12), 0 18px 60px rgba(47, 111, 239, 0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "knot-draw": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" },
        },
        "scan-line": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "bar-rise": {
          "0%": { transform: "scaleY(0.24)", opacity: "0.55" },
          "100%": { transform: "scaleY(1)", opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 7s ease-in-out infinite",
        "scan-line": "scan-line 4.5s ease-in-out infinite",
        "bar-rise": "bar-rise 1.1s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
