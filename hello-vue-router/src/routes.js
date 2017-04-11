import home from './component/home/home.vue'
import page from './component/page/page.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/page',
    name: 'page',
    component: page
  },
]

export default routes
