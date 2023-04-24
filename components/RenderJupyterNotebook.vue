<template>
  <div ref="NotebookFragment" class="notebook-fragment" />
</template>

<script>
import { Notebook } from "../utils/index";

export default {
  name: "RenderJupyterNotebook",
  props: {
    notebook: { required: true, type: Object },
  },
  async mounted() {
    const notebook = new Notebook(this.notebook, false);
    const fragment = await notebook.render();
    this.$refs.NotebookFragment.appendChild(fragment);
  },
};
</script>
