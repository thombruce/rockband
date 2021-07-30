<template lang='pug'>
div
  template(v-if='articles')
    article.card.card-side.bordered.mb-4(v-for='article in articles')
      figure
        NuxtImg(v-if='article.image' :src='article.image' width='200' height='200')

      .card-body
        header
          h2.card-title
            NuxtLink(:to='article') {{ article.title }}
          time(:datetime='article.date') {{ article.date | toLocaleString }}
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
