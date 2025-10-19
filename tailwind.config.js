/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  plugins: [],
  theme: {
  extend: {
    keyframes: {
      fadeInDown: {
        "0%": { opacity: "0", transform: "translateY(-20px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      fadeInUp: {
        "0%": { opacity: "0", transform: "translateY(20px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      fadeIn: {
        "0%": { opacity: "0", transform: "scale(0.95)" },
        "100%": { opacity: "1", transform: "scale(1)" },
      },
    },
    animation: {
      fadeInDown: "fadeInDown 0.6s ease forwards",
      fadeInUp: "fadeInUp 0.6s ease forwards",
      fadeIn: "fadeIn 0.7s ease forwards",
    },
  },
},
}

