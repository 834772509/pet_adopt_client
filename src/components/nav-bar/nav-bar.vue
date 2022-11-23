<template>
  <div class="nav-bar">
    <van-nav-bar
      :title="$route.meta.title as string || ''"
      :left-arrow="$route.meta.showTabBar !== true"
      @click-left="$route.meta.showTabBar !== true ? $router.back() : ''"
      placeholder
      fixed
    >
      <!-- 选择城市列表 -->
      <template #left v-if="$route.meta.showCityPicker === true">
        <van-field
          class="city-picker"
          is-link
          readonly
          placeholder="城市"
          v-model="currentCity"
          @click="showCity = true"
        />
      </template>

      <!-- 选择筛选列表 -->
      <template #right v-if="$route.meta.showCityPicker === true">
        <div class="filter-picker" @click="showFilter = true">
          <span>筛选</span>
          <van-icon name="filter-o" size="16" />
        </div>
      </template>
    </van-nav-bar>

    <city-picker v-model:show="showCity" v-model:city="currentCity" />
    <filter-picker v-model:show="showFilter" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CityPicker from "./components/city-picker.vue";
import FilterPicker from "./components/filter-picker.vue";

const showCity = ref(false);
const currentCity = ref("");

const showFilter = ref(false);
</script>

<style lang="less" scoped>
.nav-bar {
  .city-picker {
    width: 80px;
  }
  .filter-picker {
    i {
      margin: 3px;
    }
  }
}
</style>
