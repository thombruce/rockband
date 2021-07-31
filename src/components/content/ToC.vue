<template lang='pug'>
aside
  h2 Table of Contents
  TntUITableOfContents(:toc='article.toc')
</template>

<script>
export default {
  props: [
    'article'
  ]
}
</script>
