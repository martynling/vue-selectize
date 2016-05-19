import Vue from 'vue'
import App from './App.vue'

window.Vue = Vue

window.$ = window.jQuery = require('jquery')

import VueSelectize from './VueSelectize.vue'
Vue.use(VueSelectize)
window.VueSelectize = VueSelectize

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
