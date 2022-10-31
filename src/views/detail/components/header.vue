<template>
  <div class="header">
    <div class="title">{{ info.name }}</div>
    <div class="info">
      {{ formatAge(info.age) }}
      {{ info.gender === 1 ? "男孩" : "女孩" }}
    </div>
    <div class="icons">
      <div class="state">
        <img src="@/assets/images/sterilization.png" alt="" />
        <span>{{ info.desex === 1 ? "已绝育" : "未绝育" }}</span>
      </div>
      <div class="state">
        <img src="@/assets/images/immune.png" alt="" />
        <span>{{ info.immunity === 1 ? "已免疫" : "未免疫" }}</span>
      </div>
      <div class="state">
        <img src="@/assets/images/sterilization.png" alt="" />
        <span>{{ info.sterilization === 1 ? "已消毒" : "未消毒" }}</span>
      </div>
      <div class="state">
        <img src="@/assets/images/expelling.png" alt="" />
        <span>{{ info.expelling === 1 ? "已驱虫" : "未驱虫" }}</span>
      </div>
    </div>
    <div class="footer">
      <div class="left">
        <img class="addr" src="@/assets/images/addr-new.png" alt="" />
        <span>{{ info.city + info.county }}</span>
      </div>
      <div class="right">
        <span>更新于 {{ formatUtcString(info.createAt, "YYYY-MM-DD") }}</span>
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
  padding: 2rem 2rem 1rem 2rem;
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .info {
    margin-top: 0.5rem;
    font-size: 0.8rem;
    // font-weight: bold;
  }

  .icons {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    .state {
      padding: 0.1rem;
      width: 35px;
      height: 35px;
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: 0.1rem;
      background-color: #f6f8fc;
      white-space: nowrap;
      color: #1daee5;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    color: #8591a9;
    font-size: 0.8rem;
    .left {
      .addr {
        margin-right: 0.2rem;
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>
