<template lang='pug'>
article
  TntBlogList(:articles='articles')
</template>

<script>
export default {
  layout: 'docs',

  async asyncData ({ $content }) {
    const articles = await $content('docs')
      .where({ $and: [{ draft: { $ne: true } }, { redirect: { $type: 'undefined' } }] })
      .sortBy('date', 'desc')
      .fetch()
      .catch(() => {})

    return { articles }
  }
}
</script>
