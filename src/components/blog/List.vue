<template lang='pug'>
div
  template(v-if='articles')
    article(v-for='article in articles')
      header
        h2
          NuxtLink(:to='article') {{ article.title }}
        time(:datetime='article.createdAt') {{ article.createdAt }}
      div(v-if='article.description')
        p {{ article.description }}
  div.text-center(v-else)
    span.text-2xl.text-secondary There's nothing to see yet.
</template>

<script>
export default {
  props: [
    'articles'
  ]
}
</script>
