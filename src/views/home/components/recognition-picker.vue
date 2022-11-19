<template>
  <div class="field">
    <!-- 选择图片方式 -->
    <van-popup
      :show="showRecognition"
      position="bottom"
      safe-area-inset-bottom
      round
    >
      <van-cell-group>
        <van-cell clickable>
          <template #title>
            <van-uploader
              :preview-image="false"
              capture="camera"
              :after-read="handleAlbum"
            >
              <span>拍照</span>
            </van-uploader>
          </template>
        </van-cell>

        <van-cell clickable>
          <template #title>
            <van-uploader :preview-image="false" :after-read="handleAlbum">
              <span>从相册中选择</span>
            </van-uploader>
          </template>
        </van-cell>
        <van-cell title="取消" @click="showRecognition = false" />
      </van-cell-group>
    </van-popup>

    <!-- 显示识别结果 -->
    <!-- <van-dialog :show="showResult" title="识别结果">
      <van-cell-group inset>
        <van-cell
          v-for="item in result"
          :key="item.name"
          :title="item.name"
          :value="item.score"
        />
      </van-cell-group>
    </van-dialog> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getAIAnimalBreeds } from "@/services";
import { Toast } from "vant";
import { Dialog } from "vant";
import "vant/es/toast/style";
import "vant/es/dialog/style";

const result = ref([] as any[]);

const showRecognition = ref(false);
const showResult = ref(true);

const handleAlbum = (file: any) => {
  showRecognition.value = false;
  Toast.loading({
    message: "识别中...",
    forbidClick: true,
    duration: 5000,
  });

  // 请求识别图片数据
  getAIAnimalBreeds(file.content)
    .then((res: any) => {
      Toast.clear();
      result.value = res.result;
      showResult.value = true;
      Dialog.alert({
        title: "识别结果",
        message: `您上传的宠物可能是：${res.result[0].name}\n温馨提示：识别结果仅供参考`,
      });
    })
    .catch(() => {
      Toast.fail("识别失败");
    });
};

defineExpose({ showRecognition });
</script>

<style lang="less" scoped>
.field {
  text-align: center;
}
</style>
