<script setup lang="ts">
import { useDarkMode, useToggleDarkMode } from "@/hooks/useToggleDarkMode";

const onClickRight = () => {
  useToggleDarkMode();
};
</script>

<template>
  <van-nav-bar fixed placeholder>
    <template #right>
      <div>
        <Icon name="icon-duoyuyan" className="mr-[20px]" />
        <Icon
          :name="useDarkMode() ? 'icon-yueliang' : 'icon-taiyang'"
          @click="onClickRight"
        />
      </div>
    </template>
  </van-nav-bar>
</template>

<style scoped></style>
