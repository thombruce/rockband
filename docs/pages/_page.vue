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

  async asyncData ({ $content, params }) {
    const slug = params.page

    const page = await $content(slug)
      .where({ draft: { $ne: true } })
      .fetch()
      .catch(() => {})

    return { slug, page }
  }
}
</script>
