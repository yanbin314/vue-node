import VueRouter from 'vue-router'
import Vue from 'vue'
import home from '../components/home.vue'
import about from '../components/about.vue'
import user from '../components/user.vue'
//注入插件
Vue.use(VueRouter);

// 定义路由
const routes = [
  {
    path: '',
    // 重定向
    redirect: '/home',
    component: home,
  },
  {
    path: '/home',
    component: home,
  },
  {
    path: '/about',
    component: about,
  },
  {
    path: '/user/:id',
    component: user,
  }
];

// 创建louter实例
const router =  new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'yyb',
})

// 导出实例
export default router;