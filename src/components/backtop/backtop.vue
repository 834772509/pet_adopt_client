<template>
  <div class="backtop">
    <transition name="van-fade">
      <van-icon
        v-show="show"
        size="50px"
        color="#1989fa"
        name="upgrade"
        @click="handleBackTop"
      />
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import throttle from "lodash/throttle";

const show = ref(false);

// 增加滚动事件(动态显示按钮)
document.addEventListener(
  "scroll",
  throttle(
    () => (show.value = document.scrollingElement!.scrollTop >= 500),
    200
  ),
  false
);

// 点击返回顶部按钮
const handleBackTop = () => {
  let timer: any;
  clearInterval(timer);
  timer = setInterval(function () {
    let step = (0 - window.pageYOffset) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (window.pageYOffset == 0) {
      clearInterval(timer);
    }
    window.scroll(0, window.pageYOffset + step);
  }, 15);
};
</script>

<style lang="less" scoped>
.backtop {
  position: fixed;
  bottom: 60px;
  right: 10px;
}
</style>
