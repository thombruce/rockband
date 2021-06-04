<template lang='pug'>
header.justify-center
  span
    NuxtLink(to='/') {{ title }}
  TntDarkmodeToggle
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
  @apply flex py-5 px-4;
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