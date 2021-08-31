import VueMeta from 'vue-meta'

import './assets/index.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  install (Vue, options) {
    Vue.use(VueMeta)

    Vue.component('fa', FontAwesomeIcon)
  }
}
