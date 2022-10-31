<template>
  <div class="depict">
    <div class="title">TA的故事</div>
    <p class="description">{{ props.description }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ description: string }>();
</script>

<style lang="less" scoped>
.depict {
  padding: 0 32px 16px 32px;

  .title {
    font-weight: bold;
    font-size: 21px;
  }
  .description {
  }
}
</style>
