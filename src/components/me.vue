<template>
  <div class="me">
      <div class="me">
          {{$route.query.cc}}
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
