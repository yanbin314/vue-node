<template>
  <div id="app">
    <button v-on:click="linkHome">首页</button>
    <button v-on:click="linkAbout">关于</button>
    <router-link tag="button" :to="'/user/'+userId">用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'LLLL123',
    }
  },
  methods: {
    linkHome() {
      if (this.$route.fullPath === '/home') {
        return;
      }
      this.$router.push('/home');
    },
    linkAbout() {
      if (this.$route.fullPath === '/about') {
        return;
      }
      this.$router.push('/about');
    },
  },
}
</script>

<style>

</style>