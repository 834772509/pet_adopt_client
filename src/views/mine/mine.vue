<template>
  <div class="mine">
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

    <div class="container">
      <router-link class="my-item" to="">
        <img src="@/assets/images/my_icon_place.png" alt="" />
        <span>送养</span>
      </router-link>
      <router-link class="my-item" to="">
        <img src="@/assets/images/my_icon_adopt.png" alt="" />
        <span>领养</span>
      </router-link>
      <router-link class="my-item" to="/mine/stars">
        <img src="@/assets/images/my_icon_favor.png" alt="" />
        <span>收藏</span>
      </router-link>
    </div>

    <img
      class="promotion-banner"
      src="@/assets/images/promotion_banner.png"
      alt=""
    />

    <van-grid :column-num="2">
      <van-grid-item icon="label-o" text="领养协议" to="/mine/agreement" />
      <van-grid-item icon="apps-o" text="联系我们" to="/mine/contact" />
    </van-grid>

    <div class="footer">
      <p>客服电话: xxx-xxxx-xxxx</p>
      <p>工作时间：周一至周五 09:00-17:00</p>
      <p>—— 领养从真诚开始 ——</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from "@/stores";

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
      display: block;
      flex-direction: column;
      width: 80px;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0px 0px 9px #def6ff;

      height: 75px;
      font-size: 14px;
      color: #666;
      text-align: center;

      img {
        display: block;
        width: 50px;
        height: 50px;
        margin: 0 auto;
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
