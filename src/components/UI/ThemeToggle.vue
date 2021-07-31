<template lang="pug">
.dropdown.dropdown-end
  .m-1.btn.btn-ghost(tabindex='0') Theme
  ul.shadow.menu.dropdown-content.bg-base-200.text-base-content.rounded-box.w-52
    li(v-for="(theme, index) in themes")
      a(tabindex="0" :data-set-theme="theme.id" data-act-class="active") {{ theme.name }}
</template>

<script>
import { themeChange } from 'theme-change'

export default {
  data () {
    return {
      themes: [
        { id: "light", name: "🌝  light" },
        { id: "dark", name: "🌚  dark" },
        { id: "cupcake", name: "🧁  cupcake" },
        { id: "bumblebee", name: "🐝  bumblebee" },
        { id: "emerald", name: "✳️  Emerald" },
        { id: "corporate", name: "🏢  Corporate" },
        { id: "synthwave", name: "🌃  synthwave" },
        { id: "retro", name: "👴  retro" },
        { id: "cyberpunk", name: "🤖  cyberpunk" },
        { id: "valentine", name: "🌸  valentine" },
        { id: "halloween", name: "🎃  halloween" },
        { id: "garden", name: "🌷  garden" },
        { id: "forest", name: "🌲  forest" },
        { id: "aqua", name: "🐟  aqua" },
        { id: "lofi", name: "👓  lofi" },
        { id: "pastel", name: "🖍  pastel" },
        { id: "fantasy", name: "🧚‍♀️  fantasy" },
        { id: "wireframe", name: "📝  Wireframe" },
        { id: "black", name: "🏴  black" },
        { id: "luxury", name: "💎  luxury" },
        { id: "dracula", name: "🧛‍♂️  dracula" },
      ],
    }
  },
  mounted () {
    themeChange(false)
  }
}
</script>
