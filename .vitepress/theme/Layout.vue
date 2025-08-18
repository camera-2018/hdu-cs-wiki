<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import { nextTick, provide, onMounted, watch } from 'vue'
import { SpeedInsights } from '@vercel/speed-insights/vue'
import { useMediumZoom } from './useMediumZoom'
import { useRoute } from 'vitepress'

const { isDark } = useData()
const route = useRoute()
const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: { clientX: number, clientY: number }) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
    }
  )

})

onMounted(() => {
  // Set initial theme based on system preference if not already set
  if (localStorage.getItem('vitepress-theme-appearance') === null) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = prefersDark
  }

  watch(() => route.path, async () => {
    if (!enableTransitions()) return

    const contentContainer = document.querySelector('.content-container') as HTMLElement
    if (contentContainer) {
      contentContainer.classList.add('fly-in')
      await nextTick()
      setTimeout(() => {
        contentContainer.classList.remove('fly-in')
      }, 300)
    }
  })
})
  
useMediumZoom()
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-hero-before>
      <div
        class="absolute flex flex-col z-[40] w-full !max-w-full items-center justify-center bg-transparent transition-bg overflow-hidden h-[60vh] -top-16 pointer-events-none opacity-[.35] dark:opacity-50">
        <div class="jumbo absolute opacity-60 animate"></div>
      </div>
    </template>
    <template #home-hero-image>
      <WikiLogo />
    </template>
  </DefaultTheme.Layout>
  <SpeedInsights />
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

@keyframes flyIn {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.content-container.fly-in {
  animation: flyIn 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
  
.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}

.opacity-\[\.35\] {
  opacity: .35;
}

.bg-transparent {
  background-color: transparent;
}

.overflow-hidden {
  overflow: hidden;
}

.justify-center {
  justify-content: center;
}

.items-center {
  align-items: center;
}

.flex-col {
  flex-direction: column;
}

.\!max-w-full {
  max-width: 100% !important;
}

.w-full {
  width: 100%;
}

.h-\[60vh\] {
  height: 60vh;
}

.flex {
  display: flex;
}

.z-\[40\] {
  z-index: 40;
}

.-top-16 {
  top: -4rem;
}

.absolute {
  position: absolute;
}

.pointer-events-none {
  pointer-events: none;
}

.jumbo {
  --stripes: repeating-linear-gradient(100deg, #fff 0%, #fff 7%, transparent 10%, transparent 12%, #fff 16%);
  --stripesDark: repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%);
  --rainbow: repeating-linear-gradient(100deg, #60a5fa 10%, #e879f9 16%, #5eead4 22%, #60a5fa 30%);
  contain: strict;
  contain-intrinsic-size: 100vw 40vh;
  background-image: var(--stripes), var(--rainbow);
  background-size: 300%, 200%;
  background-position: 50% 50%, 50% 50%;
  height: inherit;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  -webkit-perspective: 1000;
  perspective: 1000;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  filter: invert(100%);
  -webkit-mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);
  mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);
  pointer-events: none;
}

.opacity-60 {
  opacity: .6;
}

.absolute {
  position: absolute;
}

@keyframes jumbo-5f0d2d0c {
  0% {
    background-position: 50% 50%, 50% 50%
  }

  to {
    background-position: 350% 50%, 350% 50%
  }
}

.jumbo:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: var(--stripes), var(--rainbow);
  background-size: 200%, 100%;
  mix-blend-mode: difference
}

.animate.jumbo:after {
  animation: jumbo-5f0d2d0c 90s linear infinite
}

@media (max-width: 768px) {
  .animate.jumbo:after {
    animation: none;
  }
}
</style>
