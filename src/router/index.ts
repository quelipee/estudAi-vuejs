import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import {getToken, useCourseStore} from "@/estudAI/components";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/login',
    component: () => import('@/views/guest/signIn.vue'),
    // beforeEnter: (to, from, next) => {
    //   const auth = useCourseStore();
    //   if (auth.user){
    //     next({
    //       path: '/',
    //     });
    //   }
    // }
  },
  {
    path: '/register',
    component: () => import('@/views/guest/signUp.vue'),
    // beforeEnter: (to, from, next) => {
    //   const auth = useCourseStore();
    //   if (auth.user){
    //     next({
    //       path: '/',
    //     });
    //   }
    // }
  },
  {
    path: '/course/:id',
    name: 'course',
    props: true,
    component: () => import('@/views/auth/CourseDetail.vue'),
    // beforeEnter: (to, from, next) => {
    //   //TODO ARRUMAR DEPOIS
    //   const auth = useCourseStore();
    //   if (!auth.user){
    //     next('/login');
    //   }else {
    //     next();
    //   }
    // },
  },
  {
    path: '/topic/:id',
    name: 'topic',
    props: true,
    component: () => import('@/views/auth/TopicDetail.vue'),
    // beforeEnter: (to, from, next) => {
    //   const auth = useCourseStore();
    //   if (!auth.user){
    //     next('/login');
    //   }else {
    //     next();
    //   }
    // },
  },
  {
    path: '/tabs/',
    component: TabsPage,
    beforeEnter: (to, from, next) => {
      // const auth = useCourseStore();
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
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
