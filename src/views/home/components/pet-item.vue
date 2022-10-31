<template>
  <div class="pet-item">
    <van-card>
      <template #thumb>
        <van-image fit="fill" :src="JSON.parse(props.info.pictures)[0]" />
      </template>
      <template #title>
        <div class="title">{{ props.info.name }}</div>
      </template>
      <template #desc>
        <div class="tags">
          <van-tag class="tag" color="#808080" plain>
            {{ formatAge(props.info.age) }}
          </van-tag>
          <van-tag class="tag" color="#808080" plain>
            {{ props.info.gender === 1 ? "男孩" : "女孩" }}
          </van-tag>
          <van-tag class="tag" color="#808080" plain>
            {{ props.info.county }}
          </van-tag>
        </div>
        <p class="van-multi-ellipsis--l2">
          {{ props.info.description || "暂无描述" }}
        </p>
      </template>
      <template #tags>
        <div class="tags">
          <van-tag
            class="tag"
            type="success"
            plain
            :color="props.info.immunity == 0 ? '#8FBC8F' : ''"
            >{{ `${props.info.immunity == 0 ? "未" : "已"}免疫` }}</van-tag
          >
          <van-tag
            class="tag"
            type="success"
            :color="props.info.expelling == 0 ? '#8FBC8F' : ''"
            plain
            >{{ `${props.info.expelling == 0 ? "未" : "已"}驱虫` }}</van-tag
          >
          <van-tag
            class="tag"
            type="success"
            :color="props.info.desex == 0 ? '#8FBC8F' : ''"
            plain
            >{{ `${props.info.desex == 0 ? "未" : "已"}绝育` }}</van-tag
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
