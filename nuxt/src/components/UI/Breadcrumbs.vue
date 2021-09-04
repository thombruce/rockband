<template lang='pug'>
.breadcrumbs(v-if='crumbs')
  ul
    li
      NuxtLink(to='/')
        fa(:icon='faHome')
    li(v-for='crumb in crumbs')
      NuxtLink(:to='crumb.path') {{ crumb.title }}
</template>

<script>
import { startCase } from 'lodash'
import { faHome } from '@fortawesome/free-solid-svg-icons'

// Based on https://dev.to/lukeocodes/breadcrumbs-in-nuxt-5f2m
export default {
  computed: {
    faHome () {
       return faHome
    },
    crumbs () {
      const fullPath = this.$route.fullPath
      let params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      params = params.filter(item => item)
      const crumbs = []
      let path = ''
      params.forEach((param, index) => {
        param = param.split(/[?#]/)[0]
        path = `${path}/${param}`
        const match = this.$router.match(path)
        if (match.name !== null) {
          crumbs.push({
            title: startCase(param),
            ...match,
          })
        }
      })
      return crumbs.length ? crumbs : false
    }
  }
}
</script>
