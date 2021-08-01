import { join, resolve } from 'path'

import fs from 'fs'

// const colors = require('tailwindcss/colors')

export default async function () {
  const { nuxt } = this

  // Make sure components is enabled
  if (!nuxt.options.components) {
    throw new Error('please set `components: true` inside `nuxt.config` and ensure using `nuxt >= 2.13.0`')
  }

  await this.addModule('@thombruce/nuxt-taxonomies')
  await this.addModule('@nuxt/image')

  nuxt.options.fontawesome = {
    ...{ component: 'fa', icons: { solid: [] } },
    ...nuxt.options.fontawesome
  }
  await this.addModule('@nuxtjs/fontawesome')

  nuxt.options.tailwindcss = {
    cssPath: fs.existsSync("assets/css/tnt.css") ? "~/assets/css/tnt.css" : join(__dirname, "assets/tnt.css"),
    config: {
      plugins: [
        require('daisyui'),
      ],
      purge: {
        options: {
          safelist: [
            /data-theme$/
          ]
        }
      }
    }
  }
  await this.addModule('@nuxtjs/tailwindcss')
  this.nuxt.hook('tailwindcss:config', function (tailwindConfig) {
    tailwindConfig.purge.content.push(`${join(__dirname, 'components')}/**/*.{vue,js}`)
    tailwindConfig.purge.content.push(`${join(__dirname, 'layouts')}/**/*.vue`)
    // tailwindConfig.purge.content.push(`${join(__dirname, 'pages')}/**/*.vue`) // NOTE: This should become usable with Nuxt 3.
    tailwindConfig.purge.content.push(`${join(__dirname, 'plugins')}/**/*.{js,ts}`)

    tailwindConfig.purge.content.push('content/**/*.md')
    tailwindConfig.plugins.push(require('@tailwindcss/forms'))
  })

  this.addPlugin({
    src: resolve(__dirname, 'plugins/filters.js')
  })

  this.nuxt.hook('modules:before', () => {
    //
  })

  this.nuxt.hook('build:before', () => {
    //
  })

  this.extendBuild(config => {
    //
  })

  this.nuxt.hook("components:dirs", (dirs) => {
    // Add ./components dir to the list
    dirs.push({
      path: join(__dirname, "components"),
      prefix: "tnt",
      level: 1
    })
  })

  // Currently broken - cannot load components.
  if (!fs.existsSync("layouts/default.vue")) { // If exists, overwrites...
    this.addLayout({
      name: 'default',
      src: join(__dirname, "layouts/default.vue")
    })
  }

  if (!fs.existsSync("layouts/error.vue")) { // If exists, overwrites...
    this.addLayout({
      name: 'error',
      src: join(__dirname, "layouts/error.vue")
    })
  }
}

// Used in conjunction with addModule(opts, requireOnce)
// to prevent a module being required more than once.
module.exports.meta = require('../package.json')
