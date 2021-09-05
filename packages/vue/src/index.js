import VueMeta from 'vue-meta'

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

    Vue.component(options.iconComponent, FontAwesomeIcon)
  }
}
