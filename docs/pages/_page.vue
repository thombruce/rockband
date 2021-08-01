<template lang='pug'>
div
  article(v-if='!Array.isArray(page)')
    header
      NuxtImg(v-if='page.image' :src='page.image' width='100vw')
      h1 {{ page.title }}
      time(:datetime='page.date') {{ page.date }}

    div(:class='page.container')
      NuxtContent(:document='page')
  article(v-else)
    header
      h1 {{ slug | titleize }}
    div
      article(v-for='term in page')
        header
          h2
            NuxtLink(:to='{ name: `taxonomy-term`, params: { taxonomy: slug, term: term.slug } }') {{ term.title }}
</template>

<script>
export default {
  async asyncData ({ $content, $taxonomies, params }) {
    const slug = params.page

    const page = await $content(slug)
      .where({ draft: { $ne: true } })
      .fetch()
      .catch(async () => {
        const terms = await $taxonomies(slug, '', { deep: true }).all()
        return terms
      })

    return { slug, page }
  }
}
</script>
