<template lang='pug'>
div
  template(v-if='articles')
    article.mb-4(v-for='article in articles')
      figure
        NuxtImg(v-if='article.image' :src='article.image' width='200' height='200' style='width:200px;height:200px;object-fit:cover;')

      header
        h2
          NuxtLink(:to='article') {{ article.title }}
        time(v-if='article.date' :datetime='article.date') {{ article.date | toLocaleString }}

      div(v-if='article.description')
        p {{ article.description }}

  div.text-center(v-else)
    span.text-2xl.text-gray-500 There's nothing to see yet.
</template>

<script>
export default {
  props: [
    'articles'
  ]
}
</script>
