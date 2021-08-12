<template lang='pug'>
div.h-full
  ul.menu.flex.flex-col.p-4(v-for='(collection, dir) in collections')
    li.menu-title.mt-2
      span
        NuxtLink(:to='dir') {{ dir | titleize }}
    li(v-for='page in collection' :key='page.slug')
      NuxtLink(:to='page') {{ page.title }}

    li.menu-title.mt-2
      span Other Pages
    li(v-for='page in pages' :key='page.slug')
      NuxtLink(:to='page') {{ page.title }}
</template>

<script>
import { groupBy } from 'lodash'

export default {
  data () {
    return {
      collections: null,
      pages: null
    }
  },
  async fetch() {
    const nestedPages = await this.$content({ deep: true })
      .where({ draft: { $ne: true }, dir: { $ne: '/' } })
      .fetch()
      .catch(() => {})

    this.collections = groupBy(nestedPages, 'dir')

    this.pages = await this.$content()
      .where({ draft: { $ne: true } })
      .fetch()
      .catch(() => {})
  },
}
</script>
