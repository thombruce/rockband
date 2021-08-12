<template lang='pug'>
div
  TntContent(v-if='!Array.isArray(article)' :article='article')
  article(v-else)
    header
      h1 {{ slug | titleize }}
    TntBlogList(:articles='article')
</template>

<script>
export default {
  layout: 'docs',

  async asyncData ({ $content, $taxonomies, redirect, query, params }) {
    const slug = params.slug

    const article = await $content(params.collection, slug)
      .where({ draft: { $ne: true } })
      .fetch()
      .catch(async () => {
        const taxonomy = params.collection
        const term = await $taxonomies(taxonomy, '', { deep: true }).find(params.slug)

        const articles = await $content('', { deep: true })
          .where({
            $and: [
              { draft: { $ne: true } },
              { $or: [{ [taxonomy]: { $contains: term.title } }, { [taxonomy]: { $eq: term.title } }] }
            ]
          })
          .sortBy('date', 'desc')
          .fetch()
        
        return articles
      })

    if (article.redirect) {
      redirect({ path: article.redirect, query: query })
    } else {
      return { slug, article }
    }
  },

  head () {
    return {
      title: this.article.title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `${this.article.title} | ${process.env.siteTitle}` },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `${this.article.description ? this.article.description : process.env.siteDescription}`
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:url', property: 'og:url', content: `${process.env.baseUrl}${this.$route.fullPath}/` },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.baseUrl}${this.article.image ? this.$img(this.article.image, { width: '1200px', height: '627px' }) : process.env.siteImg}`
        }
      ]
    }
  }
}
</script>
