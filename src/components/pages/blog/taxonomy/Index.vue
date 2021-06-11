<template lang='pug'>
div
  article
    header
      h1 {{ slug | titleize }}
    div
      article(v-for='term in terms')
        header
          h2
            NuxtLink(:to='{ name: `blog-taxonomy-term`, params: { taxonomy: slug, term: term.slug } }') {{ term.title }}
</template>

<script>
export default {
  props: [
    'slug',
    'terms'
  ]
}
</script>
