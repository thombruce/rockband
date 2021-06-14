<template lang='pug'>
article(v-if='!$fetchState.pending')
  TntBlogList(v-if='articles' :articles='articles')
  footer.hidden(v-if='pages')
    NuxtLink(v-for='page in pages' :key='page.slug' :to='page') {{ page.title }}
</template>

<script>
export default {
  data () {
    return {
      pages: null,
      articles: null
    }
  },
  async fetch() {
    this.pages = await this.$content()
      .fetch()
      .catch(() => {})

    this.articles = await this.$content('blog')
      .where({ draft: { $ne: true } })
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch(() => {})
  },
  head () {
    return {
      titleTemplate: null
    }
  }
}
</script>
