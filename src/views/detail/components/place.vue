<template>
  <div class="place">
    <div class="avatar">
      <van-icon size="4rem" name="user-o" color="#1989fa" />
    </div>
    <div class="message">
      <div class="head">
        <div class="name">管理员(Admin)</div>
        <div class="contact">
          <img
            class="tel"
            src="@/assets/images/tel.png"
            alt=""
            @click="handleTel"
          />
          <!-- <img class="wx" src="@/assets/images/wx-contact.png" alt="" /> -->
        </div>
      </div>
      <div class="info">
        <img
          class="image-gender"
          src="@/assets/images/gender-man.png"
          alt=""
          v-if="true"
        />
        <img
          class="image-gender"
          src="@/assets/images/gender-woman.png"
          alt=""
          v-if="false"
        />
        <span>男</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ info: any }>();

const handleTel = () => {
  window.location.href = `tel://${props.info.telephone}`;
};
</script>

<style lang="less" scoped>
.place {
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 20px;
  padding: 6px;
  box-shadow: 0 0 10px #ebebeb;
  border-radius: 5px;
  .message {
    margin-left: 10px;
    width: 100%;
    .head {
      display: flex;
      justify-content: space-between;
      .name {
        font-size: 18px;
        font-weight: bold;
      }
      .contact {
        display: flex;
        .tel {
          width: 18px;
          height: 18px;
          margin-right: 16px;
          margin-top: 4px;
        }
        .wx {
          width: 30px;
          height: 30px;
          margin-right: 16px;
          margin-top: -2px;
        }
      }
    }
    .info {
      margin-top: 15px;
      color: #666;
      .image-gender {
        width: 16px;
        margin-right: 5px;
      }
    }
  }
}
</style>
