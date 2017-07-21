import Vue from 'vue'
import Router from 'vue-router'
import Principal from '../App'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Principal',
      component: Principal
    }
  ]
})
