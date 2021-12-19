module.exports = {
  purge: [
    './**.html',
    './**.md'
  ],
  darkMode: false,
  theme: {
    extend: {
      maxWidth: {
        '1/2': '50%',
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
