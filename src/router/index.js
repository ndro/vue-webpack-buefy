import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'is-active', // for router-link
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
