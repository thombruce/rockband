<template lang='pug'>
aside(v-if='article.showToC != false')
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
