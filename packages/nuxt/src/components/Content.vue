<template lang='pug'>
article
  RockBandContentHeader(:article='article')
  template(v-if='article.showToC != false && article.toc && article.toc.length')
    RockBandContentToC(:article='article')
    hr
  RockBandContentBody(:article='article')
</template>

<script>
export default {
  props: [
    'article'
  ]
}
</script>
