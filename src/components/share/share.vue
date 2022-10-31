<template>
  <div>
    <van-share-sheet
      :show="show"
      title="立即分享给好友"
      :options="options"
      @cancel="handleCancel"
      @select="handleSelect"
    />
  </div>
</template>

<script setup lang="ts">
import copy from "copy-to-clipboard";
import { Notify } from "vant";
import "vant/es/notify/style";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:show"]);

const options = [
  [
    { name: "QQ", icon: "qq" },
    { name: "微博", icon: "weibo" },
    { name: "复制链接", icon: "link" },
  ],
];

const handleCancel = () => {
  emit("update:show", false);
};

const handleSelect = (option: typeof options, index: number) => {
  switch (index) {
    case 0:
      window.open(
        `http://connect.qq.com/widget/shareqq/index.html?url=${window.location.href}&sharesource=qzone`
      );
      break;
    case 1:
      window.open(
        `http://service.weibo.com/share/share.php?url=${window.location.href}&sharesource=weibo`
      );
      break;
    case 2:
      copy(window.location.href);
      Notify({ type: "success", message: "复制链接成功" });
      break;
  }
  emit("update:show", false);
};
</script>

<style scoped></style>
