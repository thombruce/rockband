<template lang='pug'>
  span.simple-icon(v-html='svg')
</template>

<script>
export default {
  props: ['icon'],
  data () {
    return {
      svg: null
    }
  },
  created () { // or mounted ()
    this.svg = require(`simple-icons/icons/${this.icon}`).svg
  }
}
</script>

<style lang='postcss'>
.simple-icon {
  & svg {
    display: inline-block; /* Main */
    font-size: inherit; /* Main */
    height: 1em; /* Main */
    overflow: visible; /* Main */
    vertical-align: -.125em; /* Main */

    width: 1em; /* Extension */

    fill: currentColor; /* Mine */
  }
}
</style>
