import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import jiaocheng from '../views/jiaocheng.vue'
import category from '../views/category.vue'
import Detail from '../views/Detail.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component:Index
  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/category/:id',
    component:category,
    props:true
  },
  {
    path:'/jiaocheng',
    component:jiaocheng,
  },
  {
    path:'/detail/:id',
    component:Detail,
    props:true
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
