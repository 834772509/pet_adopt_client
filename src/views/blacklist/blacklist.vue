<template>
  <div class="blacklist">
    <van-tabs
      color="#39a9ed"
      v-model:active="blacklistType"
      @change="onChangeTab"
      offset-top="40px"
      sticky
    >
      <van-tab title="失信领养人"></van-tab>
      <van-tab title="失信送养人"></van-tab>
      <van-empty v-if="dataList.length === 0" description="暂无失信人名单" />

      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          :finished-text="dataList.length === 0 ? '' : '没有更多了'"
          :immediate-check="false"
          @load="onLoad"
        >
          <van-swipe-cell v-for="item in dataList" :key="item.id">
            <blacklist-item
              :info="item"
              @click="$router.push('/blacklist/' + item.id)"
            />
            <van-divider
              :style="{
                color: '#1989fa',
                borderColor: '#1989fa',
                margin: '0',
              }"
            />
          </van-swipe-cell>
        </van-list>
      </van-pull-refresh>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useLoadData } from "@/hooks";
import { getBlackList } from "@/services";
import BlacklistItem from "./components/blacklist-item.vue";

const blacklistType = ref(0);

const { dataList, loading, finished, refreshing, onRefresh, onLoad } =
  useLoadData((currentPage) =>
    getBlackList({
      type: blacklistType.value,
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

// const blacklist = ref([] as any[]);
// let currentPage = 0;
// const loading = ref(false);
// const finished = ref(false);
// const refreshing = ref(false);

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
//     blacklist.value.splice(0);
//     refreshing.value = false;
//   }

//   // 加载数据
//   getBlackList({
//     type: blacklistType.value,
//     offset: currentPage * 10,
//     size: 10,
//   }).then((res) => {
//     if (res.data.list.length > 0) {
//       blacklist.value.push(...res.data.list);
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
.blacklist {
}
</style>
