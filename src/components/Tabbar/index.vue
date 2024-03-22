<template>
  <van-tabbar v-model="active" :placeholder="true" :route="true" fixed>
    <van-tabbar-item
      v-for="(item, index) in tabbarData"
      :key="index"
      :icon="item.icon"
      :to="item.to"
    >
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { t } from "@/locales";
import { ref, computed } from "vue";
const active = ref(0);
const tabbarData = computed(() => [
  {
    icon: "wap-home-o",
    title: t("common.home"),
    to: {
      name: "Home"
    }
  },
  {
    icon: "gem-o",
    title: t("common.demo"),
    to: {
      name: "Demo"
    }
  },
  {
    icon: "user-o",
    title: t("common.user"),
    to: {
      name: "User"
    }
  }
]);
</script>
