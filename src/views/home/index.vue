<script setup lang="ts" name="Demo">
import { reactive } from "vue";
import { range } from "lodash-es";
import logoUrl from "@/assets/imgs/logo.svg";
import { t } from "@/locales";
const contentList = reactive(
  range(15).map(item => t(`home.feature${item + 1}`))
);
</script>

<template>
  <div class="px-[12px]">
    <van-image :src="logoUrl" class="w-full" />
    <div class="pl-[12px] border-l-[3px] border-g-primary">
      <a
        class="flex items-center"
        href="https://github.com/wmb0412/vue3-h5-template"
        target="_blank"
      >
        <svg-icon class="text-[20px] mr-[8px]" name="github" />
        <h3 class="font-bold text-[18px] my-[4px]">Vue3-h5-template</h3>
        <svg-icon class="text-[12px] ml-[5px]" name="link" />
      </a>
    </div>
    <div
      class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
      <p class="my-[14px] leading-[24px]">
        {{ $t("home.describe") }}
      </p>
    </div>

    <div class="demo-main">
      <van-cell v-for="(item, idx) in contentList" :key="idx" :title="item" />
    </div>
  </div>
</template>
