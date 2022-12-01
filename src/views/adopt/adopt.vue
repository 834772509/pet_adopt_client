<template>
  <div class="adopt">
    <div class="tips">请填写正确信息，领养从真诚开始</div>

    <van-form @submit="onSubmit">
      <van-field
        v-model="account.age"
        type="digit"
        name="age"
        label="我的年龄"
        placeholder="我的年龄"
        :rules="[{ required: true, message: '请填写年龄' }]"
      />
      <van-field
        name="sex"
        label="我的性别"
        :rules="[{ required: true, message: '请填写性别' }]"
      >
        <template #input>
          <van-radio-group v-model.number="account.sex" direction="horizontal">
            <van-radio :name="0">女神</van-radio>
            <van-radio :name="1">男神</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        name="isExperience"
        label="养宠经验"
        :rules="[{ required: true, message: '请填写养宠经验' }]"
      >
        <template #input>
          <van-radio-group
            v-model.number="account.isExperience"
            direction="horizontal"
          >
            <van-radio :name="0">无</van-radio>
            <van-radio :name="1">有</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        name="isMarriage"
        label="婚姻状况"
        :rules="[{ required: true, message: '请填写婚姻状况' }]"
      >
        <template #input>
          <van-radio-group
            v-model.number="account.isMarriage"
            direction="horizontal"
          >
            <van-radio :name="0">未婚</van-radio>
            <van-radio :name="1">已婚</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        name="isHouse"
        label="住房情况"
        :rules="[{ required: true, message: '请填写住房情况' }]"
      >
        <template #input>
          <van-radio-group
            v-model.number="account.isHouse"
            direction="horizontal"
          >
            <van-radio :name="0">租房</van-radio>
            <van-radio :name="1">自有住房</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="account.job"
        name="job"
        label="我的职业"
        placeholder="我的职业"
        :rules="[{ required: true, message: '请填写职业' }]"
      />
      <van-field
        v-model="account.address"
        name="address"
        label="我的地址"
        placeholder="我的地址"
        :rules="[{ required: true, message: '请填写地址' }]"
      />
      <van-field
        v-model="account.telephone"
        name="telephone"
        label="手机号"
        placeholder="手机号"
        :rules="[
          {
            required: true,
            message: '请填写正确的手机号',
            pattern:
              /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
          },
        ]"
      />
      <van-field
        v-model="account.content"
        name="content"
        label="给送养人的话"
        placeholder="选填，介绍您的个人情况和居住环境，养宠经历等信息，会提供通过率哦。140字以内"
        rows="5"
        maxlength="140"
        type="textarea"
        show-word-limit
        autosize
      />

      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交申请
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { applyAdoptPet } from "@/services";
import { useMainStore } from "@/stores";
import { Dialog } from "vant";
import "vant/es/dialog/style";

const route = useRoute();
const router = useRouter();
const { id } = route.params;

const mainStore = useMainStore();

const account = reactive({
  age: null as unknown as number,
  sex: null,
  isExperience: null,
  isMarriage: null,
  isHouse: null,
  job: "",
  address: "",
  telephone: "",
  content: "",
});

const onSubmit = (values: any) => {
  const data = {
    userId: mainStore.userInfo.id,
    petId: id,
    state: 0,
    ...values,
  };

  applyAdoptPet(data)
    .then(() => {
      Dialog.alert({
        message: "提交申请成功，请等待审核",
      }).then(() => {
        router.replace(`/pets/${id}`);
      });
    })
    .catch(() => {
      Dialog.alert({
        message: "提交申请失败，请检查信息是否填写正确",
      });
    });
};
</script>

<style lang="less" scoped>
.adopt {
  background-color: #fff;

  .tips {
    color: #666;
    padding: 10px;
    font-size: 14px;
    text-align: center;
  }
}
</style>
