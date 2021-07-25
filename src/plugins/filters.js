import Vue from 'vue'

import { startCase } from 'lodash'

import { DateTime } from 'luxon'

Vue.filter('titleize', val => startCase(val))

Vue.filter('toLocaleString', val => new Date(val).toLocaleDateString())

Vue.filter('toLocaleString', val => DateTime.fromISO(val).toLocaleString(DateTime.DATETIME_FULL))
