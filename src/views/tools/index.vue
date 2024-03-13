<script setup lang="ts" name="Tools">
import RequestDemo from "./RequestDemo.vue";
import IconList from "./IconList.vue";
import ToolTitle from "./ToolTitle.vue";
</script>

<template>
  <div class="tools-content pt-[20px] px-[12px]">
    <ToolTitle title="请求示例" />
    <RequestDemo />
    <div class="mt-[30px]">
      <ToolTitle title="iconfont" />
      <IconList />
    </div>
  </div>
</template>
