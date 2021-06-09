<template lang='pug'>
div
  NuxtContent(:document='article')
</template>

<script>
export default {
  props: [
    'article'
  ]
}
</script>
