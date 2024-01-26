<script setup>
import confetti from 'canvas-confetti'
import { watch } from 'vue'

const props = defineProps(
  {
    passed: {
      type: Boolean,
      required: true,
    },
  },
  ['passed'],
)

function congrats() {
  const defaults = {
    colors: [
      '#5D8C7B',
      '#F2D091',
      '#F2A679',
      '#D9695F',
      '#8C4646',
    ],
    shapes: ['square'],
    ticks: 500,
  }
  confetti({
    ...defaults,
    particleCount: 80,
    spread: 100,
    origin: { y: 0 },
  })
  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 50,
      angle: 60,
      spread: 80,
      origin: { x: 0 },
    })
  }, 250)
  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 50,
      angle: 120,
      spread: 80,
      origin: { x: 1 },
    })
  }, 400)
}

watch(
  () => props.passed,
  (v) => {
    if (v)
      setTimeout(congrats, 300)
  },
  { flush: 'post' },
)
</script>

<template>
  <div />
</template>
