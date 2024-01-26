<template>
  <div ref="NotebookFragment" class="notebook-fragment">
    <div ref="loading" id="loading">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        id="loadingsvg"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
        >
          <path
            stroke-dasharray="2 4"
            stroke-dashoffset="6"
            d="M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"
          >
            <animate
              attributeName="stroke-dashoffset"
              dur="0.6s"
              repeatCount="indefinite"
              values="6;0"
            />
          </path>
          <path
            stroke-dasharray="30"
            stroke-dashoffset="30"
            d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.1s"
              dur="0.3s"
              values="30;0"
            />
          </path>
          <path stroke-dasharray="10" stroke-dashoffset="10" d="M12 16v-7.5">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.5s"
              dur="0.2s"
              values="10;0"
            />
          </path>
          <path
            stroke-dasharray="6"
            stroke-dashoffset="6"
            d="M12 8.5l3.5 3.5M12 8.5l-3.5 3.5"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.7s"
              dur="0.2s"
              values="6;0"
            />
          </path>
        </g>
      </svg>
      <div>本页面包含 Jupyter NoteBook , 正在渲染中... ...</div>
    </div>
  </div>
</template>

<script setup>
import { Notebook } from "../utils/index";
import { onMounted, ref } from "vue";
const props = defineProps({
  notebook: { required: true, type: Object },
});
const NotebookFragment = ref(null);
const loading = ref(null);
onMounted(async () => {
  const notebook = new Notebook(props.notebook, false);
  const fragment = await notebook.render();
  NotebookFragment.value.removeChild(loading.value);
  NotebookFragment.value.appendChild(fragment);
});
</script>

<style scoped>
#loading {
  font-size: 1.5rem;
  text-align: center;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  animation: rainbow 10s cubic-bezier(0.1, 0.7, 1, 0.1) infinite !important;
}

#loadingsvg {
  width: 5rem;
  height: 5rem;
}
</style>
