<template>
  <div>
    <van-tabs
      color="#39a9ed"
      v-model:active="active"
      offset-top="40px"
      @change="onChangeTab"
      sticky
    >
      <van-tab title="待初核"></van-tab>
      <van-tab title="待审核"></van-tab>
      <van-tab title="已领养"></van-tab>

      <van-empty v-if="dataList.length === 0" description="无领养数据" />
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          :finished-text="dataList.length === 0 ? '' : '没有更多了'"
          :immediate-check="false"
          @load="onLoad"
        >
          <van-swipe-cell v-for="item in dataList" :key="item.id">
            <pet-item
              :info="item.pet"
              @click="$router.push('/pets/' + item.id)"
            />
          </van-swipe-cell>
        </van-list>
      </van-pull-refresh>
    </van-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useMainStore } from "@/stores";
import { useLoadData } from "@/hooks";
import { getAdoptList } from "@/services";
import PetItem from "@/components/pet-item/pet-item.vue";

const mainStore = useMainStore();
const active = ref(0);

const { dataList, loading, finished, refreshing, onRefresh, onLoad } =
  useLoadData((currentPage) =>
    getAdoptList({
      userId: mainStore.userInfo.id,
      state: active.value - 1,
      offset: currentPage * 10,
      size: 10,
    }).then((res) => res.data.list)
  );

// 标签页改变事件
const onChangeTab = () => {
  refreshing.value = true;
  onRefresh();
};

onLoad();

// const applyList = ref([] as any[]);
// const loading = ref(false);
// const finished = ref(false);
// const refreshing = ref(false);
// let currentPage = 0;

// 上拉刷新事件
// const onRefresh = () => {
//   // 清空列表数据
//   finished.value = false;
//   // 将 loading 设置为 true，表示处于加载状态
//   loading.value = true;
//   // 重新加载数据
//   onLoad();
// };

// 下拉加载更多事件
// const onLoad = () => {
//   if (refreshing.value) {
//     currentPage = 0;
//     applyList.value.splice(0);
//     refreshing.value = false;
//   }

//   // 加载数据
//   getApplyAdoptList({
//     userId: mainStore.userInfo.id,
//     state: active.value,
//     offset: currentPage * 10,
//     size: 10,
//   }).then((res) => {
//     if (res.data.list.length > 0) {
//       applyList.value.push(...res.data.list);
//       currentPage++;
//       finished.value = false;
//     } else {
//       finished.value = true;
//     }
//     loading.value = false;
//   });
// };
</script>

<style lang="less" scoped></style>
