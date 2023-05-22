<template>
  <div class="apply-detail">
    <div class="title">申请人信息</div>
    <van-cell-group>
      <van-cell title="姓名" :value="user?.name" />
      <van-cell title="性别" :value="user?.sex === 1 ? '男' : '女'" />
      <van-cell title="年龄" :value="user?.age" />
      <van-cell title="电话号码" :value="applyData?.telephone" />
      <van-cell title="所在地区" :value="applyData.address" />
      <van-cell
        title="养宠经验"
        :value="applyData.isExperience === 1 ? '有' : '无'"
      />
      <van-cell
        title="婚姻状况"
        :value="applyData.isMarriage === 1 ? '已婚' : '未婚'"
      />
      <van-cell title="职业情况" :value="applyData.job" />
      <van-cell
        title="住房情况"
        :value="applyData.isHouse === 1 ? '自有住房' : '整租'"
      />
      <van-cell title="领养留言" :value="applyData.content" />
    </van-cell-group>

    <div class="title">申请领养的宠物</div>
    <pet-item :info="pet || {}" @click="$router.push('/pets/' + pet.id)" />

    <div class="title">申请单信息</div>
    <div class="info">
      <div class="info-item">
        申请单编号：
        <span class="value">{{ applyData.id }}</span>
      </div>
      <div class="info-item">
        申请时间：
        <span class="value">{{ formatUtcString(applyData.createAt) }}</span>
      </div>
    </div>

    <!-- 底部操作栏 -->
    <van-action-bar
      v-if="applyData.state === 0"
      placeholder
      safe-area-inset-bottom
    >
      <van-action-bar-button
        type="primary"
        color="#88c1fa"
        text="不合适"
        @click="handleDisAgree"
      />
      <van-action-bar-button
        type="primary"
        text="通过领养"
        @click="handleAgree"
      />
    </van-action-bar>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  getApplyAdoptDetailById,
  agreeAdoptAppayPet,
  removeApplyAdopt,
} from "@/services";
import petItem from "@/components/pet-item/pet-item.vue";
import { Dialog } from "vant";
import { Toast } from "vant";
import { formatUtcString } from "@/utils/date";

const route = useRoute();
const router = useRouter();
const { id } = route.params;

const applyData = ref({} as any);
const user = computed(() => applyData.value.user);
const pet = computed(() => applyData.value.pet);

// 点击同意领养按钮事件
const handleAgree = () => {
  Dialog.confirm({
    title: "提示",
    message: "确认此用户领养吗？",
  }).then(() => {
    agreeAdoptAppayPet(Number(id)).then(() => {
      Toast.success("宠物送养成功");
      router.back();
    });
  });
};

// 点击不合适按钮事件
const handleDisAgree = () => {
  Dialog.confirm({
    title: "提示",
    message: "确认此用户不合适吗？",
  }).then(() => {
    removeApplyAdopt(Number(id)).then(() => {
      Toast("已取消此用户的申请");
      router.back();
    });
  });
};

// 请求数据
getApplyAdoptDetailById(Number(id)).then((res) => {
  applyData.value = res.data;
});
</script>

<style lang="less" scoped>
.apply-detail {
  margin: 10px;
  .title {
    margin: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  .info {
    margin: 10px;

    .info-item {
      margin: 5px 0px;

      .value {
        color: #969799;
      }
    }
  }
}
</style>
