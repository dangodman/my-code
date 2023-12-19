import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("@/views/home/Index.vue"),
  },
  {
    path:"/item",
    component:()=>import("@/views/item/Index.vue"), 
  },
  {
    path:"/score",
    component:()=>import("@/views/score/Index.vue"), 
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
