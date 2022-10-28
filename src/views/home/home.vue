<template>
  <div class="home">
    <!-- 轮播图 -->
    <swipe />
    <!-- 宠物类别选项卡 -->
    <van-tabs
      color="#39a9ed"
      v-model:active="active"
      offset-top="2.5rem"
      sticky
    >
      <van-tab
        v-for="category in petsCategory"
        :key="category.name"
        :title="category.name"
      >
        {{ category.name }}
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useHomeStore } from "@/stores";
import swipe from "./components/swipe.vue";

const active = ref(0);

const homeStore = useHomeStore();
homeStore.getPetCategory();

const petsCategory = computed(() => homeStore.category);
</script>

<style scoped></style>
