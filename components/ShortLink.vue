<template>
  <a class="short-link-generator">
    <span @click="handleButtonClick" :disabled="isLoading" class="">
      <span v-if="isLoading" class="loading-icon" v-html="loadingSvg"></span>
      {{ buttonText }}
    </span>
  </a>
</template>

<script setup>
import { ref } from 'vue';

const shortUrl = ref('');
const isLoading = ref(false);
const isCopied = ref(false);
const buttonText = ref('生成页面短链');

const loadingSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity=".5"/>
    <path fill="currentColor" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z">
      <animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate"/>
    </path>
  </svg>
`;

const handleButtonClick = async () => {
  if (shortUrl.value) {
    copyToClipboard();
  } else {
    await generateShortUrl();
  }
};

const generateShortUrl = async () => {
  isLoading.value = true;
  buttonText.value = '生成中...';
  const currentUrl = window.location.href;
  const uniqueKey = hashString(currentUrl).substring(0, 8);
  
  try {
    const response = await storeShortUrl(currentUrl, uniqueKey);
    if (response.success) {
      shortUrl.value = `${window.location.origin}/s/${uniqueKey}`;
      buttonText.value = '已生成，点击复制';
    }
  } catch (error) {
    console.error('Error generating short URL:', error);
    buttonText.value = '生成失败';
  } finally {
    isLoading.value = false;
  }
};

const hashString = (str) => {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  return (hash >>> 0).toString(16);
};

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

const copyToClipboard = () => {
  navigator.clipboard.writeText(shortUrl.value).then(() => {
    buttonText.value = '已拷贝';
    isCopied.value = true;
    setTimeout(() => {
      isCopied.value = false;
      buttonText.value = '生成页面短链';
    }, 3000);
  });
};
</script>

<style scoped>
.short-link-generator {
  display: flex;
  align-items: center;
  padding: 0 12px;
  line-height: 64px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 245, 0.86);
  transition: color 0.25s;
  pointer-events: auto;
}

.short-link-generator:hover {
  color: #3dd68c;
}

.loading-icon {
  display: inline-block;
  margin-right: 8px;
  vertical-align: middle;
}

</style>
