/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#29335c",
        mainColorLight: "#576bbd",
        secondaryColor: "#DB2B39",
        textColor: "#eeee",
      },
    },
  },
  plugins: [],
}