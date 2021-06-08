<template lang='pug'>
header
  span.py-24
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
  @apply flex flex-col justify-center py-5 px-4;
  & > span:first-of-type {
    @apply block w-min m-auto text-7xl sm:text-9xl text-black dark:text-light font-poster text-chromatic-aberration;
  }
  & > div {
    @apply flex justify-center;
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
}
</style>