<template>
  <div class="detail">
    <!-- 宠物图片 -->
    <pictures :list="petInfo.pictures || []" />

    <div class="content">
      <!-- 头部信息栏 -->
      <my-header :info="petInfo" />

      <!-- 分割线 -->
      <van-divider
        :hairline="false"
        :style="{ bordercolor: '#f6f8fc', padding: '0 10px' }"
      />

      <div class="title">TA的故事</div>
      <p class="description">{{ petInfo.description || "暂无描述信息" }}</p>

      <div class="title">领养要求</div>
      <p class="description">
        {{ petInfo.adoptRequirement || "暂无领养要求" }}
      </p>

      <div class="title">送养原因</div>
      <p class="description">
        {{ petInfo.sentReason || "暂无弃养原因" }}
      </p>

      <div class="title">宠物留言</div>
      <div class="comment">
        <van-form @submit="onComment" style="display: flex">
          <van-field
            class="input"
            v-model="comment"
            style="background-color: #f7f7f7"
            name="comment"
            placeholder="说点什么..."
          />
          <van-button style="width: 75px" native-type="submit">提交</van-button>
        </van-form>
        <div class="comment-list">
          <comments
            v-for="item in petCommentList"
            :key="item.id"
            :title="item.user.name"
            :content="item.content"
          />
        </div>
      </div>

      <!-- <div class="title">送养人信息</div> -->
      <!-- <place :info="petInfo" /> -->
    </div>

    <!-- 底部动作栏 -->
    <van-action-bar class="action-bar" placeholder>
      <van-action-bar-icon
        :icon="isStarPet ? 'star' : 'star-o'"
        color="#1989fa"
        text="收藏"
        @click="handleStar"
      />
      <van-action-bar-icon
        icon="share-o"
        text="分享"
        @click="showShare = true"
      />
      <van-action-bar-button
        :type="
          petInfo.status === -1
            ? 'warning'
            : petInfo.status === 0
            ? 'primary'
            : 'success'
        "
        :text="
          petInfo.status === -1
            ? '正在审核'
            : petInfo.status === 0
            ? '申请领养'
            : '已被领养'
        "
        :url="'/pets/' + id + '/adopt'"
        :disabled="petInfo.status !== 0"
      />
    </van-action-bar>

    <!-- 分享面板 -->
    <share v-model:show="showShare" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  getPetsInfo,
  getStarsPetInfo,
  starsPet,
  cancelStarsPet,
  getCommentList,
  createComment,
} from "@/services";
import { useMainStore } from "@/stores";
import Share from "@/components/share/share.vue";
import Pictures from "./components/pictures.vue";
import MyHeader from "./components/header.vue";
// import Place from "./components/place.vue";
import { Toast } from "vant";
import "vant/es/toast/style";
import comments from "./components/comments.vue";

const petInfo = ref({}) as any;
const petCommentList = ref([] as any[]);
const showShare = ref(false);
const isStarPet = ref(false);
const comment = ref("");

const route = useRoute();
const router = useRouter();

const id = route.params.id as unknown as number;

const mainStore = useMainStore();

// 获取宠物信息
getPetsInfo(id).then((res) => {
  res.data.pictures = JSON.parse(res.data.pictures || "[]");
  petInfo.value = res.data;
});

// 获取收藏状态
if (mainStore.token) {
  getStarsPetInfo(id).then((res) => {
    isStarPet.value = res.data !== undefined;
  });
}

// 获取宠物留言
getCommentList(id).then((res) => {
  petCommentList.value = res.data.list;
});

// 收藏按钮事件
const handleStar = () => {
  if (!mainStore.token) {
    router.push("/login");
    return;
  }

  if (isStarPet.value) {
    // 取消收藏宠物
    cancelStarsPet(id).then(() => {
      isStarPet.value = false;
      Toast("已取消收藏");
    });
  } else {
    // 收藏宠物
    starsPet(id).then(() => {
      Toast.success("收藏成功");
      isStarPet.value = true;
    });
  }
};

// 提交留言事件
const onComment = () => {
  createComment(id, comment.value)
    .then(() => {
      comment.value = "";
      getCommentList(id).then((res) => {
        petCommentList.value = res.data.list;
      });
      Toast.success("提交成功");
    })
    .catch(() => {
      Toast.fail("提交失败");
    });
};
</script>

<style lang="less" scoped>
.detail {
  width: 100%;
  height: 100%;

  .content {
    padding: 24px 32px 32px 32px;
    position: relative;
    border-radius: 24px 24px 0 0;
    margin-top: -32px;
    background-color: #fff;
    .title {
      font-size: 21px;
      font-weight: bold;
    }
    .description {
      color: #666;
      line-height: 25px;
    }
    .comment {
      margin-top: 12px;
    }
  }
}
</style>
