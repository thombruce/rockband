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
      .where({ draft: { $ne: true } })
      .sortBy('date', 'desc')
      .fetch()
      .catch(() => {})
  }
}
</script>
