<template lang='pug'>
ol
  li(v-for='link in toc' :key='link.id' :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }")
    NuxtLink(:to='`#${link.id}`') {{ link.text }}
</template>

<script>
export default {
  props: ['toc']
}
</script>
