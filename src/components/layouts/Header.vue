<template lang='pug'>
header
  div
    span
      NuxtLink(to='/') {{ title }}
  div
    TntUIDarkmodeToggle
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
header {
  @apply flex justify-between mb-5 px-4 py-5 bg-primary-500 dark:bg-gray-800 text-white;
  & > span:first-of-type {
    @apply block font-bold pr-3 md:pr-4;
  }
  & > nav {
    & ul {
      @apply flex;
      & li a {
        @apply block px-3 md:px-4;
      }
    }
  }
  & > button, & > a, & > span:not(:first-of-type) {
    @apply block px-4;
  }
}
</style>