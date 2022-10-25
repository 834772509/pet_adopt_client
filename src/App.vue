<template>
  <div class="tab-bar">
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item replace to="/publish" icon="guide-o">
        发布
      </van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>

  <RouterView />
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
</script>

<style scoped></style>
