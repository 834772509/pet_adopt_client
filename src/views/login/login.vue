<template>
  <div class="login">
    <img class="logo" src="@/assets/images/logo.png" alt="logo" />
    <h3>登录账户</h3>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          clearable
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div class="action">
          <van-field name="isKeepPassword">
            <template #input>
              <van-checkbox v-model="isKeepPassword">记住密码</van-checkbox>
            </template>
          </van-field>
          <van-button
            class="btn-register"
            type="primary"
            size="small"
            url="/register"
            plain
            hairline
            >注册账号</van-button
          >
        </div>
      </van-cell-group>

      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import localCache from "@/utils/cache";
import { useLoginStore } from "@/stores";
import { Dialog } from "vant";
import "vant/es/dialog/style";

const isKeepPassword = ref(true);
const username = ref("");
const password = ref("");

const loginStore = useLoginStore();
const onSubmit = () => {
  if (isKeepPassword.value) {
    // 本地缓存
    localCache.setCache("name", username.value);
    localCache.setCache("password", password.value);
  } else {
    localCache.deleteCache("name");
    localCache.deleteCache("password");
  }
  loginStore
    .accountLoginAction(username.value, password.value)
    .then(() => {
      console.log("登录成功");
    })
    .catch(() => {
      console.log("账号或密码不正确");
      Dialog.alert({
        message: "账号或密码不正确",
      });
    });
};
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center; //子元素水平居中
  align-items: center; //子元素垂直居中
  display: flex;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  .logo {
    width: 10rem;
    height: 10rem;
  }

  .action {
    display: flex;
    justify-content: space-evenly;
    .btn-register {
      width: 6rem;
      margin-top: 0.25rem;
      margin-right: 0.5rem;
    }
  }
}
</style>
