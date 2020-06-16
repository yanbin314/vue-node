<template>
  <div class="tab-item" v-on:click="itemClick">

    <div v-show="!isActive">
      <slot name="item-img"></slot>
    </div>
    <div v-show="isActive">
      <slot name="item-img-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div> 

  </div>
</template>

<script>
export default {
  name:'tab-item',
  data(){
   return {
    //  isActive: true,
   }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'deepPink',
    }
  },
  computed: {
    isActive() {
      return this.$route.path === this.path;
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {};
    },
  },
  methods: {
    itemClick() {
      if (this.$route.path !== this.path) {
        this.$router.push(this.path);
      }
    },
  }
}
</script>

<style scoped>
  .tab-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
