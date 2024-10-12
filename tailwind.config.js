/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        estedad: ["Estedad"],
      },

      keyframes: {
        "loading-animate": {
          from: { opacity: 0 },
          to: { opacity: 100 },
        },
      },
      animation: {
        "loading-animate": "loading-animate 0.6s ease infinite alternate",
      },
    },
  },
  plugins: [],
};
