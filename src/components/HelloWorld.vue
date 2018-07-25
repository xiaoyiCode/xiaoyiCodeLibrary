<template>
  <div class="hello">
    <div class="title">
      <div class="left">
        &lt;返回
      </div>
      {{$route.query.title}}
      <div class="right">
        设置
      </div>
    </div>
    <ul>
      <li v-for="(item,index) in tabs" :class="{active:index == num}" @click="tab(index)">{{item}}</li>
    </ul>
    <div class="tabCon">
      <div v-for='(itemCon,index) in tabContents' v-show=" index == num">
        <img :src="itemCon" alt="banner" width="100%" height="auto">
        <!-- {{itemCon}} -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
     
    return {
      tabs: ["标题一", "标题二","标题三"],
      tabContents: [],
      num: 0,
      activeName: null
    }
  },
  methods: {
    tab(index) {
      this.num = index;
    }
  },
  created() {
    axios.all([
      axios.get('https://bird.ioliu.cn/v1?url=http://www.bing.com/HPImageArchive.aspx?idx=0&format=js&n=1'),
      axios.get('https://bird.ioliu.cn/v1?url=http://www.bing.com/HPImageArchive.aspx?format=js&idx=1&n=1')
    ])
    .then(axios.spread((userResp, reposResp) =>{
      let a = "http://bing.com/" + userResp.data.images[0].url;
      let b = "http://bing.com/" + reposResp.data.images[0].url;

      // 上面两个请求都完成后，才执行这个回调方法
      this.tabContents.push(a)
      this.tabContents.push(b)
    }))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  height: 40px;
  width: 100%;
  display: flex;
  /* overflow: hidden; */
  justify-content: center;
  align-items: center;
  background-color: green;
}
.left{
  position: absolute;
  left: 0;
  /* float: left; */
}
.right{
  position: absolute;
  right: 0;
  /* float: right; */
}
h1, h2 {
  margin: 0;
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  height: 30px;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
}
li {
  /* display: inline-block; */
  flex-grow: 1;
  /* margin: 0 10px; */
  height: 100%;
  /* vertical-align: middle; */
  font: 16px/30px "微软雅黑"
}
.active {
    background: orangered;
}
</style>
