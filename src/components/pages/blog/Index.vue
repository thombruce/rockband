<template lang='pug'>
article(v-if='!$fetchState.pending')
  TntBlogList(:articles='articles')
</template>

<script>
export default {
  data () {
    return {
      articles: null
    }
  },
  async fetch() {
    this.articles = await this.$content('blog')
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch(() => {})
  }
}
</script>
