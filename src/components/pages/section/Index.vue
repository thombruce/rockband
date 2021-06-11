<template lang='pug'>
article(v-if='!$fetchState.pending')
  TntBlogList(:articles='articles')
</template>

<script>
export default {
  props: {
    section: String,
    deep: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      articles: null
    }
  },
  async fetch() {
    this.articles = await this.$content(this.section, { deep: this.deep })
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch(() => {})
  }
}
</script>
