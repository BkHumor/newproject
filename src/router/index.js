import Vue from 'vue'
import Router from 'vue-router'
import Bg from '@/components/Bg'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Projects from '@/components/Projects'
import Developer from '@/components/Developer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/developer',
      name: 'developer',
      component: Developer
    },
  
  ]
})
