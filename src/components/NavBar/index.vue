<script setup lang="ts">
import { useDarkMode, useToggleDarkMode } from "@/hooks/useToggleDarkMode";
import { useLocaleStore } from "@/store/modules/locale";
const localeStore = useLocaleStore();

const onClickRight = () => {
  useToggleDarkMode();
};
const toggleLocale = () => {
  localeStore.toggleLocale();
};
</script>

<template>
  <van-nav-bar fixed placeholder>
    <template #right>
      <div>
        <Icon
          name="icon-duoyuyan"
          className="mr-[20px]"
          @click="toggleLocale"
        />
        <Icon
          :name="useDarkMode() ? 'icon-yueliang' : 'icon-taiyang'"
          @click="onClickRight"
        />
      </div>
    </template>
  </van-nav-bar>
</template>

<style scoped></style>
