<template>
  <div class="me">
      <div class="title">
      <div class="left">
        &lt;返回
      </div>
      {{$route.query.title}}
      <div class="right">
        设置
      </div>
    </div>

    <h1>{{ msg }}</h1>
    <h2>test</h2>
    <div class="content">
        设置主页
    </div>
  </div>
</template>

<script>
export default {
  name: 'me',
  data () {
    return {
      msg: 'index'
    }
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
a {
  color: red;
}

</style>
