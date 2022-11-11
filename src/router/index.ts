import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/home.vue";
import localCache from "@/utils/cache";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      meta: {
        title: "拾宠 - 宠物领养平台",
        showCityPicker: true,
        showTabBar: true,
        needLogin: false,
      },
      component: HomeView,
    },
    {
      path: "/pets/:id",
      name: "detail",
      meta: {
        title: "宠物详情",
        showTabBar: false,
        needLogin: false,
        keepAlive: false,
      },
      component: () => import("../views/detail/detail.vue"),
    },
    {
      path: "/pets/:id/adopt",
      name: "adopt",
      meta: {
        title: "宠物领养申请",
        showTabBar: false,
      },
      component: () => import("../views/adopt/adopt.vue"),
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
      path: "/mine/stars",
      name: "stars",
      meta: {
        title: "我的收藏",
        showTabBar: false,
        keepAlive: false,
      },
      component: () => import("../views/mine/views/stars/stars.vue"),
    },
    {
      path: "/mine/agreement",
      name: "agreement",
      meta: {
        title: "领养协议",
        showTabBar: false,
      },
      component: () => import("../views/mine/views/agreement/agreement.vue"),
    },
    {
      path: "/mine/contact",
      name: "contact",
      meta: {
        title: "联系我们",
        showTabBar: false,
      },
      component: () => import("../views/mine/views/contact/contact.vue"),
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
        needLogin: false,
      },
      component: () => import("../views/register/register.vue"),
    },
    {
      path: "/login",
      name: "login",
      meta: {
        title: "登录账户",
        showTabBar: true,
        needLogin: false,
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

// 导航守卫
router.beforeEach((to) => {
  if (to.meta.needLogin !== false) {
    const token = localCache.getCache("token");
    if (!token) {
      return "/login";
    }
  }
});

export default router;
