<template>
  <div class="apply">
    <van-tabs
      color="#39a9ed"
      v-model:active="active"
      offset-top="40px"
      @change="onChangeTab"
      sticky
    >
      <van-tab title="待审核"></van-tab>
      <van-tab title="已送养"></van-tab>
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
            <apply-item
              :id="item.id"
              :user="item.user"
              :pet="item.pet"
              @click="$router.push('/mine/apply/' + item.id)"
            />

            <!-- 滑动右侧操作栏 -->
            <!-- <template #right>
              <van-button
                square
                text="通过"
                type="primary"
                class="agree-button"
              />
            </template> -->
          </van-swipe-cell>
        </van-list>
      </van-pull-refresh>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useLoadData } from "@/hooks";
import { getApplyAdoptList } from "@/services";
import applyItem from "@/components/apply-item/apply-item.vue";

const active = ref(0);

// 标签页改变事件
const onChangeTab = () => {
  refreshing.value = true;
  onRefresh();
};

const { dataList, loading, finished, refreshing, onRefresh, onLoad } =
  useLoadData((currentPage) =>
    getApplyAdoptList({
      state: active.value,
      offset: currentPage * 10,
      size: 10,
    }).then((res) => res.data.list)
  );

onLoad();
</script>

<style lang="less" scoped>
.apply {
  background-color: #fff;
  height: 100%;

  .agree-button {
    height: 100%;
  }
}
</style>
