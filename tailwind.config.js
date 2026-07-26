/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        pharma: {
          blue: "#0A84FF",
          white: "#FFFFFF",
          gray: "#F5F5F7",
          black: "#1D1D1F",
        },
      },
      fontFamily: {
        display: ["SF Pro Display", "Inter", "sans-serif"],
        body: ["Inter", "Poppins", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(29, 29, 31, 0.06)",
        softer: "0 2px 12px rgba(29, 29, 31, 0.04)",
      },
      backdropBlur: {
        glass: "20px",
      },
    },
  },
  plugins: [],
};
