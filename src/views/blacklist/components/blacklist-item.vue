<template>
  <van-card class="blacklist-item">
    <template #title>
      <div class="title">
        {{ props.info.wechat }}
      </div>
    </template>
    <template #desc>
      <p class="van-multi-ellipsis--l2">{{ props.info.content }}</p>
    </template>
    <template #thumb>
      <van-icon class="icon" color="#1989fa" size="30" name="contact" />
    </template>
    <template #price> {{ info.province }} {{ info.city }} </template>
  </van-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  info: any;
}>();
</script>

<style lang="less" scoped>
.blacklist-item {
  --van-card-background-color: #fff;
  // height: 100px;
  // border: 1px solid #000;
  // margin: 0 -1px -1px 0;
  /* --van-card-padding: 0px; */
  --van-card-thumb-size: 40px;

  .icon {
    margin-top: 15px;
  }

  .title {
    font-size: 14px;
    font-weight: bold;
  }
}
</style>
