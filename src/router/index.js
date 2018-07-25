import Vue from 'vue'
import Router from 'vue-router'
import '../../css/style.css' /*引入公共样式*/
import axios from 'axios'

import test from '@/components/test'
import HelloWorld from '@/components/HelloWorld'
import me from '@/components/me'
import newsclass from '@/components/newsClass/newsclass'
// import banner from '@/components/swiper/banner'

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
    },
    // {
    //   path:'/swiper/banner',
    //   // name:'tt',
    //   component:banner
    // },
    // 路由重定向，保证打开页面的时候显示在设置的页面中（本demo设置的为推荐页/recommend）
    // {
    //   path:"*",
    //   redirect: "/HelloWorld"
    // }
  ]
})
