<template>
  <div id="app">
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
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
