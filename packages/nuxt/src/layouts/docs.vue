<template lang='pug'>
#appContainer.drawer.drawer-mobile
  input#main-menu.drawer-toggle(type='checkbox' v-model="showMainMenu")

  TntLayoutsDocsMain

  TntLayoutsDocsSidebar(v-on:close-menu='showMainMenu = false')
</template>

<script>
import { themeChange } from 'theme-change'

export default {
  data () {
    return {
      showMainMenu: false
    }
  },
  mounted () {
    themeChange(false)
  }
}
</script>
