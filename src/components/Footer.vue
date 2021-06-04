<template lang='pug'>
footer
  .social
    ul
      li(v-for='(item, i) in social' :key='i')
        a(:href='item.to' target='_blank')
          TntSimpleIcon(:icon='item.icon')
  .copyright &copy; {{ title }} - {{ new Date().getFullYear() }}
</template>

<script>
export default {
  data () {
    return {
      title: this.$nuxt.$options.head.title,
      social: [
        {
          icon: 'facebook',
          title: 'Facebook',
          to: 'https://facebook.com/thombruce'
        },
        {
          icon: 'twitter',
          title: 'Twitter',
          to: 'https://twitter.com/thombruce'
        },
        {
          icon: 'github',
          title: 'GitHub',
          to: 'https://github.com/thombruce'
        },
      ]
    }
  }
}
</script>

<style lang='postcss' scoped>
footer {
  @apply py-3;
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
    @apply text-center text-sm text-gray-400 dark:text-gray-500;
  }
}
</style>
