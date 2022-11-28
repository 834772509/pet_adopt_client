<template>
  <div class="stars-list">
    <van-empty v-if="starsList.length === 0" description="暂无收藏" />
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        :finished-text="starsList.length === 0 ? '' : '没有更多了'"
        :immediate-check="false"
        @load="onLoad"
      >
        <van-swipe-cell v-for="(item, index) in starsList" :key="item.id">
          <pet-item :info="item" @click="$router.push('/pets/' + item.id)" />
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
              @click="handleDeleteStar(index, item.id)"
            />
          </template>
        </van-swipe-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script setup lang="ts">
import { getStarsPetList, cancelStarsPet } from "@/services";
import petItem from "@/components/pet-item/pet-item.vue";
import { useLoadData } from "@/hooks";
import { Toast } from "vant";

const {
  dataList: starsList,
  loading,
  finished,
  refreshing,
  onRefresh,
  onLoad,
} = useLoadData((currentPage: number) =>
  getStarsPetList({
    offset: currentPage * 10,
    size: 10,
  }).then((res) => res.data.list)
);

// 删除宠物收藏事件
const handleDeleteStar = (index: number, id: number) => {
  cancelStarsPet(id).then(() => {
    starsList.value.splice(index, 1);
  });
  Toast("已取消收藏");
};

onLoad();

// const starsList = ref([] as any[]);
// const loading = ref(false);
// const finished = ref(false);
// const refreshing = ref(false);

// let currentPage = 0;

// // 上拉刷新事件
// const onRefresh = () => {
//   // 清空列表数据
//   finished.value = false;
//   // 将 loading 设置为 true，表示处于加载状态
//   loading.value = true;
//   // 重新加载数据
//   onLoad();
// };

// // 下拉加载更多事件
// const onLoad = () => {
//   if (refreshing.value) {
//     currentPage = 0;
//     starsList.value.splice(0);
//     refreshing.value = false;
//   }

//   // 加载数据
//   getStarsPetList({
//     offset: currentPage * 10,
//     size: 10,
//   }).then((res) => {
//     if (res.data.list.length > 0) {
//       starsList.value.push(...res.data.list);
//       currentPage++;
//       finished.value = false;
//     } else {
//       finished.value = true;
//     }
//     loading.value = false;
//   });
// };
</script>

<style lang="less" scoped>
.stars-list {
  .delete-button {
    height: 100%;
  }
}
</style>
