<script setup lang="ts">
import { useUserStore } from "@/store/modules/user";
const userStore = useUserStore();
const logout = () => userStore.Logout(true);
</script>

<template>
  <div>
    <van-cell title="退出登录" size="large" is-link @click="logout" />
  </div>
</template>

<style scoped></style>
