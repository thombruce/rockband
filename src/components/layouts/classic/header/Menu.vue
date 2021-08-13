<template lang='pug'>
.navbar
  nav
    template(v-for='(collection, dir) in collections')
      NuxtLink.btn.btn-ghost(v-if="dir != ''" :key='dir' :to='dir')
        span {{ dir.split('/').pop() | titleize }}
      NuxtLink.btn.btn-ghost(v-else v-for='(page) in collection' :key='page.slug' :to='page')
        span {{ page.title }}
  TntUIThemeToggle
</template>

<script>
import { groupBy } from 'lodash'

export default {
  data () {
    return {
      collections: null
    }
  },
  async fetch() {
    const nestedPages = await this.$content({ deep: true })
      .where({ draft: { $ne: true }})
      .sortBy('dir')
      .sortBy('order')
      .sortBy('title')
      .fetch()
      .catch(() => {})

    this.collections = groupBy(nestedPages, (c) => { return c.dir.split('/')[1] })
  },
}
</script>

<style lang='postcss' scoped>
.navbar {
  @apply flex justify-center;
}
</style>