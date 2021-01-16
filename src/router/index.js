import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import zhishi from '../components/zhishi'
import zhuce from '../components/zhuce'
import login from '../components/login'
import wenzhang1 from '../components/wenzhang1'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


Vue.use(Router)

var router = new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue'),
    children: [{
        path: 'jieshao',
        name: 'jieshao',
        component: () => import('../components/jieshao.vue')
      },
      {
        path: 'zhishi',
        name: 'zhishi',
        component: () => import('../components/zhishi.vue')
      },
      {
        path: 'wenzhang1',
        name: 'wenzhang1',
        component: () => import('../components/wenzhang1.vue')
      },
      {
        path: 'wenzhang2',
        name: 'wenzhang2',
        component: () => import('../components/wenzhang2.vue')
      },
      {
        path: 'wenzhang3',
        name: 'wenzhang3',
        component: () => import('../components/wenzhang3.vue')
      },
    ],

  },
   {
     path: '/zhuce',
     name: 'zhuce',
     component: () => import('../components/zhuce.vue')},
       {
         path: '/login',
         name: 'login',
         component: () => import('../components/login.vue')
       },

   ]
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach((to, from, next) => {
  NProgress.done()
})
export default router
