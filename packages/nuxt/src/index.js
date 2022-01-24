import { join, resolve } from 'path'

import fs from 'fs'

const colors = require('tailwindcss/colors')

export default async function () {
  const { nuxt } = this

  // Make sure components is enabled
  if (!nuxt.options.components) {
    throw new Error('please set `components: true` inside `nuxt.config` and ensure using `nuxt >= 2.13.0`')
  }

  await this.addModule(['@nuxtjs/color-mode', { classSuffix: '' }])
  await this.addModule('@thombruce/nuxt-taxonomies')
  await this.addModule('@nuxt/image')

  nuxt.options.tailwindcss = {
    ...{
      cssPath: fs.existsSync("assets/css/tnt.css") ? "~/assets/css/tnt.css" : join(__dirname, "assets/tnt.css"),
      mode: 'jit',
      config: {
        darkMode: 'class',
        purge: {
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
            'node_modules/@rockband/**/*.vue',
          ]
        },
        plugins: [
          require('@tailwindcss/typography'),
          require('@tailwindcss/forms'),
        ],
        // TODO: Stolen from a future version of Tailwind Typography - won't be needed after 3.0 upgrade
        theme: {
          typography: {
            // Invert (for dark mode)
            invert: {
              css: {
                '--tw-prose-body': 'var(--tw-prose-invert-body)',
                '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
                '--tw-prose-lead': 'var(--tw-prose-invert-lead)',
                '--tw-prose-links': 'var(--tw-prose-invert-links)',
                '--tw-prose-bold': 'var(--tw-prose-invert-bold)',
                '--tw-prose-counters': 'var(--tw-prose-invert-counters)',
                '--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
                '--tw-prose-hr': 'var(--tw-prose-invert-hr)',
                '--tw-prose-quotes': 'var(--tw-prose-invert-quotes)',
                '--tw-prose-quote-borders': 'var(--tw-prose-invert-quote-borders)',
                '--tw-prose-captions': 'var(--tw-prose-invert-captions)',
                '--tw-prose-code': 'var(--tw-prose-invert-code)',
                '--tw-prose-pre-code': 'var(--tw-prose-invert-pre-code)',
                '--tw-prose-pre-bg': 'var(--tw-prose-invert-pre-bg)',
                '--tw-prose-th-borders': 'var(--tw-prose-invert-th-borders)',
                '--tw-prose-td-borders': 'var(--tw-prose-invert-td-borders)',
              },
            },

            // Gray color themes

            gray: {
              css: {
                '--tw-prose-invert-body': colors.gray[300],
                '--tw-prose-invert-headings': colors.white,
                '--tw-prose-invert-lead': colors.gray[400],
                '--tw-prose-invert-links': colors.white,
                '--tw-prose-invert-bold': colors.white,
                '--tw-prose-invert-counters': colors.gray[400],
                '--tw-prose-invert-bullets': colors.gray[600],
                '--tw-prose-invert-hr': colors.gray[700],
                '--tw-prose-invert-quotes': colors.gray[100],
                '--tw-prose-invert-quote-borders': colors.gray[700],
                '--tw-prose-invert-captions': colors.gray[400],
                '--tw-prose-invert-code': colors.white,
                '--tw-prose-invert-pre-code': colors.gray[300],
                '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
                '--tw-prose-invert-th-borders': colors.gray[600],
                '--tw-prose-invert-td-borders': colors.gray[700],
              },
            },
          }
        }
        // END
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
}

// Used in conjunction with addModule(opts, requireOnce)
// to prevent a module being required more than once.
module.exports.meta = require('../package.json')
