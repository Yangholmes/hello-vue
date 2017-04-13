import home from './component/home/index.vue'
import page from './component/page/index.vue'
import table from './component/table/index.vue'
import form from './component/form/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },{
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/page',
    name: 'page',
    component: page
  },
  {
    path: '/table',
    name: 'table',
    component: table
  },
  {
    path: '/form',
    name: 'form',
    component: form
  }
]

export default routes
