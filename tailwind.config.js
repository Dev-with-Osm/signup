/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      transitionDuration: {
        slow: "0.5s",
      },
      transitionTimingFunction: {
        ease: "ease",
      },
    },
  },
  plugins: [],
};
