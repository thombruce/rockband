<template lang='pug'>
#appContainer
  TntLayoutsClassicHeader

  main.container.mx-auto.px-5
    .max-w-prose.mx-auto
      TntUIBreadcrumbs
      Nuxt

  TntLayoutsClassicFooter
</template>

<script>
import { themeChange } from 'theme-change'

export default {
  mounted () {
    themeChange(false)
  }
}
</script>
