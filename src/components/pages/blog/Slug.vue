<template lang='pug'>
div(v-if='!$fetchState.pending')
  TntPagesBlogPage(v-if='!Array.isArray(article)' :article='article')
  TntPagesBlogTaxonomy(v-else :slug='slug' :terms='article')
</template>

<script>
export default {
  data () {
    return {
      slug: null,
      article: null
    }
  },
  async fetch() {
    this.slug = this.$route.params.slug

    this.article = await this.$content('blog', this.slug)
      .fetch()
      .catch(async () => {
        const terms = await this.$taxonomies(this.slug, 'blog').all()
        return terms
      })
  }
}
</script>
