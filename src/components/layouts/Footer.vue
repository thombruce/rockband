<template lang='pug'>
footer.bg-neutral.text-neutral-content
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
  @apply mt-5 py-5;
  & .social {
    @apply text-3xl;
    & ul {
      @apply flex justify-center;
      & li a {
        @apply block px-4;
      }
    }    
  }
  & .copyright {
    @apply pt-4 text-center text-sm;
    & a {
      @apply link;
    }
  }
}
</style>
