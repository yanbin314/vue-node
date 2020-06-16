<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-item activeColor="blue" path="/home">
        <img slot="item-img" src="./assets/img/home.svg" />
        <img slot="item-img-active" src="./assets/img/home_active.svg" />
        <div slot="item-text">首页</div>
      </tab-item>
      <tab-item activeColor="blue" path="/cate">
        <img slot="item-img" src="./assets/img/category.svg" />
        <img slot="item-img-active" src="./assets/img/category_active.svg" />
        <div slot="item-text">分类</div>
      </tab-item>
      <tab-item activeColor="blue" path="/cart">
        <img slot="item-img" src="./assets/img/shopcart.svg" />
        <img slot="item-img-active" src="./assets/img/shopcart_active.svg" />
        <div slot="item-text">购物车</div>
      </tab-item>
      <tab-item activeColor="blue" path="/profile">
        <img slot="item-img" src="./assets/img/profile.svg" />
        <img slot="item-img-active" src="./assets/img/profile_active.svg" />
        <div slot="item-text">我的</div>
      </tab-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/tabbar.vue'
import TabItem from './components/tabbar/tabitem.vue'

export default {
  name: 'App',
  components: {
    TabBar,
    TabItem
  }
}
</script>

<style>
  @import './assets/css/base.css';
  #app {
    width: 100%;
  }
</style>
