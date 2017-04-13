import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App.vue'

Vue.use(VueRouter)
Vue.use(ElementUI)

import routes from './routes.js'
// instance a VueRouter
const router = new VueRouter({
  mode: 'history',
  routes // （缩写）相当于 routes: routes
})

const app = new Vue({
  router ,
  render: h => h(App)
}).$mount('#app')
