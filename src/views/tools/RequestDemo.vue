<script setup lang="ts">
import { getDemoApi, demoErrorApi, getDemoErrorApi } from "@/api/demo";
import { useRequest } from "vue-hooks-plus";

const { data, run, loading } = useRequest(() => getDemoApi(), {
  manual: true
});
const {
  data: data2,
  run: run2,
  loading: loading2
} = useRequest(
  () =>
    getDemoApi({
      isTransformResponse: false
    }),
  {
    manual: true
  }
);

const {
  data: data3,
  run: run3,
  loading: loading3
} = useRequest(
  () =>
    getDemoApi({
      isReturnNativeResponse: true
    }),
  {
    manual: true
  }
);
const { run: run4 } = useRequest(
  () =>
    getDemoApi({
      ignoreCancelToken: false,
      successMessageMode: "toast"
    }),
  {
    manual: true
  }
);

const { run: runError, loading: errorLoading } = useRequest(demoErrorApi, {
  manual: true
});

const { run: runError2, loading: errorLoading2 } = useRequest(getDemoErrorApi, {
  manual: true
});
const { run: runError3, loading: errorLoading3 } = useRequest(
  () =>
    demoErrorApi(null, {
      errorMessageMode: "dialog"
    }),
  {
    manual: true
  }
);
</script>

<template>
  <div>
    <van-space>
      <van-button type="success" @click="run" :loading="loading"
        >成功请求只返回data (默认)</van-button
      >
    </van-space>
  </div>
  <p>
    {{ data }}
  </p>
  <div class="mt-[30px]">
    <van-space>
      <van-button type="success" @click="run2" :loading="loading2"
        >成功请求返回code，message等内容</van-button
      >
    </van-space>
  </div>
  <p>
    {{ data2 }}
  </p>
  <div class="mt-[30px]">
    <van-space>
      <van-button type="success" @click="run3" :loading="loading3"
        >成功请求返回整个响应体</van-button
      >
    </van-space>
  </div>
  <p>
    {{ data3 }}
  </p>
  <div class="mt-[30px]">
    <van-button type="success" @click="run4"
      >快速点击两次，第一次被cancel</van-button
    >
  </div>
  <div class="mt-[30px]">
    <van-button type="danger" @click="runError" :loading="errorLoading"
      >失败请求</van-button
    >
  </div>
  <div class="mt-[30px]">
    <van-button type="danger" @click="runError2" :loading="errorLoading2"
      >失败后再重试两次</van-button
    >
  </div>
  <div class="mt-[30px]">
    <van-button type="danger" @click="runError3" :loading="errorLoading3"
      >失败后dialog提示</van-button
    >
  </div>
</template>

<style scoped></style>
@/api
