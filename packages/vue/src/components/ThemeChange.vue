<template lang="pug">
.dropdown.dropdown-end(v-if='themes')
  .btn.btn-ghost(tabindex='0')
    fa(:icon='faSwatchbook')
    | Theme
  .overflow-y-auto.shadow.dropdown-content.h-96.w-52.rounded-box.bg-base-200.text-base-content
    ul.menu
      li(v-for="(theme, index) in themes")
        a(tabindex="0" :data-set-theme="theme" data-act-class="active") {{ theme | titleize }}
</template>

<script>
import { themeChange } from 'theme-change'

import { faSwatchbook } from '@fortawesome/free-solid-svg-icons'

// Conditionally require tailwind.config if it exists.
let tailwindConfig
try { tailwindConfig = require('~/tailwind.config') }
catch(e) { /* continue */ }

const defaultThemes = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
]

const themes = (tailwindConfig && tailwindConfig.daisyui && tailwindConfig.daisyui.themes)
  ?
    (Array.isArray(tailwindConfig.daisyui.themes) ? tailwindConfig.daisyui.themes : defaultThemes)
  :
    defaultThemes // TODO: Differentiate between false and undefined. Undefined should show defaultThemes, false should not.

const themeKeys = themes.map(theme => typeof theme === 'object' ? Object.keys(theme).pop() : theme)

export default {
  data () {
    return {
      themes: themeKeys,
    }
  },
  computed: {
    faSwatchbook () {
       return faSwatchbook
    }
  },
  mounted () {
    themeChange(false)
  }
}
</script>
