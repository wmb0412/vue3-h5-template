<script setup lang="ts" name="Tools">
import RequestDemo from "./RequestDemo.vue";
import IconList from "./IconList.vue";
import DemoTitle from "./DemoTitle.vue";
</script>

<template>
  <div class="tools-content pt-[20px] px-[12px]">
    <DemoTitle :title="$t('demo.requestDemo.demoTitle')" />
    <RequestDemo />
    <div class="mt-[30px]">
      <ToolTitle title="iconfont" />
      <IconList />
    </div>
  </div>
</template>
