<script setup lang="ts">
defineProps({
  block: {
    type: Object,
    required: true,
  },
})

const numberColors = [
  'text-transparent',
  'text-blue-500',
  'text-green-500',
  'text-yellow-500',
  'text-orange-500',
  'text-red-500',
  'text-purple-500',
  'text-pink-500',
  'text-teal-500',
]

interface Block {
  flagged: boolean;
  revealed: boolean;
  mine: boolean;
  adjacentMines: number;
}

function getBlockClass(block: Block): string {
  if (block.flagged)
    return 'bg-gray-500-10'
  if (!block.revealed)
    return 'bg-gray-500-10 hover:bg-gray-500-20'

  return block.mine
    ? 'bg-red-500-50'
    : numberColors[block.adjacentMines]
}
</script>

<style>
  .text-transparent { color: transparent; }
  .text-blue-500 { color: #3b82f6; }
  .text-green-500 { color: #10b981; }
  .text-yellow-500 { color: #f59e0b; }
  .text-orange-500 { color: #f97316; }
  .text-red-500 { color: #ef4444; }
  .text-red { color: rgba(248, 113, 113); }
  .text-purple-500 { color: #8b5cf6; }
  .text-pink-500 { color: #ec4899; }
  .text-teal-500 { color: #14b8a6; }
  .bg-gray-500-10 { background-color: rgba(107, 114, 128, 0.1); }
  .bg-gray-500-20 { background-color: rgba(107, 114, 128, 0.2); }
  .bg-red-500-50 { background-color: rgba(239, 68, 68, 0.5); }
  .font-600 { font-weight: 600; }
  .button-block { width: 30px; height: 30px; }
</style>

<template>
  <button
    style="display: flex; align-items: center; justify-content: center; min-width: 2rem; min-height: 2rem; margin: 1px; border: 0.5px solid rgba(166, 166, 166, 0.1);"
    :class="getBlockClass(block as Block)"
  >
    <template v-if="block.flagged">
      <div class="text-red button-block">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6Z"/></svg>
      </div>
    </template>
    <template v-else-if="block.revealed">
      <div v-if="block.mine" class="button-block">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M23 13v-2h-3.07a7.988 7.988 0 0 0-1.62-3.9l2.19-2.17l-1.43-1.43l-2.17 2.19A7.988 7.988 0 0 0 13 4.07V1h-2v3.07c-1.42.18-2.77.74-3.9 1.62L4.93 3.5L3.5 4.93L5.69 7.1A7.988 7.988 0 0 0 4.07 11H1v2h3.07c.18 1.42.74 2.77 1.62 3.9L3.5 19.07l1.43 1.43l2.17-2.19c1.13.88 2.48 1.44 3.9 1.62V23h2v-3.07c1.42-.18 2.77-.74 3.9-1.62l2.17 2.19l1.43-1.43l-2.19-2.17a7.988 7.988 0 0 0 1.62-3.9H23M12 8a4 4 0 0 0-4 4H6a6 6 0 0 1 6-6v2Z"/></svg>
      </div>
      <div v-else class="font-600">
        {{ block.adjacentMines }}
      </div>
    </template>
  </button>
</template>