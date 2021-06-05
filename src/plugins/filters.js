import Vue from 'vue'

import { startCase } from 'lodash'

Vue.filter('titleize', val => startCase(val))
