<template lang='pug'>
article(v-if='!$fetchState.pending')
  header
    h1 {{ term.title }}

  div
    article(v-for='article in articles')
      header
        h2
          NuxtLink(:to='article') {{ article.title }}
        time(:datetime='article.createdAt') {{ article.createdAt }}
      div
        p {{ article.description }}
</template>

<script>
export default {
  data () {
    return {
      term: null,
      articles: null
    }
  },
  async fetch() {
    const taxonomy = this.$route.params.taxonomy

    this.term = await this.$taxonomies(taxonomy, 'blog').find(this.$route.params.term)

    this.articles = await this.$content('blog')
      .where({
        $and: [
          { draft: { $ne: true } },
          { $or: [{ [taxonomy]: { $contains: this.term.title } }, { [taxonomy]: { $eq: this.term.title } }] }
        ]
      })
      .sortBy('createdAt', 'desc')
      .fetch()
  }
}
</script>
