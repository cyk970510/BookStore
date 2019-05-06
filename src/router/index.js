import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
// import Classify from '@/pages/classify/Classify.vue'
// import Buy from '@/pages/buy/Buy.vue'
// import Car from '@/pages/car/Car.vue'
// import My from '@/pages/my/My.vue'
// import Register from '@/pages/register/Register.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/classify',
    name: 'Classify',
    // 路由懒加载模式
    component: resolve => require(['@/pages/classify/Classify.vue'], resolve)
  }, {
    path: '/buy',
    name: 'Buy',
    component: resolve => require(['@/pages/buy/Buy.vue'], resolve)
  }, {
    path: '/car',
    name: 'Car',
    component: resolve => require(['@/pages/car/Car.vue'], resolve)
  }, {
    path: '/my',
    name: 'My',
    component: resolve => require(['@/pages/my/My.vue'], resolve)
  }, {
    path: '/register',
    name: 'Register',
    component: resolve => require(['@/pages/register/Register.vue'], resolve)
  }, {
    path: '*',
    component: resolve => require(['@/pages/home/Home.vue'], resolve)
  }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
