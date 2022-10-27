<template>
  <van-nav-bar
    :title="route.meta.title as string || ''"
    :left-arrow="route.meta.showTabBar !== true"
    @click-left="router.back()"
  />
  <div class="app">
    <RouterView />
  </div>
  <div class="tab-bar" v-show="route.meta.showTabBar !== false">
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item replace to="/publish" icon="guide-o">
        发布
      </van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts" setup>
import { RouterView, useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
</script>

<style lang="less" scoped>
.app {
  height: 100%;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}
</style>
