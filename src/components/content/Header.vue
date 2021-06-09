<template lang='pug'>
header.py-4
  // TODO: Add support for images

  dl.inline-block.mr-1(v-if='article.categories')
    dt.sr-only Categories
    // TODO: Allow for link paths to be passed for taxonomies
    dd.inline-block.mr-2(v-for='category in article.categories') {{ category }}

  dl.inline-block.mr-1(v-if='article.series')
    dt.sr-only Series
    // TODO: Allow for link paths to be passed for taxonomies
    dd.inline-block.mr-2(v-for='series in article.series') {{ series }}

  h1 {{ article.title }}

  dl.inline-block.mr-1(v-if='article.tags')
    dt.sr-only Tags
    // TODO: Allow for link paths to be passed for taxonomies
    dd.inline-block.mr-2(v-for='tag in article.tags') {{ tag }}

  time.block(:datetime='article.createdAt') {{ article.createdAt }}
</template>

<script>
export default {
  props: ['article']
}
</script>
