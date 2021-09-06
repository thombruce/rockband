module.exports = {
  purge: {
    content: ['./src/**/*.vue']
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui')
  ]
}
