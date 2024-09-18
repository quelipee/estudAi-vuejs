import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/login',
    component: () => import('@/views/guest/signIn.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')){
        next('/');
      }else {
        next();
      }
    }
  },
  {
    path: '/register',
    component: () => import('@/views/guest/signUp.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')){
        next('/');
      }else {
        next();
      }
    }
  },
  {
    path: '/tabs/',
    component: TabsPage,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('token')){
        next('/login');
      }else {
        next();
      }
    },
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: '/course/:id',
        name: 'course',
        props: true,
        component: () => import('@/views/auth/CourseDetail.vue'),
      },
      {
        path: '/topic/:id',
        name: 'topic',
        props: true,
        component: () => import('@/views/auth/TopicDetail.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
