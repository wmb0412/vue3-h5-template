<script setup lang="ts" name="Tools">
import { getListApi, getListApiError } from "@/api/mock";
import { reactive } from "vue";
import { showFailToast, showSuccessToast } from "vant";
import IconList from "./IconList.vue";
import ToolTitle from "./ToolTitle.vue";

const showList: string[] = reactive([]);

const handleSuccessReq = async () => {
  const { data } = await getListApi();
  showSuccessToast("请求成功");
  showList.push(...data);
};
const handleErrorReq = () => {
  getListApiError().then(
    () => {},
    err => {
      console.log(err);
      showFailToast("请求有误");
    }
  );
};
</script>

<template>
  <div class="tools-content pt-[20px] px-[12px]">
    <ToolTitle title="mock" />
    <van-space>
      <van-button type="success" @click="handleSuccessReq">成功请求</van-button>
      <van-button type="danger" @click="handleErrorReq">失败请求</van-button>
    </van-space>
    <div
      class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
      <p class="my-[14px] leading-[24px]">
        {{ showList }}
      </p>
    </div>
    <div class="mt-[30px]">
      <ToolTitle title="iconfont" />
      <IconList />
    </div>
  </div>
</template>
