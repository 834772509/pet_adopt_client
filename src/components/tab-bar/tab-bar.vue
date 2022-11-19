<template>
  <div class="tab-bar" v-show="$route.meta.showTabBar !== false">
    <van-tabbar placeholder route>
      <van-tabbar-item replace to="/home" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item replace to="/publish" icon="guide-o">
        发布
      </van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
