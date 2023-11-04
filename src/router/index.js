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
  {
    path: '/teacher/menu',
    component: () => import('@/layouts/postlogin/PostLogin.vue'),
    children: [
      {
        path: '',
        name: 'TeacherMenu',
        component: () => import(/* webpackChunkName: "home" */ '@/views/TeacherMenu.vue'),
      },
    ],
  },
  {
    path: '/teacher/courses/add',
    component: () => import('@/layouts/postlogin/PostLogin.vue'),
    children: [
      {
        path: '',
        name: 'AddCourse',
        component: () => import(/* webpackChunkName: "home" */ '@/views/AddCourse.vue'),
      },
    ],
  },
  {
    path: '/teacher/courses/remove',
    component: () => import('@/layouts/postlogin/PostLogin.vue'),
    children: [
      {
        path: '',
        name: 'RemoveCourse',
        component: () => import(/* webpackChunkName: "home" */ '@/views/RemoveCourse.vue'),
      },
    ],
  },
  {
    path: '/teacher/courses/assistance',
    component: () => import('@/layouts/postlogin/PostLogin.vue'),
    children: [
      {
        path: '',
        name: 'TakeAssistance',
        component: () => import(/* webpackChunkName: "home" */ '@/views/TakeAssistance.vue'),
      },
    ],
  },
  {
    path: '/teacher/courses/students/add',
    component: () => import('@/layouts/postlogin/PostLogin.vue'),
    children: [
      {
        path: '',
        name: 'AddStudentToCourse',
        component: () => import(/* webpackChunkName: "home" */ '@/views/AddStudentToCourse.vue'),
      },
    ],
  },
  {
    path: '/teacher/courses/students/remove',
    component: () => import('@/layouts/postlogin/PostLogin.vue'),
    children: [
      {
        path: '',
        name: 'RemoveStudentFromCourse',
        component: () => import(/* webpackChunkName: "home" */ '@/views/RemoveStudentFromCourse.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
