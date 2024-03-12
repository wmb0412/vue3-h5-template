<script setup lang="ts">
import cn from "classnames";
const props = defineProps({
  name: String,
  className: String
});
</script>

<template>
  <i :class="cn('iconfont', props.name, props.className)" />
</template>

<style scoped></style>
