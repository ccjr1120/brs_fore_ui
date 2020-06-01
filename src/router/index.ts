import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const Login = ()=> import('../views/Login.vue')
const AppLayout = () => import('../views/AppLayout.vue')
const Home = () => import('../views/Home.vue')
const Friend = () => import('../views/Friend.vue')
const Collection = () => import('../views/Collection.vue')
const Recommend = () => import('../views/Recommend.vue')

const routes: Array<RouteConfig> = [
  {
    path:'/login',
    component:Login
  },
  {
    path: '/',
    name: 'MainLayout',
    component: AppLayout,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/friends',
        component: Friend
      },
      {
        path: '/recommend',
        component: Recommend
      },
      {
        path: '/collection',
        component: Collection
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
