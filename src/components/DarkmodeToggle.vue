<template lang="pug">
button(@click="toggleDarkMode()")
  template(v-if='$colorMode.value === `dark`')
    fa(:icon='faMoon')
    span.hidden.pl-1(class='md:inline') Dark
  template(v-else-if='$colorMode.preference === `light`')
    fa(:icon='faSun')
    span.hidden.pl-1(class='md:inline') Light
</template>

<script>
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
 
export default {
  computed: {
    faSun () {
       return faSun
    },
    faMoon () {
       return faMoon
    }
  },
  methods: {
    toggleDarkMode () {
      if (this.$colorMode.value === 'light') {
        this.$colorMode.preference = 'dark'
      } else {
        this.$colorMode.preference = 'light'
      }
    }
  }
}
</script>
