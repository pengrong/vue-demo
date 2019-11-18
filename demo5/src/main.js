import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import '@/lib/mui/js/mui.js'
import mui from '@/lib/mui/css/mui.css'
Vue.prototype.mui = mui

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
