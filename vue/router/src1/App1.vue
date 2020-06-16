<template>
  <div id="app">
    <router-link to="/home" tag="div" replace>home</router-link>
    <router-view id="qqq"></router-view>
    <router-link to="/about" tag="div" replace>about</router-link>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#qqq {
  color: aqua;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
