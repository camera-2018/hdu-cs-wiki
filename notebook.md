<div class="home">
  <RenderJupyterNotebook :notebook="notebook" />
</div>

<script setup>
import RenderJupyterNotebook from "./components/RenderJupyterNotebook.vue";
import notebook from "./特征工程.json";
</script>