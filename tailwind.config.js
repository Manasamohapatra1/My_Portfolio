// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        lightBackground: "#ffffff",
        darkBackground:
          "linear-gradient(0deg, rgba(7,97,98,1) 0%, rgba(12,48,104,1) 100%)",
      },
    },
  },
  plugins: [],
};
