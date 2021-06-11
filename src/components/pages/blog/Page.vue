<template lang='pug'>
div
  TntContent(:article='article')
</template>

<script>
export default {
  props: [
    'article'
  ],
  head () {
    return {
      title: this.article.title
    }
  }
}
</script>
