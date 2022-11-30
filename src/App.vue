<template>
  <div class="app">
    <!-- 顶部导航栏 -->
    <nav-bar />

    <!-- App内容 -->
    <router-view v-slot="{ Component }">
      <keep-alive :exclude="excludeList">
        <transition :enter-active-class="$route.meta.transition">
          <component :is="Component" />
        </transition>
      </keep-alive>
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
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import NavBar from "@/components/nav-bar/nav-bar.vue";
import TabBar from "@/components/tab-bar/tab-bar.vue";
import Loading from "@/components/loading/loading.vue";
import BackTop from "@/components/backtop/backtop.vue";

// 缓存页面排除列表
const excludeList = ref([] as any[]);

const route = useRoute();
watch(
  () => route.meta.keepAlive,
  (keepAlive) => {
    if (keepAlive === false) {
      !excludeList.value.includes(route.name) &&
        excludeList.value.push(route.name);
    }
  }
);
</script>

<style lang="less" scoped>
.app {
  --animate-duration: 0.5s;
  height: 100%;
  // background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}
</style>
