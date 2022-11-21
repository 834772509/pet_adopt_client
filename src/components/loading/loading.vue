<template>
  <div class="wrapper" v-if="showLoading">
    <van-loading size="50px" color="#1989fa" vertical>加载中...</van-loading>
  </div>
</template>

<script setup lang="ts">
import { ref, toRef, watch } from "vue";
import { useMainStore } from "@/stores";

const mainStore = useMainStore();
const showLoading = ref(false);

watch(toRef(mainStore, "showLoading"), (newValue) => {
  showLoading.value = newValue;
});
</script>

<style scoped>
.wrapper {
  background-color: #fff;
  border-radius: 15px;
  border: 1px solid #ccc;
  padding: 30px 35px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
}
</style>
