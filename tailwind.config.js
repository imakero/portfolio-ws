/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./WS/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#404738",
        },
        secondary: {
          DEFAULT: "#F9EADC",
        },
        tertiary: {
          DEFAULT: "#FFE2C7",
        },
      },
      fontFamily: {
        sans: "Inter, sans-serif",
      },
      dropShadow: {
        standard: "0 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
