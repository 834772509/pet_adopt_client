<template>
  <div class="home">
    <!-- 轮播图 -->
    <swipe />

    <!-- 宠物类别选项卡 -->
    <van-tabs
      color="#39a9ed"
      v-model:active="currentCategory"
      offset-top="2.5rem"
      sticky
    >
      <van-tab
        v-for="category in petsCategory"
        :key="category.name"
        :title="category.name"
      >
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <pet-item
            v-for="pet in homeStore.petsList"
            :key="pet.id"
            :info="pet"
          />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useHomeStore } from "@/stores";
import swipe from "./components/swipe.vue";
import PetItem from "./components/pet-item.vue";

const currentCategory = ref(0);
const homeStore = useHomeStore();
const loading = ref(false);
const finished = ref(false);

// 处理宠物类别数据
homeStore.getPetCategory();
const petsCategory = computed(() => homeStore.category);

homeStore.getPetList();

const onLoad = () => {
  const oldLength = homeStore.petsList.length;
  homeStore.getPetList().then(() => {
    loading.value = false;
    if (oldLength == homeStore.petsList.length) {
      finished.value = true;
    }
  });
};
</script>

<style scoped></style>
