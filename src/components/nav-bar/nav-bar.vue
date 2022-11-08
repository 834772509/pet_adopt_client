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
      <template v-if="$route.meta.showCityPicker === true" #left>
        <city-picker />
      </template>

      <!-- 选择筛选 -->
      <template v-if="$route.meta.showCityPicker === true" #right>
        <filter-picker />
      </template>
    </van-nav-bar>
  </div>
</template>

<script setup lang="ts">
import CityPicker from "./components/city-picker.vue";
import FilterPicker from "./components/filter-picker.vue";
</script>

<style lang="less" scoped>
.nav-bar {
}
</style>
