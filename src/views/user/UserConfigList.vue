<script setup lang="ts">
import { useUserStore } from "@/store/modules/user";
const userStore = useUserStore();
const logout = () => userStore.Logout(true);
</script>

<template>
  <div>
    <van-cell :title="$t('user.logOut')" size="large" is-link @click="logout" />
  </div>
</template>

<style scoped></style>
