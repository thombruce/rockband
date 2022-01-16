<template lang='pug'>
nav
  template(v-for='(collection, dir) in collections')
    NuxtLink(v-if="dir != '/'" :key='dir' :to='dir')
      | {{ dir.split('/').pop() | titleize }}
    NuxtLink(v-else v-for='(page) in collection' :key='page.slug' :to='page')
      | {{ page.title }}
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

    this.collections = groupBy(nestedPages, (c) => { return `/${c.dir.split('/')[1]}` })
  },
}
</script>

<style lang='postcss' scoped>
nav {
  @apply flex justify-center;

  & a+a {
    @apply ml-4;
  }
}
</style>
