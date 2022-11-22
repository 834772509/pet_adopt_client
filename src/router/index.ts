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
      path: "/mine/adopt",
      name: "mineAdopt",
      meta: {
        title: "领养列表",
        showTabBar: false,
        keepAlive: false,
      },
      component: () => import("../views/mine/views/adopt/adopt.vue"),
    },
    {
      path: "/mine/publish",
      name: "minePublish",
      meta: {
        title: "送养列表",
        showTabBar: false,
        keepAlive: false,
      },
      component: () => import("../views/mine/views/publish/publish.vue"),
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
        needLogin: false,
        showTabBar: false,
      },
      component: () => import("../views/mine/views/contact/contact.vue"),
    },
    {
      path: "/support",
      name: "support",
      meta: {
        title: "支持我们",
        needLogin: false,
        showTabBar: false,
      },
      component: () => import("../views/support/support.vue"),
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
      path: "/blacklist",
      name: "blacklist",
      meta: {
        title: "失信黑名单",
        showTabBar: false,
        needLogin: false,
      },
      component: () => import("../views/blacklist/blacklist.vue"),
    },
    {
      path: "/blackdetail/:id",
      name: "blackdetail",
      meta: {
        title: "失信人信息",
        needLogin: false,
        showTabBar: false,
      },
      component: () => import("../views/black-detail/black-detail.vue"),
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

// 增加路由跳转动画
// router.afterEach((to, from) => {
//   const toDepth = to.path.split("/").length;
//   const fromDepth = from.path.split("/").length;

//   if (toDepth < fromDepth) {
//     to.meta.transition = "van-slide-right";
//   } else if (toDepth > fromDepth) {
//     to.meta.transition = "van-slide-left";
//   } else {
//     to.meta.transition = "";
//   }
// });

export default router;
