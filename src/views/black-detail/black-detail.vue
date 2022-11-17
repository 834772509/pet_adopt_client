<template>
  <div class="black-detail">
    <div class="title">失信人信息</div>
    <van-cell-group>
      <van-cell title="真实姓名" :value="info.name" />
      <van-cell title="身份证号" :value="info.identityNum" />
      <van-cell title="手机号码" :value="info.telephone" />
      <van-cell title="微信号" :value="info.wechat" />
      <van-cell title="微信昵称" :value="info.wechatName" />
    </van-cell-group>

    <div class="title">详细情况</div>
    <p class="description">{{ info.content }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { getBlackInfo } from "@/services";

const route = useRoute();
const { id } = route.params;

const info = ref({} as any);

getBlackInfo(id as unknown as number).then((res) => {
  info.value = res.data;
});
</script>

<style lang="less" scoped>
.black-detail {
  height: 100%;
  padding: 6px 32px 32px 32px;
  background-color: #fff;

  .title {
    font-size: 21px;
    font-weight: bold;
    margin: 10px 0;
  }
  .description {
    color: #666;
    line-height: 25px;
  }
}
</style>
