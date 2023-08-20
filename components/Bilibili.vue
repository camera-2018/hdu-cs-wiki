<template>
  <iframe
    :src="`//player.bilibili.com/player.html?bvid=${bvid}&autoplay=false`"
    scrolling="no"
    border="0"
    frameborder="no"
    framespacing="0"
    allowfullscreen="true"
    class="bili_iframe"
  />
</template>

<script setup>
import { defineProps } from "vue";
const { bvid } = defineProps({
  bvid: {
    type: String,
    default: "BV1GJ411x7h7",
    required: true,
    validator: (value) => {
      return value.trim() !== "";
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
