<template lang='pug'>
#appContainer
  TntLayoutsHeader

  main.container.mx-auto.px-5
    .max-w-prose.mx-auto
      TntUIBreadcrumbs
      Nuxt

  TntLayoutsFooter
</template>

<script>
import { themeChange } from 'theme-change'

export default {
  mounted () {
    themeChange(false)
  }
}
</script>
