<template lang='pug'>
aside
  h2.mb-2 Table of Contents
  TntUITableOfContents(:toc='article.toc')
</template>

<script>
export default {
  props: [
    'article'
  ]
}
</script>
