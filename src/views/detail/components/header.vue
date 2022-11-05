<template>
  <div class="header">
    <div class="title">{{ props.info.name }}</div>
    <div class="props-info">
      {{ formatAge(props.info.age) }}
      {{ props.info.gender === 1 ? "男孩" : "女孩" }}
    </div>
    <div class="icons">
      <div
        class="state"
        :style="{ opacity: props.info.desex !== 1 ? '0.6' : '' }"
      >
        <img src="@/assets/images/sterilization.png" alt="" />
        <span>{{ props.info.desex === 1 ? "已绝育" : "未绝育" }}</span>
      </div>
      <div
        class="state"
        :style="{ opacity: props.info.immunity !== 1 ? '0.6' : '' }"
      >
        <img src="@/assets/images/immune.png" alt="" />
        <span>{{ props.info.immunity === 1 ? "已免疫" : "未免疫" }}</span>
      </div>
      <div
        class="state"
        :style="{ opacity: props.info.sterilization !== 1 ? '0.6' : '' }"
      >
        <img src="@/assets/images/sterilization.png" alt="" />
        <span>{{ props.info.sterilization === 1 ? "已消毒" : "未消毒" }}</span>
      </div>
      <div
        class="state"
        :style="{ opacity: props.info.expelling !== 1 ? '0.6' : '' }"
      >
        <img src="@/assets/images/expelling.png" alt="" />
        <span>{{ props.info.expelling === 1 ? "已驱虫" : "未驱虫" }}</span>
      </div>
    </div>
    <div class="footer">
      <div class="left">
        <img class="addr" src="@/assets/images/addr-new.png" alt="" />
        <span>{{ props.info.city + props.info.county }}</span>
      </div>
      <div class="right">
        更新于 {{ formatUtcString(props.info.createAt, "YYYY-MM-DD") }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatUtcString } from "@/utils/date";
import { formatAge } from "@/utils/utils";

const props = defineProps<{ info: any }>();
</script>

<style lang="less" scoped>
.header {
  .title {
    font-size: 30px;
    font-weight: bold;
  }
  .props-info {
    margin-top: 8px;
    font-size: 14px;
    font-weight: bold;
  }
  .icons {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    .state {
      padding: 10px;
      width: 35px;
      height: 35px;
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: 12px;
      background-color: #f6f8fc;
      white-space: nowrap;
      color: #1daee5;
      img {
        margin-top: -8px;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    color: #8591a9;
    font-size: 12px;
    line-height: 16px;

    .left {
      .addr {
        margin-right: 4px;
        width: 14px;
        height: 16px;
      }
    }
  }
}
</style>
