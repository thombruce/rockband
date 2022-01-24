<template lang='pug'>
NuxtContent(:document='article' class='prose dark:prose-invert')
</template>

<script>
export default {
  props: [
    'article'
  ]
}
</script>
