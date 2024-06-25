/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        darkBg: "rgb(25, 32, 40)",
        darkGold: "rgb(198, 148,	57)",
        darkGold2: "rgb(139, 117,40)",
        lightGold: "rgb(255, 245, 210)",
      },
      minWidth: {
        2: "2rem",
      },
      minHeight: {
        4: "4rem",
        15: "15rem",
        18: "18rem",
      },
    },
  },
  plugins: [],
});
