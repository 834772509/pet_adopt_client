<template>
  <div class="home">
    <!-- 轮播图 -->
    <swipe />

    <!-- 宠物类别选项卡 -->
    <van-tabs
      color="#39a9ed"
      v-model:active="currentCategory"
      offset-top="40px"
      swipeable
      sticky
      @click-tab="onClickTab"
    >
      <van-tab
        v-for="category in petsCategory"
        :key="category.name"
        :title="category.name"
        :name="category.id"
      >
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model:loading="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <pet-item
              v-for="pet in homeStore.petsData[currentCategory - 1]?.list || []"
              :key="pet.id"
              :info="pet"
              @click="router.push('/pets/' + pet.id)"
            />
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useHomeStore } from "@/stores";
import swipe from "./components/swipe.vue";
import PetItem from "./components/pet-item.vue";

const router = useRouter();
const homeStore = useHomeStore();

const currentCategory = ref(homeStore.currentCategory);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

// 处理宠物类别数据
homeStore.getPetCategory();
const petsCategory = computed(() => homeStore.category);

// 获取宠物列表
homeStore.getPetList();

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
    homeStore.petsData[currentCategory.value - 1].currentPage = 0;
    homeStore.petsData[currentCategory.value - 1].list.splice(0);
    refreshing.value = false;
  }

  const oldPage =
    homeStore.petsData[currentCategory.value - 1]?.currentPage || 0;

  // 加载数据
  homeStore.getPetList().then(() => {
    loading.value = false;
    // 判断数据是否加载完毕
    if (
      oldPage === homeStore.petsData[currentCategory.value - 1]?.currentPage
    ) {
      finished.value = true;
    } else {
      finished.value = false;
    }
  });
};

// 宠物类别点击事件
const onClickTab = () => {
  homeStore.currentCategory = currentCategory.value;
  homeStore.getPetList();
};
</script>

<style scoped></style>
