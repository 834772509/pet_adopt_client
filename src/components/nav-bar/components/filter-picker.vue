<template>
  <div class="filter-picker">
    <van-popup
      :show="props.show"
      @update:show="$emit('update:show', false)"
      position="top"
      :z-index="999"
      :lazy-render="false"
      safe-area-inset-top
      lock-scroll
    >
      <van-form @submit="onFilter">
        <div class="title">筛选宠物</div>

        <van-cell-group>
          <div class="field">
            <div class="label">性别</div>
            <div class="form" direction="horizontal">
              <van-checkbox shape="square" v-model="filter.boy"
                >男孩</van-checkbox
              >
              <van-checkbox shape="square" v-model="filter.girl"
                >女孩</van-checkbox
              >
            </div>
          </div>

          <div class="field">
            <div class="label">年龄</div>
            <div class="form" direction="horizontal">
              <!-- 0-1岁 -->
              <van-checkbox shape="square" v-model="filter.childhood"
                >幼年</van-checkbox
              >
              <!-- 1-6岁 -->
              <van-checkbox shape="square" v-model="filter.youth"
                >青年</van-checkbox
              >
              <!-- 6-10岁 -->
              <van-checkbox shape="square" v-model="filter.adult"
                >成年</van-checkbox
              >
              <!-- >10岁 -->
              <van-checkbox shape="square" v-model="filter.old"
                >老年</van-checkbox
              >
            </div>
          </div>

          <div class="field">
            <div class="label">状态</div>
            <div class="form" direction="horizontal">
              <van-checkbox
                name="immunity"
                shape="square"
                v-model="filter.immunity"
              >
                已免疫
              </van-checkbox>
              <van-checkbox
                name="expelling"
                shape="square"
                v-model="filter.expelling"
              >
                已驱虫
              </van-checkbox>
              <van-checkbox name="desex" shape="square" v-model="filter.desex"
                >已绝育</van-checkbox
              >
              <!-- <van-checkbox
                  name="sterilization"
                  shape="square"
                  v-model="filter.sterilization"
                  :bind-group="false"
                >
                  已消毒
                </van-checkbox> -->
            </div>
          </div>
        </van-cell-group>
        <div class="action" style="margin: 16px">
          <van-button
            class="action-btn"
            round
            block
            native-type="reset"
            @click="handleReset"
            >重置</van-button
          >
          <van-button
            class="action-btn"
            round
            block
            type="primary"
            native-type="submit"
          >
            提交
          </van-button>
        </div>
      </van-form>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useHomeStore } from "@/stores";

const props = defineProps<{
  show: boolean;
}>();
const emit = defineEmits(["update:show"]);

const homeStore = useHomeStore();

const filter = reactive({
  // 年龄
  childhood: false,
  youth: false,
  adult: false,
  old: false,

  // 性别
  boy: false,
  girl: false,

  // 状态
  desex: false,
  immunity: false,
  expelling: false,
  // sterilization: false,
});

// 选择筛选事件
const onFilter = () => {
  emit("update:show", false);

  // 设置筛选数据
  homeStore.age = filter.childhood
    ? [0, 12]
    : filter.youth
    ? [12, 72]
    : filter.adult
    ? [72, 120]
    : filter.old
    ? [120, 600]
    : [];
  homeStore.gender =
    filter.boy && !filter.girl ? 1 : filter.girl && !filter.boy ? 0 : -1;
  homeStore.desex = filter.desex ? 1 : 0;
  homeStore.immunity = filter.immunity ? 1 : 0;
  homeStore.expelling = filter.expelling ? 1 : 0;

  // 清空原数据
  homeStore.currentPage = 0;
  homeStore.petsList.splice(0);

  // 重新请求数据
  homeStore.getPetList();
};

// 重置按钮事件
const handleReset = () => {
  // 重置筛选条件
  const keys = Object.keys(filter);
  let obj: { [name: string]: boolean } = {};
  keys.forEach((item) => {
    obj[item] = false;
  });
  Object.assign(filter, obj);

  // 重新请求数据
  onFilter();
};
</script>

<style lang="less" scoped>
.filter-picker {
  .title {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
  .field {
    margin: 15px;

    .label {
      font-weight: bold;
    }

    .form {
      margin: 10px 0;
      width: 100%;
      display: flex;
      justify-content: left;

      :nth-child(n) {
        margin: 0 3px;
      }
    }
  }

  .action {
    display: flex;
    justify-content: space-between;

    .action-btn {
      width: 160px;
    }
  }
}
</style>
