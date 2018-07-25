<template>
  <div class="banner">
    <!-- <div class="title">
      <div class="left">
        &lt;返回
      </div>
      {{$route.query.title}}
      <div class="right">
        设置
      </div>
    </div> -->
    <div class="swiper">
        <img :src="dialogues[0]" alt="banner" width="100%" height="auto">
        <img :src="dialogues[1]" alt="banner" width="100%" height="auto">
        <!-- <img src="http://bing.com//az/hprichbg/rb/FlamingoCousins_ZH-CN12160048336_1920x1080.jpg" alt="" width="100%" height="auto"> -->
        <!-- {{dial ogues}} -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'banner',
  data () {
    return {
        dialogues:[],
        // msg: 'Welcome to Your Vue.js App'
    } 
  },
  created() {
        // axios.get('static/data.json').then(response => 
        axios.all([

            axios.get('https://bird.ioliu.cn/v1?url=http://www.bing.com/HPImageArchive.aspx?idx=0&format=js&n=1'),

            axios.get('https://bird.ioliu.cn/v1?url=http://www.bing.com/HPImageArchive.aspx?format=js&idx=1&n=1')

        ])
        .then(axios.spread((userResp, reposResp) =>{

            let a = "http://bing.com/" + userResp.data.images[0].url;

            let b = "http://bing.com/" + reposResp.data.images[0].url;
            
            // 上面两个请求都完成后，才执行这个回调方法
            this.dialogues.push(a)

            this.dialogues.push(b)

            // console.log('User', userResp.data)

            // console.log('Repositories', reposResp.data)

        }))


        // axios.get('https://bird.ioliu.cn/v1?url=http://www.bing.com/HPImageArchive.aspx?idx=0&format=js&n=1').then(response => 
        //     // console.log(response.data.images)
        //     (this.dialogues.push("http://bing.com/" + response.data.images[0].url))
        // ),
        // axios.get('https://bird.ioliu.cn/v1?url=http://www.bing.com/HPImageArchive.aspx?format=js&idx=1&n=1').then(response => 
        //     // console.log(response.data.images)
        //     (this.dialogues.push("http://bing.com/" + response.data.images[0].url)
        // )
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
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
