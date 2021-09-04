<template lang='pug'>
div.h-full
  ul.menu.flex.flex-col.p-4
    template(v-for='(collection, dir) in collections')
      li.menu-title.mt-2(v-if="dir != '/'")
        span
          NuxtLink(v-on:click.native="$emit('close-menu')" :to='dir') {{ dir.split('/').pop() | titleize }}
      li(v-for='page in collection' :key='page.slug')
        NuxtLink(v-on:click.native="$emit('close-menu')" :to='page') {{ page.title }}
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

    this.collections = groupBy(nestedPages, 'dir')
  },
}
</script>
