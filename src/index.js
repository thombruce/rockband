
import { join } from 'path'

import tailwindConfig from './tailwind.config'

export default function () {
  const { nuxt } = this

  // Make sure components is enabled
  if (!nuxt.options.components) {
    throw new Error('please set `components: true` inside `nuxt.config` and ensure using `nuxt >= 2.13.0`')
  }

  this.nuxt.hook('build:before', () => {
    nuxt.options.buildModules.push('@nuxtjs/tailwindcss')
    nuxt.options.buildModules.push('@nuxtjs/color-mode')

    nuxt.options.colorMode = {
      classSuffix: ''
    }

    nuxt.options.tailwindcss = {
      config: tailwindConfig
    }
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
