<script setup lang="ts">
const iconNames = [
  "icon-help",
  "icon-biaoge",
  "icon-dituicon",
  "icon-lujing",
  "icon-fenxi"
];
</script>

<template>
  <div>
    <Icon
      v-for="name in iconNames"
      :key="name"
      :name="name"
      className="m-[16px]"
    ></Icon>
  </div>
</template>

<style scoped></style>
