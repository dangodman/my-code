import {createRouter,createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),   // 路由history模式  hash模式
    routes: [
    {path:'/',redirect:'/home'},
    {path:'/home', component: import('../views/Home.vue'),children:[
      {path:'/home',redirect:'/home/newest'},
      {path:'newest', component:import('../views/homeChild/Newest.vue')},
      {path:'recommend', component:import('../views/homeChild/Recommend.vue')},
    ]},
    {path:'/about', component: import('../views/About.vue')}
       
  ]
  })

export default router 