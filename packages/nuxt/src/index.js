import { dirname, join, resolve } from 'path'

import fs from 'fs'

import highlightjs from 'highlight.js'

export default async function () {
  const { nuxt } = this

  // Make sure components is enabled
  if (!nuxt.options.components) {
    throw new Error('please set `components: true` inside `nuxt.config` and ensure using `nuxt >= 2.13.0`')
  }

  await this.addModule(['@nuxt/content', {
    markdown: {
      highlighter(rawCode, lang) {
        const highlightedCode = highlightjs.highlight(rawCode, { language: lang }).value

        // We need to create a wrapper, because
        // the returned code from highlight.js
        // is only the highlighted code.
        return `<pre><code class="hljs ${lang}">${highlightedCode}</code></pre>`
      }
    }
  }])
  // https://go.nuxtjs.dev/axios
  await this.addModule(['@nuxtjs/axios', {}])
  // https://go.nuxtjs.dev/pwa
  await this.addModule(['@nuxtjs/pwa', { manifest: { lang: 'en' } }])
  // await this.addModule(['@nuxtjs/color-mode', { classSuffix: '' }])
  await this.addModule('@thombruce/nuxt-taxonomies')
  await this.addModule('@nuxt/image')

  nuxt.options.tailwindcss = {
    ...{
      cssPath: fs.existsSync("assets/css/rockband.css") ? "~/assets/css/rockband.css" : join(__dirname, "assets/rockband.css"),
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
      }
    },
    ...nuxt.options.tailwindcss
  }
  await this.addModule('@nuxtjs/tailwindcss')

  const rockbandConfig = fs.existsSync('rockband.config.js') ? nuxt.resolver.requireModule(nuxt.resolver.resolveAlias('rockband.config.js')) : {}
  nuxt.options.head = {
    ...nuxt.options.head,
    ...(rockbandConfig.title ? { title: rockbandConfig.title } : {}),
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugins/rockband.js')
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
    dirs.push.apply(dirs, [
      {
        path: join(__dirname, "components"),
        prefix: "RockBand",
        level: 1
      },
      {
        path: dirname(require.resolve("@rockband/vue/src/components/index.js")),
        prefix: "RockBand",
        level: 2
      }
    ])
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
