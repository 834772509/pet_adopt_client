<template>
  <div class="detail">
    <!-- 宠物图片 -->
    <pictures :list="JSON.parse(petInfo.pictures || '[]')" />

    <div class="content">
      <!-- 头部信息栏 -->
      <my-header :info="petInfo" />

      <!-- 分割线 -->
      <van-divider
        :hairline="false"
        :style="{ bordercolor: '#f6f8fc', padding: '0 10px' }"
      />

      <div class="title">TA的故事</div>
      <p class="description">{{ petInfo.description || "暂无描述信息" }}</p>

      <div class="title">领养要求</div>
      <p class="adoptRequirement">
        {{ petInfo.adoptRequirement || "暂无领养要求" }}
      </p>

      <div class="title">送养人信息</div>
      <place :info="petInfo" />
    </div>

    <!-- 底部动作栏 -->
    <van-action-bar class="action-bar" placeholder>
      <van-action-bar-icon icon="star-o" text="收藏" />
      <van-action-bar-icon
        icon="share-o"
        text="分享"
        @click="showShare = true"
      />
      <van-action-bar-button
        type="primary"
        text="申请领养"
        :url="'/pets/' + id + '/adopt'"
      />
    </van-action-bar>

    <!-- 分享面板 -->
    <share v-model:show="showShare" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { getPetsInfo } from "@/services";
import Share from "@/components/share/share.vue";
import Pictures from "./components/pictures.vue";
import MyHeader from "./components/header.vue";
import Place from "./components/place.vue";

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
    padding: 24px 32px 32px 32px;
    position: relative;
    border-radius: 24px 24px 0 0;
    margin-top: -32px;
    background-color: #fff;
    .title {
      font-size: 21px;
      font-weight: bold;
    }
    .description {
      color: #666;
      line-height: 25px;
    }
  }
}
</style>
