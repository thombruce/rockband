module.exports = {
  purge: {
    content: [
      'components/**/*.{vue,js}',
      'layouts/**/*.vue',
      'plugins/**/*.{js,ts}',
      'content/**/*.md',
      '../**/*.vue',
      'node_modules/@unlabel/**/*.md',
    ]
  }
}
