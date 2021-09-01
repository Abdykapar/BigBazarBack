import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/Admin.vue'),
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: () => import('@/views/admin/Dashboard.vue')
      },
      {
        path: 'category',
        name: 'category',
        component: () => import('@/views/admin/AdminCategory.vue')
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('@/views/admin/AdminProducts.vue')
      },
    ]
  },
  {
    path: '/admin/login',
    name: 'adminLogin',
    component: () => import('@/views/admin/AdminLogin.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/Login.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/components/Cart.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/components/Register.vue')
  },
  {
    path: '/wish-list',
    name: 'wishList',
    component: () => import('@/components/WishList.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/components/SingleProduct.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/components/ShopList.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
