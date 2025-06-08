/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#043873",
        "accent-yellow": "#FFE492",
        "accent-blue": "#4F9CF9",
        "accent-light": "#C4DEFD",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        heading: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Fira Code", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      animation: {
        "pulse-soft": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      scale: {
        102: "1.02",
      },
    },
  },
  plugins: [],
};
