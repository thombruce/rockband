<template lang='pug'>
.flex-grow.block.overflow-x-hidden.bg-base-100.text-base-content.drawer-content
  .sticky.inset-x-0.top-0.z-50.w-full.py-1.transition.duration-200.ease-in-out.border-b.border-base-200.bg-neutral.text-neutral-content
    .mx-auto.space-x-1.navbar.max-w-none
      .flex-none
        label.btn.btn-square.btn-ghost.drawer-button(for='main-menu' class='lg:hidden')
          fa(:icon='faBars')
      .flex-1
      .navbar-end
        TntUIThemeToggle

  main.max-w-prose.mx-auto
    TntUIBreadcrumbs
    Nuxt

  TntLayoutsFooter
</template>

<script>
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default {
  computed: {
    faBars () {
       return faBars
    }
  }
}
</script>