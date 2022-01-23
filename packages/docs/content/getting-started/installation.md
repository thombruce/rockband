---
title: Installation
date: 2021-07-31T19:34:09Z
---

## Installation

### Vue

```sh
yarn add --dev @rockband/vue
```

### Vue CLI

Add RockBand to your project and run the initializer:

```sh
vue add @rockband/vue
```

### Nuxt

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

## Setup

RockBand comes with a default layout, but you'll still need to create your own pages in Nuxt. A good place to look at how this is done is the pages directory on this very project: https://github.com/thombruce/rockband/ You can copy these to your own project, modifying their names and contents as necessary - for example by changing any instance of 'docs' to 'blog'.

## Overwrite Default Styles

Create a CSS file at `assets/css/tnt.css` and import `@rockband/vue`:

```css
@import "@rockband/vue";

/* Declare your styles or local imports here. */
```

RockBand comes with Tailwind CSS and PostCSS; you can count on both of them working for this file and its imports. And of course, you can just write plain old CSS.

You can also configure `tailwind.config.js` following their docs. Apart from the `tnt.css` file, it's just like any other Tailwind installation.