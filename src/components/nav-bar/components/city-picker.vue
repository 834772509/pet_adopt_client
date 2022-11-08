<template>
  <div class="field">
    <van-field
      is-link
      readonly
      placeholder="城市"
      v-model="currentCity"
      @click="showCity = true"
    />
    <van-popup v-model:show="showCity" round position="bottom">
      <van-picker
        :columns="citys"
        @cancel="showCity = false"
        @confirm="onCity"
      />
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useHomeStore } from "@/stores";

const showCity = ref(false);

// 处理宠物城市信息
const homeStore = useHomeStore();
homeStore.getPetCitys();

const citys = computed(() => ["全市区", ...homeStore.citys]);
const currentCity = ref(citys.value[0]);
homeStore.currentCity = currentCity.value;

// 选择城市列表事件
const onCity = (value: any) => {
  currentCity.value = value;
  homeStore.currentCity = value;
  showCity.value = false;

  // 重新加载当前选择城市列表的宠物
  homeStore.petsList.splice(0);
  homeStore.currentPage = 0;
  homeStore.getPetList();
};
</script>

<style scoped>
.field {
  width: 80px;
}
</style>
