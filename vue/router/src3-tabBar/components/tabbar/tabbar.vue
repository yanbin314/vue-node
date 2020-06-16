<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'tabbar',
  data(){
   return {
   }
  },
}
</script>

<style scoped>
  .tab-bar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 49px;
    background: #f3f3f3;
    box-shadow: 0 -2px 1px rgba(100,100,100,.2);
  }
</style>
