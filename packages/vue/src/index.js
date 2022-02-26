import VueMeta from 'vue-meta'
import VueDarkMode from '@vue-a11y/dark-mode'

import './assets/index.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  install (Vue, options) {
    options = {
      ...{
        iconComponent: 'fa'
      },
      ...options
    }

    if (!options.nuxt) {
      Vue.use(VueMeta)
    }

    Vue.use(VueDarkMode)

    Vue.component(options.iconComponent, FontAwesomeIcon)
  }
}
