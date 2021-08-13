<template lang='pug'>
div
  TntContent(v-if='!Array.isArray(page)' :article='page')
  article(v-else)
    header
      h1 {{ slug | titleize }}
    TntBlogList(:articles='page')
</template>

<script>
export default {
  layout: 'docs',

  async asyncData ({ $content, $taxonomies, params }) {
    const slug = params.page

    const page = await $content(slug)
      .where({ draft: { $ne: true } })
      .sortBy('date', 'desc')
      .fetch()
      .catch(async () => {
        const terms = await $taxonomies(slug, '', { deep: true }).all()
        return terms
      })

    return { slug, page }
  }
}
</script>
