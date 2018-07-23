<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <h2>test</h2>
    <div class="content">

    </div>
    <router-view></router-view>
    <div class="nav">
        <ul>
            <li>
            <router-link to="/home">home</router-link>
            </li>
            <li>
            <router-link to="/news">新闻</router-link>
            </li>
            <li>
            <router-link to="/me">我</router-link>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'index'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.nav{
    width:100%;
    background-color:green;
    color:black;
    position:fixed;
    bottom : 0;
    display:flex;
    justify-content:center;
    align-items:center;
}
.nav li a{
    color:black;
}
</style>
