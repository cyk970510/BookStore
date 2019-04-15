import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Classify from '@/pages/classify/Classify.vue'
import Buy from '@/pages/buy/Buy.vue'
import Car from '@/pages/car/Car.vue'
import My from '@/pages/my/My.vue'
import Register from '@/pages/register/Register.vue'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/classify',
    name: 'Classify',
    component: Classify
  }, {
    path: '/buy',
    name: 'Buy',
    component: Buy
  }, {
    path: '/car',
    name: 'Car',
    component: Car
  }, {
    path: '/my',
    name: 'My',
    component: My
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }],
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
