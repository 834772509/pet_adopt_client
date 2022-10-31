<template>
  <div>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <van-loading size="50px" vertical>加载中...</van-loading>
      </div>
    </van-overlay>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useMainStore } from "@/stores";

const mainStore = useMainStore();
const show = computed(() => mainStore.showLoading);
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>
