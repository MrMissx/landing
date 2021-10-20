module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height : {
        '30v': '30vh',
        '35v': '35vh',
        '40v': '40vh'
      }
    },
  },
  variants: {
    animation: ['motion-safe'],
  },
  plugins: [],
}
