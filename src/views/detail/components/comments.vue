<template>
  <div class="comment">
    <div class="avatar">
      <van-icon
        color="#1989fa"
        size="40"
        name="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png"
      />
    </div>
    <div class="info">
      <div class="name">{{ props.title }}</div>
      <div class="content">{{ props.content }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  content: string;
}>();
</script>

<style lang="less" scoped>
.comment {
  display: flex;
  padding: 10px 0;
  font-size: 12px;
  .avatar {
  }

  .info {
    margin-left: 10px;
    .name {
      font-weight: bold;
      margin-bottom: 10px;
    }
    .content {
    }
  }
}
</style>
