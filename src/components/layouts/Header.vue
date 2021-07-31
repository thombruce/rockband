<template lang='pug'>
header.navbar.bg-neutral.text-neutral-content.mb-2
  .navbar-start
    span.text-lg.font-bold
      NuxtLink(to='/') {{ title }}
  .navbar-end
    TntUIThemeToggle
</template>

<script>
export default {
  data () {
    return {
      title: this.$nuxt.$options.head.title
    }
  }
}
</script>
