<!-- https://codepen.io/TWilson/pen/jOdWqbZ -->
<template>
  <div
      class="absolute flex flex-col z-[40] w-full !max-w-full items-center justify-center bg-transparent transition-bg overflow-hidden"
      :class="className"
  >
      <div
          class="jumbo absolute opacity-60"
          :class="{
              // '-safari': isSafari,
              '-animate': animated,
              '-static': isStatic
          }"
      />
  </div>
</template>

<style scoped>
@keyframes jumbo {
  from {
      background-position: 50% 50%, 50% 50%;
  }

  to {
      background-position: 350% 50%, 350% 50%;
  }
}

.jumbo {
  --stripes: repeating-linear-gradient(
      100deg,
      #fff 0%,
      #fff 7%,
      transparent 10%,
      transparent 12%,
      #fff 16%
  );
  --stripesDark: repeating-linear-gradient(
      100deg,
      #000 0%,
      #000 7%,
      transparent 10%,
      transparent 12%,
      #000 16%
  );
  --rainbow: repeating-linear-gradient(
      100deg,
      #60a5fa 10%,
      #e879f9 16%,
      #5eead4 22%,
      #60a5fa 30%
  );

  contain: strict;
  contain-intrinsic-size: 100vw 40vh;

  background-image: var(--stripes), var(--rainbow);
  background-size: 300%, 200%;
  background-position: 50% 50%, 50% 50%;

  height: inherit;

  /* Webkit GPU acceleration hack for some reason */
  /* https://stackoverflow.com/a/21364496 */
  -webkit-transform: translateZ(0);
  -webkit-perspective: 1000;
  -webkit-backface-visibility: hidden;

  filter: invert(100%);
  mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);
  pointer-events: none;
}

.jumbo::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: var(--stripes), var(--rainbow);
  background-size: 200%, 100%;
  background-attachment: fixed;
  mix-blend-mode: difference;
}

.-animate.jumbo::after {
  animation: jumbo 90s linear infinite;
}

.-static.jumbo::after {
  animation: unset !important;
}

/* .-safari::after {
  animation: unset !important;
} */

.dark .jumbo {
  background-image: var(--stripesDark), var(--rainbow);
  filter: opacity(50%) saturate(200%);
}

.dark .jumbo::after {
  background-image: var(--stripesDark), var(--rainbow);
}
</style>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps<{
  class?: string
  static?: boolean
}>()

const animated = ref(false)
const isStatic = ref(props.static)

const className = ref(props.class || 'h-screen')
// const isSafari = ref(
//     typeof window !== 'undefined'
//         ? navigator.userAgent.indexOf('Safari') !== -1 &&
//               navigator.userAgent.indexOf('Chrome') === -1
//         : false
// )

onMounted(() => {
  if (navigator?.hardwareConcurrency > 4) animated.value = true

  // isSafari.value =
  //     navigator.userAgent.indexOf('Safari') !== -1 &&
  //     navigator.userAgent.indexOf('Chrome') === -1
})
</script>
