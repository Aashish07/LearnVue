import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import About from './components/About'
import Home2 from './components/Home2'
import Settings from './components/Settings.vue'
import User from './components/User.vue'
import store from './store'

Vue.use(VueRouter)

const routes = [
  {path:'/',component:Home2},
  {path:'/about',component:About},
  {path:'/settings',component:Settings},
  {path:'/user/:id',component:User}
]
const router = new VueRouter({
  routes
})
Vue.config.productionTip = false

new Vue({
  store,
  router:router,
  render: h => h(App),
}).$mount('#app')
