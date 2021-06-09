<template lang='pug'>
article
  TntContentHeader(:article='article')
  template(v-if='article.toc && article.toc.length')
    TntContentToC(:article='article')
    hr.my-3
  TntContentBody(:article='article')
</template>

<script>
export default {
  props: [
    'article'
  ]
}
</script>
