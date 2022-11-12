<template>
  <div class="publish">
    <van-form @submit="onSubmit">
      <van-cell-group>
        <van-uploader v-model="fileList" :after-read="afterRead" multiple />

        <div class="title">宠物信息</div>

        <van-row>
          <van-col span="12">
            <van-field
              v-model="formInfo.name"
              label-width="50"
              name="name"
              label="昵称"
              placeholder="请输入昵称"
              :rules="[{ required: true, message: '请填写用户名' }]"
          /></van-col>
          <van-col span="12">
            <van-field
              v-model.number="formInfo.age"
              label-width="50"
              type="number"
              name="age"
              label="年龄"
              placeholder="请输入年龄"
              :rules="[{ required: true, message: '请输入年龄' }]"
          /></van-col>
        </van-row>
        <van-field
          v-model="formInfo.category"
          is-link
          readonly
          name="category"
          label="类别"
          placeholder="请选择宠物类别"
          @click="showCategoryPicker = true"
        />
        <van-popup v-model:show="showCategoryPicker" position="bottom">
          <van-picker
            :columns="categoryList"
            @confirm="onCategoryConfirm"
            @cancel="showCategoryPicker = false"
          />
        </van-popup>
        <van-field name="gender" label-width="50" label="性别">
          <template #input>
            <van-radio-group v-model="formInfo.gender" direction="horizontal">
              <van-radio name="1">男孩</van-radio>
              <van-radio name="0">女孩</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <div class="title">宠物现状</div>
        <van-field name="immunity" label-width="50" label="疫苗">
          <template #input>
            <van-radio-group v-model="formInfo.immunity" direction="horizontal">
              <van-radio name="1">已接种</van-radio>
              <van-radio name="0">未接种</van-radio>
              <van-radio name="-1">不详</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field name="desex" label-width="50" label="绝育">
          <template #input>
            <van-radio-group v-model="formInfo.desex" direction="horizontal">
              <van-radio name="1">已绝育</van-radio>
              <van-radio name="0">未绝育</van-radio>
              <van-radio name="-1">不详</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field name="expelling" label-width="50" label="驱虫">
          <template #input>
            <van-radio-group
              v-model="formInfo.expelling"
              direction="horizontal"
            >
              <van-radio name="1">已驱虫</van-radio>
              <van-radio name="0">未驱虫</van-radio>
              <van-radio name="-1">不详</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <div class="title">领养要求</div>
        <van-cell-group>
          <van-field
            style="background: #f6f8fc"
            v-model="formInfo.adoptRequirement"
            rows="5"
            type="textarea"
            maxlength="200"
            placeholder="请输入领养要求"
            show-word-limit
            autosize
          />
        </van-cell-group>

        <div class="title">送养故事</div>
        <van-cell-group>
          <van-field
            style="background: #f6f8fc"
            v-model="formInfo.description"
            rows="5"
            type="textarea"
            maxlength="200"
            placeholder="请描述宠物饮食偏好、行为习惯、运动量等，以及送养原因，宠物过往经历、情感故事等。"
            show-word-limit
            autosize
          />
        </van-cell-group>

        <div class="title">联系方式</div>
        <van-field
          v-model="result"
          is-link
          readonly
          name="area"
          label="所在地"
          placeholder="请选择所在地"
          @click="showCityArea = true"
        />
        <van-popup v-model:show="showCityArea" position="bottom">
          <van-area
            :area-list="areaList"
            @confirm="onConfirm"
            @cancel="showCityArea = false"
            :columns-placeholder="['请选择']"
          />
        </van-popup>
        <van-field
          v-model="formInfo.telephone"
          label-width="50"
          name="telephone"
          label="手机号"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="formInfo.telephone"
          label-width="50"
          name="wechat"
          label="微信号"
          placeholder="请输入微信号"
          :rules="[{ required: true, message: '请填写微信号' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
        <van-checkbox class="agreemen" v-model="isAgreeAgreemen"
          >我已阅读，并同意遵守《拾宠领养平台送养规则》</van-checkbox
        >
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import { useHomeStore } from "@/stores";
import { areaList } from "@vant/area-data";
import { Toast } from "vant";
import "vant/es/toast/style";

// 宠物类别数据
const homeStore = useHomeStore();
const categoryList = computed(() =>
  homeStore.category.map((item) => item.name)
);

// 表单数据
const fileList = ref([] as any[]);
const showCategoryPicker = ref(false);
const isAgreeAgreemen = ref(false);

const result = ref("");
const showCityArea = ref(false);
const onConfirm = (areaValues: any) => {
  showCityArea.value = false;
  result.value = areaValues
    .filter((item: any) => !!item)
    .map((item: any) => item.name)
    .join("");
};

const formInfo = reactive({
  name: "",
  gender: null,
  age: "",
  category: "",
  immunity: null,
  desex: null,
  expelling: null,
  adoptRequirement: "",
  description: "",
  telephone: "",
  wechat: "",
});

const onCategoryConfirm = (value: any) => {
  formInfo.category = value;
  showCategoryPicker.value = false;
};

const onSubmit = (values: any) => {
  if (isAgreeAgreemen.value !== true) {
    Toast("同意《拾宠领养平台送养规则》才可提交");
    return;
  }
  console.log("submit", values);
};

const afterRead = (file: any) => {
  // 此时可以自行将文件上传至服务器
  console.log(file);

  // fileList.value.push({
  //   url: "https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg",
  //   isImage: true,
  // });
};
</script>

<style lang="less" scoped>
.publish {
  padding: 24px 16px 12px 16px;
  background-color: #fff;

  .title {
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .agreemen {
    margin-top: 10px;
    font-size: 12px;
  }
}
</style>
