import {createRouter,createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: '关于'
    },
    // 独享守卫
    // beforeEnter:(to,from,next) => {
    //   // console.log(to,from);
    // }
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes
})
// 全局的前置钩子
// router.beforeEach((to, from, next) => {
//   // console.log(to,from);
//   document.title = to.meta.title;
//   if(to.path !== '/'){
//     const isLogin = localStorage.getItem('isLogin');
//     if(isLogin){
//       next();
//     }else{
//       alert('你没登录就不允许跳到这个页面')
//       return
//     }
//   }
//   next()
// })


// router.beforeResolve((to,from,next) => {
//   console.log(to,from);
// })

router.afterEach((to,from) => {
  document.title = to.meta.title;
})


export default router