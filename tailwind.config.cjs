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
        "success-green": "#22c55e",
        "warning-amber": "#f59e0b",
        "error-red": "#dc2626",
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
        },
        red: {
          600: "#dc2626",
        },
        amber: {
          600: "#d97706",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Helvetica", "Arial", "sans-serif"],
        heading: ["Poppins", "system-ui", "sans-serif"],
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
