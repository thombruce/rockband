<template lang='pug'>
article
  TntContentHeader(:article='article')
  template(v-if='article.showToC != false && article.toc && article.toc.length')
    TntContentToC(:article='article')
    hr
  TntContentBody(:article='article')
</template>

<script>
export default {
  props: [
    'article'
  ]
}
</script>
