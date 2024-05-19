/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        green: {
          primary: "#0CAF60",
        },
      },
    },
  },
  plugins: [],
}
