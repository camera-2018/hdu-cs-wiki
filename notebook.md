<div class="home">
  <RenderJupyterNotebook :notebook="notebook" />
</div>

<script>
import RenderJupyterNotebook from "./components/RenderJupyterNotebook.vue";
import example from "./特征工程.json";

export default {
  name: "HomeView",
  components: { RenderJupyterNotebook },
  data() {
    return {
      notebook: example,
    };
  },
};
</script>