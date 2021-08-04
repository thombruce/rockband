<template lang="pug">
.dropdown.dropdown-end(v-if='themes')
  .m-1.btn.btn-ghost(tabindex='0') Theme
  .overflow-y-auto.shadow.dropdown-content.h-96.w-52.rounded-box.bg-base-200.text-base-content
    ul.menu
      li(v-for="(theme, index) in themes")
        a(tabindex="0" :data-set-theme="theme" data-act-class="active") {{ theme | titleize }}
</template>

<script>
import { themeChange } from 'theme-change'

// Conditionally require tailwind.config if it exists.
let tailwindConfig
try { tailwindConfig = require('~/tailwind.config') }
catch(e) {}

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
  mounted () {
    themeChange(false)
  }
}
</script>
