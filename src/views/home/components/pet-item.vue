<template>
  <div class="pet-item">
    <van-card>
      <template #thumb>
        <van-image fit="fill" :src="JSON.parse(info.pictures)[0]" />
      </template>
      <template #title>
        <div class="title">{{ info.name }}</div>
      </template>
      <template #desc>
        <div class="tags">
          <van-tag class="tag" color="#808080" plain>
            {{ formatAge(info.age) }}
          </van-tag>
          <van-tag class="tag" color="#808080" plain>
            {{ info.gender === 1 ? "男孩" : "女孩" }}
          </van-tag>
          <van-tag class="tag" color="#808080" plain>
            {{ info.county }}
          </van-tag>
        </div>
        <p class="van-multi-ellipsis--l2">
          {{ info.description || "暂无描述" }}
        </p>
      </template>
      <template #tags>
        <div class="tags">
          <van-tag
            class="tag"
            type="success"
            plain
            :color="info.immunity == 0 ? '#8FBC8F' : ''"
            >{{ `${info.immunity == 0 ? "未" : "已"}免疫` }}</van-tag
          >
          <van-tag
            class="tag"
            type="success"
            :color="info.expelling == 0 ? '#8FBC8F' : ''"
            plain
            >{{ `${info.expelling == 0 ? "未" : "已"}驱虫` }}</van-tag
          >
          <van-tag
            class="tag"
            type="success"
            :color="info.desex == 0 ? '#8FBC8F' : ''"
            plain
            >{{ `${info.desex == 0 ? "未" : "已"}绝育` }}</van-tag
          >
        </div>
      </template>
    </van-card>
  </div>
</template>

<script setup lang="ts">
import { formatAge } from "@/utils/utils";

const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="less" scoped>
.pet-item {
  width: 100%;
  // margin-bottom: 8px;
  .title {
    font-size: 16px;
    font-weight: bold;
  }
  .tags {
    display: flex;
    justify-content: left;
    margin-top: 8px;
    .tag {
      margin-right: 8px;
    }
  }
}
</style>
