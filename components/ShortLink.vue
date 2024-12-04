<template>
  <a class="short-link-generator" v-if="!isCdnWiki">
    <span @click="handleButtonClick">
      {{ buttonText }}
    </span>
  </a>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vitepress';

const shortUrl = ref('');
const isCdnWiki = ref(false);
const isCopied = ref(false);
const buttonText = ref('生成页面短链');
const route = useRoute();

const handleButtonClick = async () => {
  await generateShortUrl();
  copyToClipboard();
};

const generateShortUrl = async () => {
  const currentUrl = window.location.href;
  const uniqueKey = hashString(currentUrl).substring(0, 8);

  try {
    const response = await storeShortUrl(currentUrl, uniqueKey);
    if (response.success) {
      shortUrl.value = `${window.location.origin}/s/${uniqueKey}`;
      buttonText.value = '已生成并拷贝';
    }
  } catch (error) {
    console.error('Error generating short URL:', error);
    buttonText.value = '生成失败';
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
    buttonText.value = '已拷贝到剪贴板';
    isCopied.value = true;
    setTimeout(() => {
      isCopied.value = false;
      buttonText.value = '生成页面短链';
    }, 3000);
  });
};

watch(route, () => {
  resetState();
});

const resetState = () => {
  shortUrl.value = '';
  buttonText.value = '生成页面短链';
  isCopied.value = false;
};

onMounted(() => {
  resetState();
  isCdnWiki.value = window.location.hostname === 'xyxsw.site';
});
</script>

<style scoped>
.short-link-generator {
  display: flex;
  align-items: center;
  padding: 0 12px;
  line-height: 64px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.86);
  transition: color 0.25s;
  pointer-events: auto;
  cursor: pointer;
}

.short-link-generator:hover {
  color: #3dd68c;
}

.dark .short-link-generator {
  color: rgba(255, 255, 245, 0.86);
}

@media (max-width: 768px) {
  .short-link-generator {
    padding-left: 0px;
    line-height: 48px;
  }
}
</style>
