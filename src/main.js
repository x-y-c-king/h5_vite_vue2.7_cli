import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import './assets/css/common.scss'
import 'vant/lib/toast/index.css'
import router from './router'
import { createPinia, PiniaVuePlugin } from 'pinia'
import VConsole from 'vconsole'

const pinia = createPinia()
Vue.use(PiniaVuePlugin)

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV !== 'production') {
  new VConsole()
}

new Vue({
  router,
  pinia,
  render: (h) => h(App)
}).$mount("#app");