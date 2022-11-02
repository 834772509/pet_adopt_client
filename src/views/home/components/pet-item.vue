<template>
  <div class="pet-item">
    <van-card :thumb="JSON.parse(props.info.pictures)[0]">
      <!-- 宠物名称 -->
      <template #title>
        <div class="title">{{ props.info.name }}</div>
      </template>

      <!-- 基本信息 -->
      <template #desc>
        <div class="tags">
          <van-tag class="tag" color="#F6F8FC" text-color="#7E7F80">
            {{ formatAge(props.info.age) }}
          </van-tag>
          <van-tag class="tag" color="#F6F8FC" text-color="#7E7F80">
            {{ props.info.gender === 1 ? "男孩" : "女孩" }}
          </van-tag>
          <van-tag class="tag" color="#F6F8FC" text-color="#7E7F80">
            {{ props.info.county }}
          </van-tag>
        </div>
        <p class="desc van-multi-ellipsis--l2">
          {{ props.info.description || "暂无描述" }}
        </p>
      </template>

      <!-- 宠物状态 -->
      <template #tags>
        <div class="tags">
          <van-tag
            class="tag"
            type="success"
            plain
            :color="props.info.immunity == 0 ? '#B3E0D5' : ''"
            >{{ `${props.info.immunity == 0 ? "未" : "已"}免疫` }}</van-tag
          >
          <van-tag
            class="tag"
            type="success"
            :color="props.info.expelling == 0 ? '#B3E0D5' : ''"
            plain
            >{{ `${props.info.expelling == 0 ? "未" : "已"}驱虫` }}</van-tag
          >
          <van-tag
            class="tag"
            type="success"
            :color="props.info.desex == 0 ? '#B3E0D5' : ''"
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
  --van-card-background-color: #fff;
  --van-card-thumb-size: 120px;
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  .desc {
    font-size: 14px;
    color: #757575;
  }
  .tags {
    display: flex;
    justify-content: left;
    margin-top: 8px;
    --van-tag-padding: 2px 5px 2px 5px;
    .tag {
      margin-right: 8px;
    }
  }
}
</style>
