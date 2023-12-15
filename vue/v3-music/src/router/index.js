// 完成路由配置 url => component
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    // App.vue 用来挂载的 不是用来写具体的
    component: () => import("@/views/Root.vue"),
    redirect:{name:"discover"},
    children:[
      {
        path:'discover',
        name:'discover',
        component:()=>import('@/views/discover/Discover.vue')
      }
    ]
   },
];

const router = createRouter({
  // PC 兼容性
  history: createWebHistory(),
  routes
})

export default router
