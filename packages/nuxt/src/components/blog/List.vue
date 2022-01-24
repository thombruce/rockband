<template lang='pug'>
div
  template(v-if='articles')
    article.mb-4(v-for='article in articles')
      figure
        NuxtImg(v-if='article.image' :src='article.image' width='200' height='200' style='width:200px;height:200px;object-fit:cover;')

      header
        h2
          a(v-if='article.link' :href='article.link' target='_blank') {{ article.title }}
          NuxtLink(v-else :to='article') {{ article.title }}
        time.block.text-sm.text-gray-500(v-if='article.date' pubdate :datetime='article.date') {{ article.date | toLocaleString }}

      div(v-if='article.description && !article.excerpt' class='prose dark:prose-invert')
        | {{ article.description }}
      NuxtContent(
        v-else-if='article.excerpt'
        :document='{ body: article.excerpt }'
        class='prose dark:prose-invert'
      )
      NuxtContent(
        v-else
        :document='article'
        class='prose dark:prose-invert'
      )

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
