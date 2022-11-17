<template>
  <div class="support">
    <img class="logo" src="@/assets/images/logo.png" />
    <div class="title">拾宠 - 宠物领养平台</div>
    <van-cell-group inset>
      <van-cell title="微信账号" value="xxxxxx" />
      <van-cell title="支付宝账号" value="xxxxxx" />
      <van-cell title="银行账号" value="xxxxxx" />
      <van-cell title="开户银行" value="xxxxxx" />
    </van-cell-group>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.support {
  margin-top: 10px;

  .logo {
    display: block;
    margin: 0 auto;
    width: 150px;
  }
  .title {
    margin: 20px;
    text-align: center;
    font-size: 18px;
  }
}
</style>
