module.exports = {
  purge: {
    content: [
      'content/**/*.md'
    ]
  },
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
