<template>
  <div>
    <van-nav-bar
      :title="route.meta.title as string || ''"
      :left-arrow="route.meta.showTabBar !== true"
      @click-left="router.back()"
      placeholder
      fixed
    >
      <!-- 选择城市列表 -->
      <template #left>
        <div class="city" v-if="route.meta.showCityPicker === true">
          <van-field
            is-link
            readonly
            placeholder="城市"
            v-model="currentCity"
            @click="showPicker = true"
          />
          <van-popup v-model:show="showPicker" round position="bottom">
            <van-picker
              :columns="citys"
              @cancel="showPicker = false"
              @confirm="onConfirm"
            />
          </van-popup>
        </div>
      </template>
    </van-nav-bar>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useHomeStore } from "@/stores";

const route = useRoute();
const router = useRouter();

// 处理宠物城市信息
const homeStore = useHomeStore();
homeStore.getPetCitys();

const showPicker = ref(false);
const citys = computed(() => ["全市区", ...homeStore.citys]);
const currentCity = ref(citys.value[0]);
homeStore.currentCity = currentCity.value;

const onConfirm = (value: any) => {
  currentCity.value = value;
  homeStore.currentCity = value;
  showPicker.value = false;
};
</script>

<style lang="less" scoped>
.city {
  width: 5rem;
}
</style>
