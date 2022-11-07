<template>
  <div class="pet-pictures">
    <van-swipe class="pic-swipe" :autoplay="3000" lazy-render>
      <van-swipe-item
        v-for="(image, index) in props.list"
        :key="image"
        @click="ImagePreview({ images: props.list, startPosition: index })"
      >
        <van-image :src="image" />
      </van-swipe-item>

      <van-swipe-item v-if="props.list.length === 0">
        <div class="nopic">暂无图片</div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup lang="ts">
import { ImagePreview } from "vant";
import "vant/es/image-preview/style";

const props = defineProps<{
  list: string[];
}>();
</script>

<style lang="less" scoped>
.pic-swipe {
  height: 320px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
  --van-swipe-indicator-margin: 40px;

  .nopic {
    margin-top: 30%;
  }
}
</style>
