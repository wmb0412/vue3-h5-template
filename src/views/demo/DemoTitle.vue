<script setup lang="ts">
const props = defineProps({
  title: String
});
</script>

<template>
  <div class="pl-[12px] border-l-[3px] border-g-primary mb-[12px]">
    <h3 class="font-bold text-[18px] my-[4px]">{{ props.title }}</h3>
  </div>
</template>

<style scoped></style>
