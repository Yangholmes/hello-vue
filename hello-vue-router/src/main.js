import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

Vue.use(VueRouter)

const page = {template: '<p>page!</p>'}

import routes from './routes.js'
const router = new VueRouter({
  mode: 'history',
  routes // （缩写）相当于 routes: routes
})

const app = new Vue({
  router ,
  render: h => h(App)
}).$mount('#app')
