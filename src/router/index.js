// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/prelogin/PreLogin.vue'),
    children: [
      {
        path: '',
        name: 'Welcome',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Welcome.vue'),
      },
    ],
  },
  {
    path: '/home',
    component: () => import('@/layouts/postlogin/PostLogin.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/layouts/prelogin/PreLogin.vue'), 
    children: [
      {
        path: '',
        name: 'LogIn',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Login.vue'),
      },
    ],
  },
  {
    path: '/signin',
    component: () => import('@/layouts/prelogin/PreLogin.vue'), 
    children: [
      {
        path: '',
        name: 'SignIn',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Signin.vue'),
      },
    ],
  },
  {
    path: '/courses',
    component: () => import('@/layouts/postlogin/PostLogin.vue'),
    children: [
      {
        path: '',
        name: 'Courses',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Courses.vue'),
      },
    ],
  },
  {
    path: '/courses/:courseCode',
    component: () => import('@/layouts/postlogin/PostLogin.vue'),
    props: true,
    children: [
      {
        path: '',
        name: 'CourseAssistance',
        component: () => import(/* webpackChunkName: "home" */ '@/views/CourseDetails.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
