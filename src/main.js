import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store/index'
import ElementUI from 'element-ui'
import Bg from '@/components/Bg'
import Nav from '@/components/Nav'
import http from '@/http'
import '@/assets/css/icon.css'
import '@/assets/css/common.css'
import 'animate.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('bg-view', Bg)
Vue.component('nav-view', Nav)

Vue.prototype.$http = http

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
