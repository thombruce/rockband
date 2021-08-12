<template lang='pug'>
.drawer-side
  label.drawer-overlay(for='main-menu')
  aside.flex.flex-col.justify-between.border-r.border-base-200.bg-base-100.text-base-content.w-80
    .sticky.inset-x-0.top-0.z-50.hidden.w-full.py-1.transition.duration-200.ease-in-out.border-b.border-base-200.bg-neutral.text-neutral-content(class='lg:block')
      header.mx-auto.space-x-1.navbar.max-w-none
        .navbar-start
          NuxtLink.btn.btn-ghost(to='/')
            span.text-lg.font-bold {{ title }}
    TntLayoutsDocsSidebarMenu
</template>

<script>
export default {
  data () {
    return {
      title: this.$nuxt.$options.head.title
    }
  }
}
</script>
