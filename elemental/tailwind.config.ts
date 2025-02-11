import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        lightBg: "var(--light-background)",
        darkBg: "var(--dark-background)",

        lightSecondaryBg: "var(--light-secondary-background)",
        darkSecondaryBg: "var(--dark-secondary-background)",

        lightTextContrast: "var(--light-text-contrast)",
        darkTextContrast: "var(--dark-text-contrast)",
        grayText: "var(--gray-text)",
      },
      boxShadow: {
        lightCard: `0px 4px 12px -3px rgba(255, 255, 255, 0.3), 0px 2px 6px rgba(255, 255, 255, 0.3);`,
        darkCard: `0px 4px 12px -3px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.02);`,
      },
    },
  },
  plugins: [],
} satisfies Config;
