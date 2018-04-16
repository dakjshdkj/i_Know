import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)


export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/classify',
      component:Classify
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/shopping',
      component:Shopping
    },
    {
      path:'/login',
      component:Login
    }
  ]
})
