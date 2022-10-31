<template>
  <div class="pet-pictures">
    <van-swipe class="pet-pictures" :autoplay="3000" lazy-render>
      <van-swipe-item
        v-for="image in props.list"
        :key="image"
        @click="ImagePreview(props.list)"
      >
        <img :src="image" />
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
.pet-pictures {
  height: 20rem;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  --van-swipe-indicator-margin: 40px;

  .van-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
