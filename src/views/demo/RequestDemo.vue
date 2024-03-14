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
      <van-button type="success" @click="run" :loading="loading">{{
        $t("demo.requestDemo.demo1")
      }}</van-button>
    </van-space>
  </div>
  <p>
    {{ data }}
  </p>
  <div class="mt-[30px]">
    <van-space>
      <van-button type="success" @click="run2" :loading="loading2">{{
        $t("demo.requestDemo.demo2")
      }}</van-button>
    </van-space>
  </div>
  <p>
    {{ data2 }}
  </p>
  <div class="mt-[30px]">
    <van-space>
      <van-button type="success" @click="run3" :loading="loading3">{{
        $t("demo.requestDemo.demo3")
      }}</van-button>
    </van-space>
  </div>
  <p>
    {{ data3 }}
  </p>
  <div class="mt-[30px]">
    <van-button type="success" @click="run4">{{
      $t("demo.requestDemo.demo4")
    }}</van-button>
  </div>
  <div class="mt-[30px]">
    <van-button type="danger" @click="runError" :loading="errorLoading">{{
      $t("demo.requestDemo.demo5")
    }}</van-button>
  </div>
  <div class="mt-[30px]">
    <van-button type="danger" @click="runError2" :loading="errorLoading2">{{
      $t("demo.requestDemo.demo6")
    }}</van-button>
  </div>
  <div class="mt-[30px]">
    <van-button type="danger" @click="runError3" :loading="errorLoading3">{{
      $t("demo.requestDemo.demo7")
    }}</van-button>
  </div>
</template>

<style scoped></style>
