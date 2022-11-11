<template>
  <div class="home">
    <!-- 轮播图 -->
    <swipe />

    <!-- 宠物类别选项卡 -->
    <van-tabs
      color="#39a9ed"
      v-model:active="currentCategory"
      offset-top="40px"
      sticky
      @click-tab="onClickTab"
    >
      <van-tab
        v-for="category in petsCategory"
        :key="category.name"
        :title="category.name"
        :name="category.id"
      >
      </van-tab>

      <!-- 宠物列表 -->
      <van-empty
        v-if="homeStore.petsList.length === 0"
        description="暂无宠物"
      />
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          :finished-text="homeStore.petsList.length === 0 ? '' : '没有更多了'"
          @load="onLoad"
        >
          <pet-item
            v-for="pet in homeStore.petsList"
            :key="pet.id"
            :info="pet"
            @click="$router.push('/pets/' + pet.id)"
          />
        </van-list>
      </van-pull-refresh>
    </van-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, toRef } from "vue";
import { useHomeStore } from "@/stores";
import swipe from "./components/swipe.vue";
import PetItem from "../../components/pet-item/pet-item.vue";

const homeStore = useHomeStore();

const currentCategory = ref(homeStore.currentCategory);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

// 处理宠物类别数据
homeStore.getPetCategory();
const petsCategory = computed(() => homeStore.category);

watch(toRef(homeStore, "currentPage"), (currentPage, oldPage) => {
  finished.value = currentPage === oldPage;
});

// 上拉刷新事件
const onRefresh = () => {
  // 清空列表数据
  finished.value = false;
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  // 重新加载数据
  onLoad();
};

// 下拉加载更多事件
const onLoad = () => {
  if (refreshing.value) {
    homeStore.currentPage = 0;
    homeStore.petsList.splice(0);
    refreshing.value = false;
  }

  // 加载数据
  homeStore.getPetList().then(() => {
    loading.value = false;
  });
};

// 宠物类别点击事件
const onClickTab = () => {
  homeStore.petsList.splice(0);
  homeStore.currentPage = 0;
  homeStore.currentCategory = currentCategory.value;
  homeStore.getPetList();
};
</script>

<style scoped></style>
