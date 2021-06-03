
import { join } from 'path'

export default async function () {
  const { nuxt } = this

  // Make sure components is enabled
  if (!nuxt.options.components) {
    throw new Error('please set `components: true` inside `nuxt.config` and ensure using `nuxt >= 2.13.0`')
  }

  nuxt.options.colorMode = {
    ...{ classSuffix: '' },
    ...nuxt.options.colorMode
  }
  await this.addModule('@nuxtjs/color-mode')

  nuxt.options.fontawesome = {
    ...{ component: 'fa', icons: { solid: [] } },
    ...nuxt.options.fontawesome
  }
  await this.addModule('@nuxtjs/fontawesome')

  // TODO: This might help...
  // this.addModule('@nuxtjs/tailwindcss')

  this.nuxt.hook('tailwindcss:config', function (tailwindConfig) {
    tailwindConfig.purge.content.push('content/**/*.md')
    tailwindConfig.darkMode = 'class'
    tailwindConfig.plugins.push(require('@tailwindcss/forms'))
  })
  // NOTE: Each of these then also has additional config on top.
  //       We should try working these out one at a time, say...
  //       fontawesome, then color-mode, then tailwind (the hard one).
  //       And we still need to work out how to pass options to these...
  //
  //       The docs suggest that the modules:before hook is...
  //       "useful to overload methods and options."
  //       So start there maybe.
  //
  // DOCS: https://nuxtjs.org/docs/2.x/internals-glossary/internals-module-container

  this.nuxt.hook('modules:before', () => {
    console.log('modules here!!!')
  })

  this.nuxt.hook('build:before', () => {
    console.log('build here!!!')
  })

  this.nuxt.hook("components:dirs", (dirs) => {
    // Add ./components dir to the list
    dirs.push({
      path: join(__dirname, "../src/components"),
      prefix: "tnt",
      level: 1
    })
  })
}
