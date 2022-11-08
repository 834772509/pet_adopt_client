<template>
  <div class="field">
    <div class="picker" @click="showFilter = true">
      <span>筛选</span>
      <van-icon name="filter-o" size="16" />

      <!-- <van-field readonly placeholder="筛选" right-icon="filter-o" /> -->
    </div>

    <van-popup v-model:show="showFilter" position="top" safe-area-inset-top>
      <van-form @submit="onFilter">
        <div class="title">筛选宠物</div>

        <van-cell-group inset>
          <van-field name="state" label="身体状况">
            <template #input>
              <van-checkbox-group direction="horizontal">
                <van-checkbox name="1" shape="square">已绝育</van-checkbox>
                <van-checkbox name="1" shape="square">已免疫</van-checkbox>
                <van-checkbox name="1" shape="square">已驱虫</van-checkbox>
                <van-checkbox name="1" shape="square">已消毒</van-checkbox>
              </van-checkbox-group>
            </template>
          </van-field>

          <van-field name="gender" label="性别">
            <template #input>
              <van-checkbox-group direction="horizontal">
                <van-checkbox :name="0" shape="square">女孩</van-checkbox>
                <van-checkbox :name="1" shape="square">男孩</van-checkbox>
              </van-checkbox-group>
            </template>
          </van-field>

          <van-field name="age" label="年龄">
            <template #input>
              <van-checkbox-group direction="horizontal">
                <van-checkbox :name="0" shape="square">幼年</van-checkbox>
                <van-checkbox :name="1" shape="square">青年</van-checkbox>
                <van-checkbox :name="2" shape="square">成年</van-checkbox>
                <van-checkbox :name="3" shape="square">老年</van-checkbox>
              </van-checkbox-group>
            </template>
          </van-field>
        </van-cell-group>
        <div class="action" style="margin: 16px">
          <van-button class="action-btn" round block native-type="reset"
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
import { ref } from "vue";

const showFilter = ref(false);

// 选择筛选事件
const onFilter = (value: any) => {
  console.log(value);
};
</script>

<style lang="less" scoped>
.field {
  width: 60px;
  // height: 30px;
  .title {
    font-size: 18px;
    font-weight: bold;
  }

  i {
    margin: 3px;
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
