import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/init.css'
import './plugins/element.js'
import './assets/style.css'
import less from 'less'
import 'element-ui/lib/theme-chalk/display.css';
Vue.use(less)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
