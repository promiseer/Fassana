// tailwind.config.js
const { colors } = require("./styles/variable");

module.exports = {
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {colors},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
