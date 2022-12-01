<template>
  <div class="apply-item">
    <!-- 用户信息 -->
    <div class="user">
      <div class="avatar">
        <img src="@/assets/images/avatar.png" alt="" />
      </div>
      <div class="info">
        <div class="name">{{ user.name }}</div>
        <div class="message">
          <span>{{ user.sex === "1" ? "男" : "女" }}</span>
          <span>{{ user.age }}岁</span>
        </div>
      </div>
    </div>

    <!-- 宠物信息 -->
    <div class="pet">
      <div class="picture">
        <img :src="JSON.parse(pet.pictures)[0]" alt="" />
      </div>
      <div class="info">
        <div class="name">{{ pet.name }}</div>
        <div class="message">
          <span>{{ formatAge(pet.age) }}</span>
          <span>{{ pet.gender === "1" ? "男孩" : "女孩" }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatAge } from "@/utils/utils";

const props = defineProps<{
  id: number;
  user: any;
  pet: any;
}>();
</script>

<style lang="less" scoped>
.apply-item {
  display: flex;
  align-items: center;
  background-color: #f9fafe;
  width: 100%;
  height: 80px;
  margin-bottom: 10px;

  .user {
    display: flex;
    align-items: center;
    width: 50%;
    margin-left: 10px;

    .avatar img {
      display: block;
      width: 50px;
      height: 50px;
    }

    .info {
      margin-left: 10px;
      .name {
        font-weight: bold;
        font-size: 18px;
      }
      .message {
        margin-top: 20px;
        display: flex;
        color: #666;

        span {
          margin-right: 10px;
        }
      }
    }
  }

  .pet {
    margin-left: 10px;

    display: flex;
    width: 50%;

    .picture img {
      width: 60px;
      height: 60px;
    }

    .info {
      margin-left: 10px;
      .name {
        font-weight: bold;
        font-size: 18px;
      }
      .message {
        margin-top: 20px;
        display: flex;
        color: #666;

        span {
          margin-right: 10px;
        }
      }
    }
  }

  .action {
    width: 80px;
    height: 100%;
    .button {
      height: 100%;
    }
  }
}
</style>
