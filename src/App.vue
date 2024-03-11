<script lang="ts" setup>
import { useDarkMode } from "@/hooks/useToggleDarkMode";
import NavBar from "@/components/NavBar/index.vue";
</script>
<template>
  <van-config-provider
    :theme="useDarkMode() ? 'dark' : 'light'"
    class="h-full flex flex-col"
  >
    <nav-bar />
    <div class="flex-1 overflow-auto">
      <router-view />
    </div>
  </van-config-provider>
</template>

<style></style>
