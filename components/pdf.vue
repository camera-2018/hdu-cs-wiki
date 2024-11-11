<template>
  <div class="pdf">
    <button @click="open">打开PDF</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const url = defineProps({
  url: {
    type: String,
    default: "",
  },
});
const open = () => {
  window.open(url.url);
};
</script>

<style scoped>
button {
  width: 100px;
  height: 40px;
  background-color: #409eff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #66b1ff;
}

.pdf {
  display: block;
  margin: 1rem auto;
}
</style>
