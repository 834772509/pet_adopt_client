<template>
  <div class="mine">
    <!-- 用户信息 -->
    <div class="user-banner">
      <van-image
        width="4rem"
        height="4rem"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        round
      />
      <div class="info">
        <div class="name">{{ userInfo.name }}</div>
      </div>
    </div>

    <!-- 功能导航 -->
    <div class="container">
      <router-link class="my-item" to="">
        <!-- <img src="@/assets/images/my_icon_place.png" alt="" /> -->
        <van-icon color="#1989fa" name="bookmark" size="35" />
        <span>送养</span>
      </router-link>
      <router-link class="my-item" to="/mine/adopt">
        <!-- <img src="@/assets/images/my_icon_adopt.png" alt="" /> -->
        <van-icon color="#1989fa" name="medal" size="35" />
        <span>领养</span>
      </router-link>
      <router-link class="my-item" to="/mine/stars">
        <!-- <img src="@/assets/images/my_icon_favor.png" alt="" /> -->
        <van-icon name="star" color="#1989fa" size="35" />
        <span>收藏</span>
      </router-link>
    </div>

    <!-- 分享面板图片 -->
    <img
      class="promotion-banner"
      src="@/assets/images/promotion_banner.png"
      alt=""
      @click="showShare = true"
    />

    <!-- 领养协议、关于我们 -->
    <van-grid :column-num="2" icon-size="35">
      <van-grid-item
        icon="label"
        icon-color="#1989fa"
        text="领养协议"
        to="/mine/agreement"
      />
      <van-grid-item
        icon="comment-circle"
        icon-color="#1989fa"
        text="联系我们"
        to="/mine/contact"
      />
    </van-grid>

    <!-- 底部关于信息 -->
    <div class="footer">
      <p>客服电话: xxx-xxxx-xxxx</p>
      <p>工作时间：周一至周五 09:00-17:00</p>
      <p>—— 领养从真诚开始 ——</p>
    </div>

    <!-- 分享面板 -->
    <share v-model:show="showShare" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useMainStore } from "@/stores";
import share from "@/components/share/share.vue";

const showShare = ref(false);

const mainStore = useMainStore();
const { userInfo } = mainStore;
</script>

<style lang="less" scoped>
.mine {
  height: 80%;
  background-color: #f6f8fc;

  padding: 24px 16px 12px 16px;

  .user-banner {
    display: flex;
    margin-bottom: 15px;
    .info {
      margin-left: 20px;
      line-height: 4rem;
      .name {
        font-weight: bold;
      }
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    .my-item {
      display: flex;
      flex-direction: column;
      width: 80px;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0px 0px 9px #def6ff;

      height: 75px;
      font-size: 14px;
      color: #666;
      text-align: center;

      i {
        margin-top: 8px;
      }

      span {
        margin-top: 8px;
      }
    }
  }

  .promotion-banner {
    width: 100%;
    margin-bottom: 15px;
  }

  .footer {
    text-align: center;
    font-size: 10px;
    color: #b2bde2;
    margin: 80px auto 5px;
  }
}
</style>
