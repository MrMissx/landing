/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-light": "#F5F5F5",
        "primary-dark": "#212121"
      }
    }
  },
  plugins: []
}
