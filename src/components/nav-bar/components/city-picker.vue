<template>
  <div class="field">
    <van-popup
      :show="props.show"
      @update:show="$emit('update:show', false)"
      position="bottom"
      round
      lock-scroll
    >
      <van-picker
        :columns="citys"
        @confirm="onCity"
        @cancel="$emit('update:show', false)"
      />
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useHomeStore } from "@/stores";

const props = defineProps<{
  show: boolean;
  city: string;
}>();
const emit = defineEmits(["update:show", "update:city"]);

// 处理宠物城市信息
const homeStore = useHomeStore();
homeStore.getPetCitys();

const citys = computed(() => ["全市区", ...homeStore.citys]);
emit("update:city", citys.value[0]);
homeStore.currentCity = citys.value[0];

// 选择城市列表事件
const onCity = (value: any) => {
  emit("update:show", false);
  emit("update:city", value);
  homeStore.currentCity = value;

  // 重新加载当前选择城市列表的宠物
  homeStore.petsList.splice(0);
  homeStore.currentPage = 0;
  homeStore.getPetList();
};
</script>

<style scoped>
.field {
}
</style>
