<template>
  <div>
    <p>主页</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/msg">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'home',
  data(){
   return {
     path: '/home/news',
     da: 0,
   }
  },
  // created() {
  //   console.log('home-created');
  // },
  // 被keep-alive缓存的组件激活时调用
  activated() {
    this.$router.push(this.path);
    console.log(this.path);
  },
  updated() {
    if (this.$route.matched[0].path === "/home") {
      this.path = this.$route.path;
      console.log(this.$route.path);
    }
  },
  // 使用keep-alive 不会执行
  // destroyed() {
  //   console.log('home-destroyed');
  // },
}
</script>

<style scoped>

</style>
