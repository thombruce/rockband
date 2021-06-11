<template lang='pug'>
article(v-if='!$fetchState.pending')
  header
    NuxtImg(v-if='page.image' :src='page.image' width='100vw')
    h1 {{ page.title }}
    time(:datetime='page.createdAt') {{ page.createdAt }}

  div(:class='page.container')
    NuxtContent(:document='page')
</template>

<script>
export default {
  data () {
    return {
      page: null
    }
  },
  async fetch() {
    this.page = await this.$content(this.$route.params.page).fetch()
  }
}
</script>
