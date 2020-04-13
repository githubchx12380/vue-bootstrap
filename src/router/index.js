import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import jiaocheng from '../views/jiaocheng.vue'
import category from '../views/category.vue'
import chromeDetail from '../views/chromeDetail.vue'
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
    component:chromeDetail,
    props:true
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
