import Vue from 'vue'
import Router from 'vue-router'
import '../../css/style.css' /*引入公共样式*/

import test from '@/components/test'
import HelloWorld from '@/components/HelloWorld'
import me from '@/components/me'
import newsclass from '@/components/newsClass/newsclass'

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
      path:'/me',
      // name:'tt',
      component:me,
    },
    {
      path:'/newsClass/newsclass',
      // name:'tt',
      component:newsclass
    }
  ]
})
