<script setup lang="ts">
import { useUserStore } from "@/store/modules/user";
import { ref } from "vue";

const userStore = useUserStore();
const account = ref("admin");
const password = ref("123456");
const rememberMe = ref(true);
const switchPassType = ref(true);
const onSubmit = async () => {
  userStore.Login({
    account: account.value,
    password: password.value
  });
};
</script>

<template>
  <van-form @submit="onSubmit" class="pt-[16px] mx-[32px]">
    <van-field
      v-model="account"
      name="account"
      :label="$t('login.account')"
      :placeholder="$t('login.account')"
      :rules="[{ required: true, message: $t('login.accountPlaceholder') }]"
    />
    <van-field
      v-model="password"
      :type="switchPassType ? 'password' : 'text'"
      @click-right-icon="switchPassType = !switchPassType"
      :label="$t('login.password')"
      :placeholder="$t('login.password')"
      name="password"
      class="mt-[16px]"
      :right-icon="switchPassType ? '1' : '2'"
      :rules="[{ required: true, message: $t('login.passwordPlaceholder') }]"
    >
      <template #right-icon>
        <van-icon v-if="switchPassType" name="eye-o" />
        <van-icon v-else name="closed-eye" />
      </template>
    </van-field>
    <div class="flex justify-between mt-[16px]">
      <div class="flex items-center">
        <van-switch v-model="rememberMe" size="18px" class="mr-[16px]" />
        <span>{{ $t("login.rememberMe") }}</span>
      </div>
      <a>{{ $t("login.forgetPassword") }}</a>
    </div>
    <div class="mt-[32px]">
      <van-button block type="primary" native-type="submit">
        {{ $t("login.loginButton") }}
      </van-button>
      <van-button class="!mt-[16px]" block type="default">
        {{ $t("login.registerButton") }}
      </van-button>
    </div>
  </van-form>
</template>

<style scoped></style>
