<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link v-bind:to="'/user/'+iid" tag="button">用户</router-link>
    <router-link v-bind:to="{
      path: '/profile',
      query: {
        name: 'yyb',
        age: 20,
      }
    }">档案</router-link>
    <!-- <button @click="toGo">asd</button> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      iid: 236
    }
  },
  methods: {
    toGo() {
      this.$router.push({
        path: '/profile/' + 123,
        query: {
          name: 'yyb',
          age: 20,
        }
      })
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
