<template lang='pug'>
.copyright
  | &copy;
  |
  span {{ title }}
  |
  | 2021 - {{ new Date().getFullYear() }}
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
.copyright {
  @apply pt-4 text-center text-sm;
  & a {
    @apply link;
  }
}
</style>
