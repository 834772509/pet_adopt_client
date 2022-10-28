import { defineStore } from "pinia";
import { accountLoginRequest, requestUserInfoById } from "@/services";
import localCache from "@/utils/cache";
import router from "@/router";

export const useLoginStore = defineStore("login", {
  state: () => ({
    token: "",
    userInfo: {} as any,
  }),
  actions: {
    async accountLoginAction(username: string, password: string) {
      // 1.实现登录逻辑
      // return new Promise(async (resolve, reject) => {
      const loginResult = await accountLoginRequest(username, password);

      const { id, token } = loginResult.data;
      this.token = token;
      localCache.setCache("token", token);

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id);
      this.userInfo = userInfoResult.data;
      localCache.setCache("userInfo", userInfoResult);

      // 4. 跳转到首页
      router.push("/");

      // resolve("login success");
      // });
    },
    loadLocalLogin() {
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
