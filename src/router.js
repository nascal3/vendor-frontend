import Vue from 'vue'
import Router from 'vue-router'
import store from '../src/store/modules/auth'
import Home from './views/Home/Home.vue'
import Login from './views/Login/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      beforeEnter (to, from, next) {
        if (store.state.loggedIn) {
          next()
        } else {
          next('/')
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About/About.vue')
      }
    }
  ]
})
