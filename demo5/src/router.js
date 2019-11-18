import Vue from 'vue'
import Router from 'vue-router'
import Pay from './views/Pay.vue'
import Orders from './views/Orders.vue'
import UserCenter from './views/UserCenter.vue'
import PayInfo from './views/PayInfo.vue'
import OrderInfo from './views/OrderInfo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user',
      name: 'user',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/UserCenter.vue')
    },
    {
      path: '/',
      name: 'pay',
      component: Pay
    },
    {
      path: '/payinfo/:id',
      name: 'payinfo',
      component: PayInfo
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/orderinfo/:id',
      name: 'orderinfo',
      component: OrderInfo
    },
  ]
})
