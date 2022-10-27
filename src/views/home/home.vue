<template>
  <div class="home">
    <swipe />
    <van-tabs
      color="#39a9ed"
      v-model:active="active"
      offset-top="2.5rem"
      sticky
    >
      <van-tab
        v-for="category in petsCategory"
        :key="category.name"
        :title="category.name"
      >
        {{ category.name }}
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { usePetsStore } from "@/stores";
import swipe from "./components/swipe.vue";

const active = ref(0);

const petsStore = usePetsStore();
petsStore.getCategory();

const petsCategory = computed(() => petsStore.category);
</script>

<style scoped>
.home {
}
</style>
