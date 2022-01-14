module.exports = {
  purge: {
    content: ['./src/**/*.vue']
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ]
}
