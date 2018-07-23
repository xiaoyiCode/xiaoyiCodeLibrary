import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: test
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/news',
      name: 'test',
      component: test
    }
  ]
})
