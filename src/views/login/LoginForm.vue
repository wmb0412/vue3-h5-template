<script setup lang="ts">
import { useUserStore } from "@/store/modules/user";
import { ref } from "vue";
const userStore = useUserStore();
const username = ref("admin");
const password = ref("123456");
const rememberMe = ref(true);
const switchPassType = ref(true);
const onSubmit = async () => {
  userStore.Login({
    username: username.value,
    password: password.value
  });
};
</script>

<template>
  <van-form @submit="onSubmit" class="pt-4 mx-8">
    <van-field
      v-model="username"
      name="username"
      label="账号"
      placeholder="账号"
      :rules="[{ required: true, message: '请填写账号' }]"
    />
    <van-field
      v-model="password"
      :type="switchPassType ? 'password' : 'text'"
      @click-right-icon="switchPassType = !switchPassType"
      name="password"
      label="密码"
      class="mt-4"
      :right-icon="switchPassType ? '1' : '2'"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    >
      <template #right-icon>
        <van-icon v-if="switchPassType" name="eye-o" />
        <van-icon v-else name="closed-eye" />
      </template>
    </van-field>
    <div class="flex justify-between mt-4">
      <div class="flex items-center">
        <van-switch v-model="rememberMe" size="18px" class="mr-4" />
        <span>记住我</span>
      </div>
      <a>忘记密码?</a>
    </div>
    <div class="mt-8">
      <van-button block type="primary" native-type="submit"> 登录 </van-button>
      <van-button class="!mt-4" block type="default"> 注册 </van-button>
    </div>
  </van-form>
</template>

<style scoped></style>
