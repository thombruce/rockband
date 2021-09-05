<template lang='pug'>
div(:class='article.container')
  NuxtContent(:document='article')
</template>

<script>
export default {
  props: [
    'article'
  ]
}
</script>
