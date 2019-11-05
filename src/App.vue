<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* @import url("../static/font-awesome.css"); */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px;
  text-align: left;
}

*{
  margin: 0;
  padding: 0;
  list-style: none;
  outline: none;
}

.pageName{
  text-align: left;
  border-bottom: 1px solid #ccc;
  font-size: 18px;
  font-weight: 600;
  height: 40px;
  line-height: 40px;
}

.content{
  width: 100%;
  height: auto;
  min-height: 500px;
  border: 1px solid #CCC;
  margin-top: 20px;
  padding: 10px;
}

.title{
  text-align: left;
}


</style>
