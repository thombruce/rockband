---
title: Features
order: 1
date: 2021-08-12T19:34:09Z
---

## Current Features

RockBand is a Nuxt component library that comes with:

- [Nuxt Image](https://image.nuxtjs.org/)
- [Pug](https://pugjs.org/api/getting-started.html)
- [Tailwind CSS](https://tailwindcss.com/) + [Tailwind CSS Forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [PostCSS](https://postcss.org/)
- [Font Awesome](https://fontawesome.com/)
- [Simple Icons](https://simpleicons.org/)
- [Lodash](https://lodash.com/)
- [Nuxt Taxonomies](https://github.com/thombruce/nuxt-taxonomies)

## Working On It

### Overwriteable Menus

At present, RockBand provides an automatic custom menu. The way in which to overwrite it, though, is to completely overwrite the component. I'd like to provide a menu customization option.

This is also true of...

- The footer; currently I override this to provide a list of social links and a custom copyright notice, each of which might be better served in config
- The (classic) header; if I want to customise my header title at all (custom size, font, image, etc.) I currently override a deeply nested component

Where it makes sense, some of these values could be moved into `rockband.config.js`, a file I use elsewhere but that RockBand isn't yet aware of the existence of. And where it doesn't make sense, or as a workaround in the meantime, there could perhaps be components that are _meant_ to be overwritten. These should not be deeply nested, and they may borrow structural logic from Vue Chartjs which uses extendible components (I extend one of these in another project here: https://github.com/thombruce/vue-playfair/blob/main/src/components/BarChart.vue)

## Planned Features

Nuxt 3 promises to make Nuxt even more powerful. In particular, RockBand is looking forwards to integrating the [pluggable child apps API](https://github.com/nuxt/rfcs/issues/30) which could make RockBand a drop-in and go solution - no need to add a few pages to your Nuxt app anymore, RockBand would provide! A partial solution for this is offered by the Nuxt 2 plugin, [nuxt-extend](https://github.com/nuxt-community/nuxt-extend); the plugin does not support automatic integration of `pages/` or `store/` directories.

Nuxt 3 also promises to include a `<Portal>` component: https://github.com/nuxt/nuxt.js/issues/190#issuecomment-734239175 This would enable the layout templates to expose "portals" into which deeply nested page or component templates could inject dynamic content. An existing solution for Vue 2 is the [PortalVue](https://github.com/LinusBorg/portal-vue) plugin.