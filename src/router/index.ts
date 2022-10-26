import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        showTabBar: true,
      },
      component: HomeView,
    },
    {
      path: "/mine",
      name: "mine",
      meta: {
        showTabBar: true,
      },
      component: () => import("../views/mine/mine.vue"),
    },
    {
      path: "/publish",
      name: "publish",
      meta: {
        showTabBar: true,
      },
      component: () => import("../views/publish/publish.vue"),
    },
    {
      path: "/register",
      name: "register",
      meta: {
        showTabBar: false,
      },
      component: () => import("../views/register/register.vue"),
    },
    {
      path: "/login",
      name: "login",
      meta: {
        showTabBar: true,
      },
      component: () => import("../views/login/login.vue"),
    },
    {
      name: "notFound",
      path: "/:pathMatch(.*)*",
      meta: {
        showTabBar: true,
      },
      component: () => import("@/views/not-found/not-found.vue"),
    },
  ],
});

export default router;
