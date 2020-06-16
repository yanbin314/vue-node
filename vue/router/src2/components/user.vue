<template>
  <div>
    <h2>用户名:{{getID}}</h2>
  </div>
</template>

<script>
export default {
  name:'user',
  computed: {
    getID() {
      return this.$route.params.did;
    },
  },
}

</script>

<style scoped>

</style>
