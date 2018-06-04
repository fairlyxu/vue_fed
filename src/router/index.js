import Vue from 'vue'
import Router from 'vue-router'
import SayHi from '@/components/SayHi' 
import BlogList from '@/components/BlogList' 
import Blog  from '@/components/Blog' 

Vue.use(Router)
Vue.use(axios)
export default new Router({
  routes: [
    {
      path: '/say_hi',
      name: 'SayHi',
      component: SayHi
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogList
    }
  ]
})
