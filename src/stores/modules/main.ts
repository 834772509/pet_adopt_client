import { defineStore } from "pinia";
import { accountLoginRequest, requestUserInfoById } from "@/services";
import localCache from "@/utils/cache";
import router from "@/router";

export const useMainStore = defineStore("main", {
  state: () => ({
    token: "",
    // 用户信息
    userInfo: {} as any,
    // 是否显示加载框
    showLoading: false,
  }),
  actions: {
    async accountLoginAction(username: string, password: string) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(username, password);

      const { id, token, expiresAt } = loginResult.data;
      this.token = token;

      localCache.setCache("token", token);
      localCache.setCache("expiresAt", expiresAt);

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id);
      this.userInfo = userInfoResult.data;
      localCache.setCache("userInfo", userInfoResult.data);

      // 4. 返回上一级路由
      // router.push("/");
      router.back();
    },
    loadLocalLogin() {
      const expiresAt = localCache.getCache("expiresAt");
      if (expiresAt && new Date().getTime() > new Date(expiresAt).getTime()) {
        // token 已过期，清除本地 token
        localCache.clearCacke();
        return;
      }

      const token = localCache.getCache("token");
      if (token) {
        this.token = token;
      }
      const userInfo = localCache.getCache("userInfo");
      if (userInfo) {
        this.userInfo = userInfo;
      }
    },
  },
});
