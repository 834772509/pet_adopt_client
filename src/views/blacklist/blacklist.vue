<template>
  <div class="blacklist">
    <van-empty v-if="blacklist.length === 0" description="暂无失信人名单" />
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        :finished-text="blacklist.length === 0 ? '' : '没有更多了'"
        @load="onLoad"
      >
        <van-swipe-cell v-for="item in blacklist" :key="item.id">
          <blacklist-item
            :info="item"
            @click="$router.push('/blackdetail/' + item.id)"
          />
          <!-- <hr /> -->
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
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getBlackList } from "@/services";
import BlacklistItem from "./components/blacklist-item.vue";

const blacklist = ref([] as any[]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

let currentPage = 0;

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
    currentPage = 0;
    blacklist.value.splice(0);
    refreshing.value = false;
  }

  // 加载数据
  getBlackList({
    offset: currentPage * 10,
    size: 10,
  }).then((res) => {
    if (res.data.list.length > 0) {
      blacklist.value.push(...res.data.list);
      currentPage++;
      finished.value = false;
    } else {
      finished.value = true;
    }
    loading.value = false;
  });
};
</script>

<style lang="less" scoped>
.blacklist {
}
</style>
