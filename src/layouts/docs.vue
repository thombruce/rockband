<template lang='pug'>
#appContainer.drawer.drawer-mobile
  input#main-menu.drawer-toggle(type='checkbox')

  TntLayoutsDocsMain

  TntLayoutsDocsSidebar
</template>

<script>
import { themeChange } from 'theme-change'

export default {
  mounted () {
    themeChange(false)
  }
}
</script>
