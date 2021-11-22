<template lang='pug'>
  ThemeChange(:themes='themes')
</template>

<script>
import ThemeChange from '@unlabel/vue/src/components/ThemeChange.vue'

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
  components: {
    ThemeChange
  },
  data () {
    return {
      themes: themeKeys,
    }
  }
}
</script>
