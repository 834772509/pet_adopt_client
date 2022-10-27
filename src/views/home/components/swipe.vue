<template>
  <div class="swipe-picture">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img class="picture" src="@/assets/images/banner/banner1.webp" />
      </van-swipe-item>
      <van-swipe-item>
        <img class="picture" src="@/assets/images/banner/banner2.webp" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.swipe-picture {
  .my-swipe .van-swipe-item {
    color: #39a9ed;
    width: 100%;
    height: 10rem;

    .picture {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
