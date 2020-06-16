<template>
  <div>
    <h2>个人信息</h2>
    <h3>{{q}}</h3>
    <p v-for="item of quu">{{item}}</p>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data(){
   return {
     quu: this.$route.query,
     q: 0,
   }
  },
  updated() {
    console.log(this.q);
  },
  activated() {
    this.q++;
  },
}
</script>

<style scoped>

</style>
