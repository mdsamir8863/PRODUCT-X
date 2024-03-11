/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        saffron: "#FF9933",
        "dark-blue": "#003873",
        "dark-saffron": "#CC6600",
      },
    },
  },
  plugins: [],
};
