<template lang='pug'>
article
  TntBlogList(v-if='articles' :articles='articles')
  footer.hidden(v-if='pages')
    NuxtLink(v-for='page in pages' :key='page.slug' :to='page') {{ page.title }}
</template>

<script>
export default {
  layout: 'docs',

  async asyncData ({ $content }) {
    const pages = await $content()
      .fetch()
      .catch(() => {})

    let articles = await $content('', { deep: true })
      .where({ $and: [{ draft: { $ne: true } }, { dir: { $ne: '/' } }, { redirect: { $type: 'undefined' } }] })
      .sortBy('date', 'desc')
      .fetch()
      .catch(() => {})
    
    return { pages, articles }
  },

  head () {
    return {
      titleTemplate: null
    }
  }
}
</script>
