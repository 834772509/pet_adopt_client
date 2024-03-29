<template>
  <div class="home">
    <!-- 轮播图 -->
    <swipe />

    <van-notice-bar
      left-icon="volume-o"
      color="#1989fa"
      background="#ecf9ff"
      text="本平台为演示项目，所有数据均来源于互联网，仅供学习和研究使用。"
    />

    <!-- 功能模块 -->
    <van-grid :column-num="3">
      <van-grid-item
        icon-color="#1989fa"
        icon-size="35"
        icon="column"
        text="失信名单"
        to="/blacklist"
      />
      <van-grid-item
        icon-color="#1989fa"
        icon-size="35"
        icon="question"
        text="智能识宠"
        @click="handleIdentifyPet"
      />
      <van-grid-item
        icon-color="#1989fa"
        icon-size="35"
        icon="thumb-circle"
        text="支持我们"
        to="/support"
      />
    </van-grid>

    <!-- 宠物识别框 -->
    <recognition-picker ref="recognitionRef" />

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
          :immediate-check="false"
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
import { ref, computed } from "vue";
import { useHomeStore } from "@/stores";
import swipe from "./components/swipe.vue";
import PetItem from "../../components/pet-item/pet-item.vue";
import recognitionPicker from "./components/recognition-picker.vue";

const homeStore = useHomeStore();

const currentCategory = ref(homeStore.currentCategory);
const loading = ref(true);
const finished = ref(true);
const refreshing = ref(false);

const recognitionRef = ref();

// 处理宠物类别数据
homeStore.getPetCategory();
const petsCategory = computed(() => homeStore.category);

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

  const oldPage = homeStore.currentPage;

  // 加载数据
  homeStore.getPetList().then(() => {
    loading.value = false;
    finished.value = homeStore.currentPage === oldPage;
  });
};

// 宠物类别点击事件
const onClickTab = () => {
  homeStore.currentCategory = currentCategory.value;
  refreshing.value = true;
  onRefresh();
};

// 智能识宠点击事件
const handleIdentifyPet = () => {
  recognitionRef.value!.showRecognition = true;
};

onLoad();
</script>

<style scoped></style>
