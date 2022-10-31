import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "拾宠 - 宠物领养平台",
        showCityPicker: true,
        showTabBar: true,
      },
      component: HomeView,
    },
    {
      path: "/pets/:id",
      name: "detail",
      meta: {
        title: "宠物详情",
        showTabBar: false,
      },
      component: () => import("../views/detail/detail.vue"),
    },
    {
      path: "/mine",
      name: "mine",
      meta: {
        title: "我的",
        showTabBar: true,
      },
      component: () => import("../views/mine/mine.vue"),
    },
    {
      path: "/publish",
      name: "publish",
      meta: {
        title: "送养宠物信息",
        showTabBar: true,
      },
      component: () => import("../views/publish/publish.vue"),
    },
    {
      path: "/register",
      name: "register",
      meta: {
        title: "注册账户",
        showTabBar: false,
      },
      component: () => import("../views/register/register.vue"),
    },
    {
      path: "/login",
      name: "login",
      meta: {
        title: "登录账户",
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
