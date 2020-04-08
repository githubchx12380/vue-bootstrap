import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import jiaocheng from '../views/jiaocheng.vue'
import category from '../views/category.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path:'',
    redirect:'/index'
  },
  {
    path: '/index',
    component:Index
  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/jiaocheng',
    component:jiaocheng
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
