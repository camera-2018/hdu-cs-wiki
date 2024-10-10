<template>
  <div>
    <button @click="generateShortUrl">Generate Short URL for this page</button>
    <div v-if="shortUrl">
      Short URL: <a :href="shortUrl" target="_blank">{{ shortUrl }}</a>
      <button @click="copyToClipboard">Copy URL</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 短链状态
const shortUrl = ref('');

// 生成短链的函数
const generateShortUrl = () => {
  const currentUrl = window.location.href;
  const uniqueKey = hashString(currentUrl).substring(0, 8); // 生成8位固定hash
  shortUrl.value = `${window.location.origin}/s/${uniqueKey}`;

  // 调用API保存长网址和短链
  storeShortUrl(currentUrl, uniqueKey);
};

// 自定义的简易哈希函数（DJB2）
const hashString = (str) => {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    // 位运算确保哈希值不会溢出
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  return (hash >>> 0).toString(16); // 右移确保是正数，再转为16进制
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
