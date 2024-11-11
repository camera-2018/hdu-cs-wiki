<template>
  <div class="blog-item" @click="openBlog(PostURL)">
    <div class="title" v-if="inMobile">{{ Title }}</div>
    <div class="info-container">
      <div class="info-part">
        <div class="title" v-if="!inMobile">{{ Title }}</div>
        <div class="description" v-if="!!Content">
          {{ Content }}
        </div>
        <div class="badge-list" v-if="!inMobile">
          <a
            class="split"
            v-if="Author"
            :href="withBase(AuthorURL || '')"
            @click.stop
            target="_blank"
            >{{ Author }}</a
          >
          <span class="split">{{ showTime }}</span>
          <span class="split" v-if="tag?.length">{{ tag.join(" · ") }}</span>
        </div>
      </div>
      <div
        v-if="cover"
        class="cover-img"
        :style="`background-image: url(${cover});`"
      ></div>
    </div>
    <div class="badge-list" v-if="inMobile">
      <a
        class="split"
        v-if="Author"
        :href="withBase(AuthorURL || '')"
        @click.stop
        target="_blank"
        >{{ Author }}</a
      >
      <span class="split">{{ showTime }}</span>
      <span class="split" v-if="tag?.length">{{ tag.join(" · ") }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withBase } from "vitepress";
import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";
const openBlog = (url) => {
  window.open(url, "_blank");
};
const { width } = useWindowSize();
const inMobile = computed(() => width.value <= 500);
function formatDate(d, fmt = "yyyy-MM-dd hh:mm:ss") {
  if (!(d instanceof Date)) {
    d = new Date(d);
  }
  const o = {
    "M+": d.getMonth() + 1, // 月份
    "d+": d.getDate(), // 日
    "h+": d.getHours(), // 小时
    "m+": d.getMinutes(), // 分
    "s+": d.getSeconds(), // 秒
    "q+": Math.floor((d.getMonth() + 3) / 3), // 季度
    S: d.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      `${d.getFullYear()}`.substr(4 - RegExp.$1.length)
    );
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length)
      );
  }
  return fmt;
}
function formatShowDate(date) {
  const source = date ? +new Date(date) : +new Date();
  const now = +new Date();
  const diff = now - source;
  const oneSeconds = 1000;
  const oneMinute = oneSeconds * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneWeek = oneDay * 7;
  if (diff < oneMinute) {
    return `${Math.floor(diff / oneSeconds)}秒前`;
  }
  if (diff < oneHour) {
    return `${Math.floor(diff / oneMinute)}分钟前`;
  }
  if (diff < oneDay) {
    return `${Math.floor(diff / oneHour)}小时前`;
  }
  if (diff < oneWeek) {
    return `${Math.floor(diff / oneDay)}天前`;
  }

  return formatDate(new Date(date), "yyyy-MM-dd");
}

const props = defineProps({
  Title: String,
  Date: String,
  Content: String,
  tag: {
    type: Array,
    required: false,
  },
  Author: String,
  cover: {
    type: String,
    required: false,
  },
  PostURL: String,
  AuthorURL: String,
});

const showTime = computed(() => {
  return formatShowDate(props.Date);
});
</script>

<style scoped>
.blog-item .pin {
  position: absolute;
  overflow: hidden;
  width: 30px;
  height: 30px;
  top: -4px;
  left: -4px;
  opacity: 0.5;
}
.blog-item:hover .pin {
  opacity: 1;
}
.blog-item .pin::before {
  content: "";
  position: absolute;
  width: 120%;
  height: 30px;
  background-image: linear-gradient(
    45deg,
    var(--blog-theme-color),
    var(--blog-theme-color)
  );
  transform: rotate(-45deg) translateY(-20px);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.23);
}

.blog-item {
  position: relative;
  border: 1px solid rgba(82, 82, 89, 0.32);
  border-radius: 0.5rem;
  padding: 1.5rem;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  transition: border-color 0.25s;
  cursor: pointer;
}

.blog-item:hover {
  border: 1px solid #09f;
}

.info-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.info-part {
  flex: 1;
}
.title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}
.description {
  color: var(--description-font-color);
  font-size: 14px;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.description-html {
  font-size: 14px;
}
.badge-list {
  font-size: 13px;
  color: var(--badge-font-color);
  margin-top: 8px;
}
.badge-list .split:not(:last-child)::after {
  content: "";
  display: inline-block;
  width: 1px;
  height: 8px;
  margin: 0 10px;
  background-color: #4e5969;
}
.cover-img {
  width: 120px;
  height: 80px;
  margin-left: 24px;
  border-radius: 2px;
  background-repeat: no-repeat;
  background-size: 120px 80px;
}

@media screen and (max-width: 500px) {
  .cover-img {
    width: 100px;
    height: 60px;
    background-size: 100px 60px;
  }
}
</style>
