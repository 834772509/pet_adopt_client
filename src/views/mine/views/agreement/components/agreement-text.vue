<template>
  <div class="agreement-text">
    <div class="title">
      <van-icon color="blue" name="orders-o" />
      <span>{{ props.title }}</span>
    </div>
    <pre class="content">{{ props.content }}</pre>
    <van-divider
      :hairline="false"
      :style="{ bordercolor: '#f6f8fc', padding: '0 10px' }"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  content: string;
}>();
</script>

<style lang="less" scoped>
.agreement-text {
  .title {
    font-size: 16px;
    font-weight: bold;

    span {
      margin-left: 5px;
    }
  }

  .content {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
}
</style>
