/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      blue: "var(--blue)",
      "chun-li-blue100": "var(--chun-li-blue100)",
      "main-void400": "var(--main-void400)",
      "main-void600": "var(--main-void600)",
      "secondary-blueberry-patch600": "var(--secondary-blueberry-patch600)",
      "tertiary-blue-hydrangea300": "var(--tertiary-blue-hydrangea300)",
      "tertiary-blue-hydrangea600": "var(--tertiary-blue-hydrangea600)",
      white: "var(--white)",
    },},
  },
  plugins: [],
}
