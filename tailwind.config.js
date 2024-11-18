/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px"
        }
      },
      colors: {
        "primary-light": "#F5F5F5",
        "primary-dark": "#212121"
      }
    }
  },
  plugins: []
}
