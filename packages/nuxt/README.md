# RockBand Nuxt

## Features

RockBand is a Nuxt component library that comes with:

- [Nuxt Image](https://image.nuxtjs.org/)
- [Pug](https://pugjs.org/api/getting-started.html)
- [Tailwind CSS](https://tailwindcss.com/) + [Tailwind CSS Forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [PostCSS](https://postcss.org/)
- [Font Awesome](https://fontawesome.com/)
- [Simple Icons](https://simpleicons.org/)
- [Lodash](https://lodash.com/)
- [Nuxt Taxonomies](https://github.com/thombruce/nuxt-taxonomies)

These are used to create a base set of components and plugins for my Nuxt projects.RockBand

## Installation

Add RockBand to your project:

```sh
yarn add --dev @rockband/nuxt
```

Add RockBand to buildModules in `nuxt.config.js`:

```js
buildModules: [
  '@rockband/nuxt'
]
```

## Overwrite Default Styles

Create a CSS file at `assets/css/rockband.css` and import `@rockband/vue`:

```css
@import "@rockband/vue";

/* Declare your styles or local imports here. */
```

RockBand comes with Tailwind CSS and PostCSS; you can count on both of them working for this file and its imports. And of course, you can just write plain old CSS.

You can also configure `tailwind.config.js` following their docs. Apart from the `rockband.css` file, it's just like any other Tailwind installation.