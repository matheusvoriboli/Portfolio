/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#111",
        "soft-dark": "#393E46",
        light: "#EEEEEE",
        "soft-light": "#B4B4B4",
        secondary: "#FFD369",
      },
    },
  },
  plugins: [],
}

