<template>
  <div id="app">
    <div class="appnav">
        <ul>
            <li @click="homeClick()">
            <router-link :to="{path:'home',query:{'title':'home'}}">home</router-link>
            </li>
            <li @click="newsClick()">
            <router-link :to="{path:'news',query:{'title':'新闻'}}">新闻</router-link>
            </li>
            <li @click="meClick()">
            <router-link :to="{path:'me',query:{'title':'个人设置'}}">我</router-link>
            </li>
            <!-- <li @click="bannerClick()">
            <router-link :to="{path:'swiper/banner',query:{'title':'banner'}}">广告</router-link>
            </li> -->
        </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homeClick:function(){
      this.$router.push({path:'/home',query:{title: 'home'}})
    },
    newsClick:function(){
      this.$router.push({path:'/news',query:{title: '新闻'}})
    },
    meClick:function(){
      this.$router.push({path:'/me',query:{title: '个人设置'}})
    }
    // bannerClick:function(){
    //   this.$router.push({path:'/swiper/banner',query:{title: '广告'}})
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  /* padding-top: 60px; */
}
.appnav{
    width:100%;
    height:50px;
    background-color:green;
    color:black;
    position:fixed;
    bottom : 0;
    display:flex;
    justify-content:center;
    align-items:center;
}
.appnav ul {
  list-style-type: none;
  padding: 0;
  width:100%;
  display:flex;
}
.appnav li {
  display: inline-block;
  margin: 0 10px;
  flex-grow:1;
}
.appnav a {
  color:black;
}

</style>
