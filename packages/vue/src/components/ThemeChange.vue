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

export default {
  props: {
    themes: {
      type: Array,
      default: function () {
        return [
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
          'dracula'
        ]
      }
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
