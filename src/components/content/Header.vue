<template lang='pug'>
header.py-4
  dl.inline-block.mr-1(v-if='categories.length')
    dt.sr-only Categories
    dd.inline-block.mr-2(v-for='category in categories')
      template(v-if='$router.match(`/categories/${parameterize(category)}`).matched.length')
        NuxtLink(:to='`/categories/${parameterize(category)}`') {{ category }}
      template(v-else) {{ category }}

  dl.inline-block.mr-1(v-if='series.length')
    dt.sr-only Series
    dd.inline-block.mr-2(v-for='series in series')
      template(v-if='$router.match(`/series/${parameterize(series)}`).matched.length')
        NuxtLink(:to='`/series/${parameterize(series)}`') {{ series }}
      template(v-else) {{ series }}

  h1 {{ article.title }}

  address(v-if='authors.length')
    dl.authors
      dt.sr-only Authors
      dd.inline(v-for='author in authors')
        template(v-if='$router.match(`/authors/${parameterize(author)}`).matched.length')
          NuxtLink(:to='`/authors/${parameterize(author)}`' rel='author') {{ author }}
        template(v-else) {{ author }}

  dl.inline-block.mr-1(v-if='tags.length')
    dt.sr-only Tags
    dd.inline-block.mr-2(v-for='tag in tags')
      template(v-if='$router.match(`/tags/${parameterize(tag)}`).matched.length')
        NuxtLink(:to='`/tags/${parameterize(tag)}`') {{ tag }}
      template(v-else) {{ tag }}

  time.block(pubdate :datetime='article.createdAt') {{ article.createdAt }}

  NuxtImg(v-if='article.image' :src='article.image' sizes='xs:320px sm:640px md:768px')
</template>

<script>
import { kebabCase } from 'lodash'

export default {
  props: ['article'],

  computed: {
    categories () {
      return (this.article.categories || [this.article.category]).flat().filter(Boolean)
    },
    series () {
      return ([this.article.series]).flat().filter(Boolean)
    },
    tags () {
      return ([this.article.tags]).flat().filter(Boolean)
    },
    authors () {
      return (this.article.authors || [this.article.author]).flat().filter(Boolean)
    }
  },

  methods: {
    parameterize (term) {
      return kebabCase(term)
    }
  }
}
</script>

<style lang='postcss' scoped>
dl.authors {
  & dd {
    &:first-of-type::before {
      content: 'by '
    }
    &:not(:last-child)::after {
      content: ', '
    }
    &:nth-last-child(2)::after {
      content: ' and '
    }
  }
}
</style>
