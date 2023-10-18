import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Sign-inView.vue')
    }
  },
  {
    path: '/all-course',
    name: 'all course',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AllCourseView.vue')
    }
  },
  {
    path: '/course/:id',
    name: 'course',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/CourseView.vue')
    }
  },
  {
    path: '/visualize/:project_id',
    name: 'visualize',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/VisualizeView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
