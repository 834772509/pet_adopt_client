<template>
  <div class="app">
    <!-- 顶部导航栏 -->
    <nav-bar />

    <!-- App内容 -->
    <router-view v-slot="{ Component }">
      <transition :enter-active-class="$route.meta.transition">
        <keep-alive :exclude="['detail', 'stars']">
          <component :is="Component" /> </keep-alive
      ></transition>
    </router-view>

    <!-- 底部导航栏 -->
    <tab-bar />

    <!-- 加载框 -->
    <loading />

    <!-- 返回顶部按钮 -->
    <back-top />
  </div>
</template>

<script lang="ts" setup>
import NavBar from "@/components/nav-bar/nav-bar.vue";
import TabBar from "@/components/tab-bar/tab-bar.vue";
import Loading from "@/components/loading/loading.vue";
import backTop from "@/components/backtop/backtop.vue";
</script>

<style lang="less" scoped>
.app {
  --animate-duration: 0.5s;
  height: 100%;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}
</style>
