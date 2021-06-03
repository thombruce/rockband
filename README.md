## Installation

Add TNT's peer dependencies then add TNT:

```sh
yarn add @nuxtjs/color-mode @nuxtjs/tailwindcss @tailwindcss/forms postcss @nuxtjs/fontawesome @fortawesome/free-solid-svg-icons --dev
yarn add https://github.com/thombruce/tnt --dev
```

Add Tailwind, Color Mode and TNT to buildModules:

```js
buildModules: [
  '@nuxtjs/tailwindcss',
  '@nuxtjs/color-mode',
  '@nuxtjs/fontawesome',
  '@thombruce/tnt'
],
// ...
colorMode: {
  classSuffix: ''
},
// ...
fontawesome: {
  component: 'fa',
  icons: {
    // regular: true,
    solid: [],
    // brands: true,
  }
},
```

Create a `tailwind.config.js` file in the root of your project. Here's an example (the important parts are `darkMode` and `plugins`):

```js
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
```

## Todo

So, I know that's a lot of setup and a lot of peer dependencies that need additional configuration. I want to chip away at these dependencies until there's only the inclusion of TNT required. The problem? Tailwind, mainly. I got most of the way there, no errors but... no Tailwind, either. I'll revisit this issue in the future.
