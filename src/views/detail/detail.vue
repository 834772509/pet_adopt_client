<template>
  <div class="detail">
    <!-- 宠物图片 -->
    <pictures :list="JSON.parse(petInfo.pictures || '[]')" />

    <div class="content">
      <!-- 头部信息栏 -->
      <my-header :info="petInfo" />

      <!-- 分割线 -->
      <van-divider style="bordercolor: #8591a9" />

      <!-- 宠物描述 -->
      <depict :description="petInfo.description" />
    </div>

    <!-- 底部动作栏 -->
    <van-action-bar placeholder>
      <van-action-bar-icon icon="star-o" text="收藏" />
      <van-action-bar-icon
        icon="share-o"
        text="分享"
        @click="showShare = true"
      />
      <van-action-bar-button type="primary" text="申请领养" />
    </van-action-bar>

    <!-- 分享面板 -->
    <share v-model:show="showShare" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { getPetsInfo } from "@/services";
import share from "@/components/share/share.vue";
import pictures from "./components/pictures.vue";
import myHeader from "./components/header.vue";
import depict from "./components/depict.vue";

const petInfo = ref({}) as any;
const showShare = ref(false);

const route = useRoute();
const { id } = route.params;

getPetsInfo(Number(id)).then((res) => {
  petInfo.value = res.data;
});
</script>

<style lang="less" scoped>
.detail {
  width: 100%;
  height: 100%;
  .content {
    position: relative;
    border-radius: 24px 24px 0 0;
    margin-top: -32px;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
}
</style>
