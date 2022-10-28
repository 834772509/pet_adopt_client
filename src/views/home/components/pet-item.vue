<template>
  <div class="pet-item">
    <van-card>
      <template #thumb>
        <van-image fit="fill" :src="JSON.parse(info.pictures)[0]" />
      </template>
      <template #title>
        <div class="title">
          <h3>{{ info.name }}</h3>
        </div>
      </template>
      <template #desc>
        <p class="van-multi-ellipsis--l2">{{ info.description }}</p>
      </template>
      <template #tags>
        <div class="tags">
          <van-tag
            class="tag"
            type="success"
            plain
            :color="info.immunity == 0 ? '#808080' : ''"
            >{{ `${info.immunity == 0 ? "未" : "已"}免疫` }}</van-tag
          >
          <van-tag
            class="tag"
            type="success"
            :color="info.expelling == 0 ? '#808080' : ''"
            plain
            >{{ `${info.expelling == 0 ? "未" : "已"}驱虫` }}</van-tag
          >
          <van-tag
            class="tag"
            type="success"
            :color="info.desex == 0 ? '#808080' : ''"
            plain
            >{{ `${info.desex == 0 ? "未" : "已"}绝育` }}</van-tag
          >
        </div>
      </template>
    </van-card>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
});

console.log(props.info);
</script>

<style lang="less" scoped>
.pet-item {
  width: 100%;
  margin-bottom: 0.5rem;

  .tags {
    display: flex;
    justify-content: left;
    .tag {
      margin-right: 0.5rem;
    }
  }
}
</style>
