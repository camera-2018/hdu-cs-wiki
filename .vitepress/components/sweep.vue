<script setup lang="ts">
import { GamePlay } from '../composables/logic.js'
import { useNow, useStorage } from '@vueuse/core'
import { watchEffect, computed } from 'vue'
import MineBlock from './MineBlock.vue'
import Confetti from './Confetti.vue'
const play = new GamePlay(9, 9, 10)

const now = useNow()
const timerMS = computed(() => Math.round((((play.state.value?.endMS ?? +now) - (play.state.value?.startMS ?? +now)) / 1000)))

useStorage('vuesweeper-state', play.state)
const state = computed(() => play.board)

const mineRest = computed(() => {
  if (!(play.state.value?.mineGenerated ?? false))
    return play.mines as number
  return play.blocks.reduce((a, b) => a + (b.mine ? 1 : 0) - (b.flagged ? 1 : 0), 0)
})

function newGame(difficulty) {
  switch (difficulty) {
    case 'very easy':
      play.reset(3, 3, 1)
      break
    case 'easy':
      play.reset(9, 9, 10)
      break
    case 'medium':
      play.reset(16, 16, 40)
      break
    case 'hard':
      play.reset(16, 30, 99)
      break
  }
}

watchEffect(() => {
  play.checkGameState()
})
</script>

<template>
  <div>
    <div class="flex gap1 justify-center p4">
      <button class="btn" @click="play.reset()">
        New Game
      </button>
      <button class="btn" @click="newGame('very easy')">
        Very Easy
      </button>
      <button class="btn" @click="newGame('easy')">
        Easy
      </button>
      <button class="btn" @click="newGame('medium')">
        Medium
      </button>
      <button class="btn" @click="newGame('hard')">
        Hard
      </button>
    </div>

    <div class="flex gap-10 justify-center">
      <div class="text-2xl flex gap-1 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32"><path fill="currentColor" d="M15 11h2v9h-2zm-2-9h6v2h-6z"/><path fill="currentColor" d="m28 9l-1.42-1.41l-2.25 2.25a10.94 10.94 0 1 0 1.18 1.65ZM16 26a9 9 0 1 1 9-9a9 9 0 0 1-9 9Z"/></svg>
        {{ timerMS }}
      </div>
      <div class="text-2xl flex gap-1 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M23 13v-2h-3.07a7.988 7.988 0 0 0-1.62-3.9l2.19-2.17l-1.43-1.43l-2.17 2.19A7.988 7.988 0 0 0 13 4.07V1h-2v3.07c-1.42.18-2.77.74-3.9 1.62L4.93 3.5L3.5 4.93L5.69 7.1A7.988 7.988 0 0 0 4.07 11H1v2h3.07c.18 1.42.74 2.77 1.62 3.9L3.5 19.07l1.43 1.43l2.17-2.19c1.13.88 2.48 1.44 3.9 1.62V23h2v-3.07c1.42-.18 2.77-.74 3.9-1.62l2.17 2.19l1.43-1.43l-2.19-2.17a7.988 7.988 0 0 0 1.62-3.9H23M12 8a4 4 0 0 0-4 4H6a6 6 0 0 1 6-6v2Z"/></svg>
        {{ mineRest }}
      </div>
    </div>

    <div class="p5 w-full overflow-auto">
      <div
        v-for="row, y in state"
        :key="y"
        class="flex items-center justify-center w-max ma"
      >
        <MineBlock
          v-for="block, x in row" :key="x"
          :block="block"
          @click="play.onClick(block)"
          @dblclick="play.autoExpand(block)"
          @contextmenu.prevent="play.onRightClick(block)"
        />
      </div>
    </div>

    <!-- <div flex="~ gap-1" justify-center>
      <button btn @click="toggleDev()">
        {{ isDev ? 'DEV' : 'NORMAL' }}
      </button>
    </div> -->

    <Confetti :passed="play.state.value.status === 'won'" />
  </div>
</template>

<style>
  .gap1 {
    gap: 0.25rem;
  }
  .gap-1 {
    gap: 0.25rem;
  }
  .gap-10 {
    gap: 2.5rem;
  }
  .flex {
    display: flex;
  }
  .justify-center {
    justify-content: center;
  }
  .items-center {
    align-items: center;
  }
  .text-2xl {
    font-size: 1.5rem;
  }
  .btn {
    background-color: var(--vp-button-brand-bg);
    border: 1px solid var(--vp-c-brand-light);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    cursor: pointer;
    color: #fff;
    transition: all 0.1s ease-in-out;
  }
  .btn:hover {
    background-color: var(--vp-c-brand-light);
    border-color: var(--vp-c-brand-light);
    transition: all 0.1s ease-in-out;
  }
  .btn.dark {
    background-color: var(--vp-c-brand-dark);
    border-color: var(--vp-c-brand-light);
    transition: all 0.1s ease-in-out;
  }
  .p4 {
    padding: 1rem;
  }
  .p5 {
    padding: 1.25rem;
  }
  .w-full {
    width: 100%;
  }
  .w-max {
    width: max-content;
  }
  .overflow-auto {
    overflow: auto;
  }
  .ma {
    margin: auto;
  }
</style>