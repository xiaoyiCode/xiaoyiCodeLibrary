import Vue from 'vue'
import Router from 'vue-router'
import '../../css/style.css' /*引入公共样式*/

Vue.use(Router)

import test from '@/components/test'
import HelloWorld from '@/components/HelloWorld'
import me from '@/components/me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/home',
      // name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/news',
      // name: 'test',
      component: test
    },
    {
      path:'/go',
      // name:'tt',
      component:me
    },
  ]
})
