import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F6F2",
        ink: "#1C1F26",
        "ink-muted": "#5B616E",
        primary: "#23395B",
        "primary-light": "#33517F",
        amber: "#E8A33D",
        green: "#2F9E6E",
        rust: "#C1453D",
        line: "#E3E0D6",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
