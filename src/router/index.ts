import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/mine",
      name: "mine",
      component: () => import("../views/mine/mine.vue"),
    },
    {
      path: "/publish",
      name: "publish",
      component: () => import("../views/publish/publish.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login/login.vue"),
    },
    {
      name: "notFound",
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/not-found/not-found.vue"),
    },
  ],
});

export default router;
