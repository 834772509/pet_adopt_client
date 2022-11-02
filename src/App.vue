<template>
  <div class="app">
    <!-- 顶部导航栏 -->
    <tab-bar />

    <!-- App内容 -->
    <router-view v-slot="{ Component }">
      <keep-alive :exclude="['detail']">
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <!-- 底部导航栏 -->
    <nav-bar />

    <!-- 加载框 -->
    <loading />
  </div>
</template>

<script lang="ts" setup>
import NavBar from "@/components/nav-bar/nav-bar.vue";
import TabBar from "@/components/tab-bar/tab-bar.vue";
import Loading from "@/components/loading/loading.vue";
</script>

<style lang="less" scoped>
.app {
  height: 100%;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}
</style>
