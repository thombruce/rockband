<template lang='pug'>
.prose(:class='article.container')
  NuxtContent(:document='article')
</template>

<script>
export default {
  props: [
    'article'
  ]
}
</script>
