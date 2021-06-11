<template lang='pug'>
div(v-if='!$fetchState.pending')
  TntContent(:article='article')
</template>

<script>
export default {
  props: [
    'section'
  ],
  data () {
    return {
      slug: null,
      article: null
    }
  },
  async fetch() {
    this.slug = this.$route.params.slug

    this.article = await this.$content(this.section, this.slug)
      .fetch()
  },
  head () {
    return {
      title: this.article.title
    }
  }
}
</script>
