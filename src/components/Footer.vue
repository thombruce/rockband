<template lang='pug'>
footer
  .copyright &copy; {{ title }} - {{ new Date().getFullYear() }}
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

<style lang='postcss' scoped>
footer {
  & .copyright {
    @apply text-center text-sm text-gray-400 dark:text-gray-500;
  }
}
</style>
