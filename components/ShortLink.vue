<template>
  <div>
    <button @click="generateShortUrl" :disabled="isLoading">
      {{ isLoading ? 'Generating...' : 'Generate Short URL for this page' }}
    </button>
    <div v-if="shortUrl && !isLoading">
      Short URL: <a :href="shortUrl" target="_blank">{{ shortUrl }}</a>
      <button @click="copyToClipboard">Copy URL</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 短链状态
const shortUrl = ref('');
const isLoading = ref(false);

// 生成短链的函数
const generateShortUrl = async () => {
  isLoading.value = true;
  const currentUrl = window.location.href;
  const uniqueKey = hashString(currentUrl).substring(0, 8); // 生成8位固定hash
  
  try {
    const response = await storeShortUrl(currentUrl, uniqueKey);
    if (response.success) {
      shortUrl.value = `${window.location.origin}/s/${uniqueKey}`;
    }
  } catch (error) {
    console.error('Error generating short URL:', error);
  } finally {
    isLoading.value = false;
  }
};

// 自定义的简易哈希函数
const hashString = (str) => {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  return (hash >>> 0).toString(16); // 保证为正数并转为16进制
};

// 存储短链
const storeShortUrl = async (longUrl, shortKey) => {
  const response = await fetch('/api/store-url', {
    method: 'POST',
    body: JSON.stringify({ longUrl, shortKey }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
};

// 复制到剪贴板
const copyToClipboard = () => {
  navigator.clipboard.writeText(shortUrl.value).then(() => {
    alert('Short URL copied to clipboard!');
  });
};
</script>
