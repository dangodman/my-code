import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path:"/",
    redirect:'/noteclass'
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
    meta:{
      title:'登录'
    }
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register.vue"),
    meta:{
      title:'注册'
    }
  },
  {
    path: "/noteclass",
    name: "noteclass",
    component: () => import("../views/NoteClass.vue"),
    meta:{
      title:'笔记分类'
    }
  },
  {
    path:'/noteList',
    name: "noteList",
    component: () => import("../views/NoteList.vue"),
    meta:{
      title:'笔记列表'
    }
  },
  {
    path: "/notedetail",
    name: "noteDetail",
    component: () => import("../views/NoteDetail.vue"),
    meta:{
      title:'笔记详情'
    }
  },
  {
    path:'/notePublish',
    name: "notePublish",
    component: () => import("../views/NotePublish.vue"),
    meta:{
      title:'笔记发布'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由守卫
const whitePath = ['/login','/register']
router.beforeEach((to, from, next) => { 
  document.title = to.meta.title
  if(!whitePath.includes(to.path)){  // 你想去详情页
    if(!sessionStorage.getItem('userInfo')){  // 没登录
      router.push('/login')
      return 
    }
    next()
    return 
  }
  next()
});

export default router;