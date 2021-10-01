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

  nuxt.options.tailwindcss = {
    ...{
      cssPath: fs.existsSync("assets/css/tnt.css") ? "~/assets/css/tnt.css" : join(__dirname, "assets/tnt.css"),
      mode: 'jit',
      config: {
        purge: {
          options: {
            safelist: [
              /data-theme$/,
            ]
          },
          content: [
            `${join(__dirname, 'components')}/**/*.{vue,js}`,
            'components/**/*.{vue,js}',
            `${join(__dirname, 'layouts')}/**/*.vue`,
            'layouts/**/*.vue',
            // `${join(__dirname, 'pages')}/**/*.vue`, // NOTE: This should become usable with Nuxt 3.
            `${join(__dirname, 'plugins')}/**/*.{js,ts}`,
            'plugins/**/*.{js,ts}',
            'content/**/*.md',
            `${join(__dirname, '..', '..')}/**/*.vue`,
            '../**/*.vue',
            'node_modules/@thombruce/**/*.vue',
          ]
        },
        plugins: [
          require('@tailwindcss/forms'),
          require('daisyui'),
        ]
      }
    },
    ...nuxt.options.tailwindcss
  }
  await this.addModule('@nuxtjs/tailwindcss')

  this.addPlugin({
    src: resolve(__dirname, 'plugins/tnt.js')
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

  if (!fs.existsSync("layouts/docs.vue")) { // If exists, overwrites...
    this.addLayout({
      name: 'docs',
      src: join(__dirname, "layouts/docs.vue")
    })
  }
}

// Used in conjunction with addModule(opts, requireOnce)
// to prevent a module being required more than once.
module.exports.meta = require('../package.json')
