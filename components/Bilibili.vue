<template>
  <iframe
    :src="`//player.bilibili.com/player.html?bvid=${bvid}&autoplay=false&danmaku=false${p ? `&p=${p}` : ''}`"
    scrolling="no"
    border="0"
    frameborder="no"
    framespacing="0"
    allowfullscreen="true"
    class="bili_iframe"
  />
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const { bvid, p } = defineProps({
  bvid: {
    type: String,
    default: "BV1GJ411x7h7",
    required: true,
    validator: (value: string) => {
      return value.trim() !== "";
    },
  },
  p: {
    type: Number,
    required: false,
    validator: (value: number) => {
      return value > 0;
    },
  },
});
</script>

<style scoped>
.bili_iframe {
  width: 100%;
  height: 23rem;
}
</style>
