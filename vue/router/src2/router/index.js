import Vue from 'vue'
import VueRrouter from 'vue-router'
const home = () => import('../components/home.vue');
const about = () => import('../components/about.vue');
const user = () => import('../components/user.vue');
const message = () => import('../components/homeMessage.vue');
const news = () => import('../components/homeNews.vue');
const profile = () => import('../components/profile.vue')

Vue.use(VueRrouter);

const routes = [
  {
    path: '',
    redirect: '/home',
    component: home,
  },
  {
    path: '/home',
    component: home,
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path: '',
      //   redirect: 'news',
      //   component: news,
      // },
      {
        path: 'news',
        meta: {
          title: '新闻'
        },
        component: news,
      },
      {
        path: 'msg',
        meta: {
          title: '消息'
        },
        component: message,
      }
    ],
  },
  {
    path: '/about',
    component: about,
    meta: {
      title: '关于',
    },
  },
  {
    path: '/user/:did',
    component: user,
    meta: {
      title: '用户',
    }
  },
  {
    path: '/profile',
    component: profile,
  }
];

const router = new VueRrouter({
  routes,
  mode: 'history'
});

router.beforeEach( (to, from, next) => {
  // console.log(to);
  switch (to.matched.length) {
    case 1 :
      document.title = to.meta.title;
      break;
    default :
      document.title = `${to.matched[0].meta.title}|${to.matched[1].meta.title}`;
  }
  next();
})

export default router;