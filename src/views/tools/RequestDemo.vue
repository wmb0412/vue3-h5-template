<script setup lang="ts">
import { getDemoApi, demoErrorApi } from "@/api/demo";
import { reactive } from "vue";
const showList: string[] = reactive([]);

const handleSuccessReq = async () => {
  const data = await getDemoApi();
  showList.push(...data);
};
const handleErrorReq = () => {
  demoErrorApi();
};
</script>

<template>
  <div>
    <van-space>
      <van-button type="success" @click="handleSuccessReq">成功请求</van-button>
      <van-button type="danger" @click="handleErrorReq">失败请求</van-button>
    </van-space>
  </div>
  <div
    class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
  >
    <p class="my-[14px] leading-[24px]">
      {{ showList }}
    </p>
  </div>
</template>

<style scoped></style>
@/api
