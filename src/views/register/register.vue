<template>
  <div class="register">
    <img class="logo" src="@/assets/images/logo.png" alt="logo" />
    <h3>注册用户</h3>

    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="account.name"
          name="name"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="account.password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          clearable
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="account.age"
          type="number"
          name="age"
          label="年龄"
          placeholder="请输入年龄"
          :rules="[{ required: true, message: '请输入年龄' }]"
        />

        <van-field name="sex" label="性别">
          <template #input>
            <van-radio-group v-model="account.sex" direction="horizontal">
              <van-radio :name="1">男</van-radio>
              <van-radio :name="0">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field
          v-model="account.telephone"
          type="tel"
          label="手机号"
          placeholder="请输入手机号"
          required
        />
        <van-field
          v-model="account.wechat"
          label="微信号"
          placeholder="请输入微信号"
          required
        />
      </van-cell-group>

      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { Dialog } from "vant";
import "vant/es/dialog/style";
import { registerUser } from "@/services/";

const account = reactive({
  name: "",
  password: "",
  age: null as unknown as number,
  sex: null,
  telephone: "",
  wechat: "",
});

const router = useRouter();

const onSubmit = () => {
  registerUser({ ...account })
    .then(() => {
      Dialog.alert({
        message: "注册成功",
      }).then(() => {
        router.replace("/login");
      });
    })
    .catch(() => {
      Dialog.alert({
        message: "注册失败，请确认填写的信息是否正确",
      });
    });
};
</script>

<style lang="less" scoped>
.register {
  height: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center; //子元素水平居中
  align-items: center; //子元素垂直居中
  display: flex;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  .logo {
    display: block;
    width: 10rem;
    height: 10rem;
  }
}
</style>
