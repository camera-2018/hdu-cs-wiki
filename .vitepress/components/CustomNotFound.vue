<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { withBase } from 'vitepress'
import { useData } from 'vitepress/dist/client/theme-default/composables/data'
import { useLangs } from 'vitepress/dist/client/theme-default/composables/langs'
import Sweep from './sweep.vue';

const { site, theme } = useData()
const { localeLinks } = useLangs({ removeCurrent: false })

const root = ref('/')
onMounted(() => {
  const path = window.location.pathname
    .replace(site.value.base, '')
    .replace(/(^.*?\/).*$/, '/$1')
  if (localeLinks.value.length) {
    root.value =
      localeLinks.value.find(({ link }) => link.startsWith(path))?.link ||
      localeLinks.value[0].link
  }
})
</script>

<template>
  <div class="NotFound">
    <p class="code">{{ theme.notFound?.code ?? '404' }}</p>
    <h1 class="title">{{ theme.notFound?.title ?? 'PAGE NOT FOUND' }}</h1>
    <div class="divider" />
    <div class="action">
      <a
        class="link"
        :href="withBase(root)"
        :aria-label="theme.notFound?.linkLabel ?? 'go to home'"
      >
        {{ theme.notFound?.linkText ?? 'Take me home' }}
      </a>
    </div>
    <blockquote class="quote">
      {{
        theme.notFound?.quote ??
        "虽然你迷路了，但是这是一个扫雷小游戏"
      }}
    </blockquote>
    <Sweep />
  </div>
</template>

<style scoped>
.NotFound {
  padding: 64px 24px 96px;
  text-align: center;
}

@media (min-width: 768px) {
  .NotFound {
    padding: 96px 32px 168px;
  }
}

.code {
  line-height: 128px;
  font-size: 128px;
  font-weight: 500;
}

.title {
  padding-top: 12px;
  letter-spacing: 2px;
  line-height: 20px;
  font-size: 35px;
  font-weight: 700;
}

.divider {
  margin: 24px auto 1px;
  width: 64px;
  height: 1px;
  background-color: var(--vp-c-divider);
}

.quote {
  margin: 0 auto;
  padding-top: 20px;
  max-width: 256px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.action {
  padding-top: 20px;
}

.link {
  display: inline-block;
  border: 1px solid var(--vp-c-brand);
  border-radius: 16px;
  padding: 3px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand);
  transition:
    border-color 0.25s,
    color 0.25s;
}

.link:hover {
  border-color: var(--vp-c-brand-dark);
  color: var(--vp-c-brand-dark);
}
</style>