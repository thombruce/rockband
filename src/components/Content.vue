<template lang='pug'>
article.prose
  TntContentHeader(:article='article')
  template(v-if='article.toc && article.toc.length')
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
