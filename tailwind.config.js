/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F3380",
        "heading-text": "#222222",
      },
      fontFamily: {
        "gilroy-black": ["Gilroy-Black", "sans-serif"],
        "gilroy-regular": ["Gilroy-Regular", "sans-serif"],
        "gilroy-medium": ["Gilroy-Medium", "sans-serif"],
        "gilroy-bold": ["Gilroy-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
