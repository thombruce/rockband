# Nuxt TNT

## Features

TNT is a Nuxt component library that comes with:

- [Nuxt Image](https://image.nuxtjs.org/)
- [Pug](https://pugjs.org/api/getting-started.html)
- [Tailwind CSS](https://tailwindcss.com/) + [Tailwind CSS Forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [DaisyUI](https://daisyui.com/) + [Theme Change](https://github.com/saadeghi/theme-change)
- [PostCSS](https://postcss.org/)
- [Font Awesome](https://fontawesome.com/)
- [Simple Icons](https://simpleicons.org/)
- [Lodash](https://lodash.com/)
- [Nuxt Taxonomies](https://github.com/thombruce/nuxt-taxonomies)

These are used to create a base set of components and plugins for my Nuxt projects.

> **What does TNT stand for?**
> When I conceived of the name, it was just "Thom's Nuxt Template".
> As the project has evolved, I've moved away from calling it that.
> It's just TNT to me.

## Installation

Add TNT to your project:

```sh
yarn add --dev @unlabel/nuxt
```

Add TNT to buildModules in `nuxt.config.js`:

```js
buildModules: [
  '@unlabel/nuxt'
]
```

## Overwrite Default Styles

Create a CSS file at `assets/css/tnt.css` and import `@unlabel/vue`:

```css
@import "@unlabel/vue";

/* Declare your styles or local imports here. */
```

TNT comes with Tailwind CSS and PostCSS; you can count on both of them working for this file and its imports. And of course, you can just write plain old CSS.

You can also configure `tailwind.config.js` following their docs. Apart from the `tnt.css` file, it's just like any other Tailwind installation.