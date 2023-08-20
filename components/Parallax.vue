<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import type { CSSProperties } from "vue";
import { useMounted, useParallax } from "@vueuse/core";
const target = ref(null);

const parallax = reactive(useParallax(target));

const targetStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  userSelect: "none",
  transition: ".3s ease-out all",
};
const cardWindowStyle: CSSProperties = {
  overflow: "hidden",
  fontSize: "6rem",
  position: "absolute",
  top: "calc(50% - 1em)",
  left: "calc(50% - 1em)",
  height: "2em",
  width: "2em",
  margin: "auto",
};
const layerBase: CSSProperties = {
  position: "absolute",
  userSelect: "none",
  "-webkit-user-drag": "none",
  height: "100%",
  width: "100%",
  transition: ".3s ease-out all",
};
const containerStyle: CSSProperties = {
  margin: "3em auto",
  perspective: "300px",
};

const layer0 = computed(() => ({
  ...layerBase,
  content: "url(https://cdn.xyxsw.site/hdu-cs-wiki_main.png)",
  transform: `translateX(${parallax.tilt * 10}px) translateY(${
    parallax.roll * 10
  }px) scale(1)`,
}));

const layer1 = computed(() => ({
  content: "url(https://cdn.xyxsw.site/sparkles.gif)",
  userSelect: "none",
  "-webkit-user-drag": "none",
  transform: `translateX(${parallax.tilt * 20}px) translateY(${
    parallax.roll * 20
  }px) scale(1.33)`,
  "background-blend-mode": "overlay",
  filter: "brightness(1) contrast(1)",
  "mix-blend-mode": "color-dodge",
  opacity: "1",
  position: "absolute",
}));

const layer2 = computed(() => ({
  transform: `translateX(${parallax.tilt * 30}px) translateY(${
    parallax.roll * 30
  }px) scale(1.33)`,
  "background-image":
    "linear-gradient(115deg,transparent 0%,#ec9bb6 25%,transparent 47%,transparent 53%,#ccac6f 75%,transparent 100%)",
  opacity: ".18",
  filter: "brightness(.5) contrast(1)",
  width: "100%",
  height: "100%",
  position: "absolute",
}));

const layer3 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 40}px) translateY(${
    parallax.roll * 40
  }px) scale(1.33)`,
}));

const layer4 = layerBase;

const cardStyle = computed(() => ({
  background: "",
  height: "14rem",
  width: "20rem",
  borderRadius: "20px",
  border: "1px solid #000000",
  overflow: "hidden",
  transition: ".3s ease-out all",
  boxShadow:
    "-20px -20px 30px -25px #11e8da, 20px 20px 30px -25px #1ea5e6, -7px -7px 10px -5px #11e8da, 7px 7px 10px -5px #1ea5e6, 0 0 13px 4px rgba(255,255,255,0.3),0 55px 35px -20px rgba(0, 0, 0, 0.5)",
  transform: `rotateX(${parallax.roll * 20}deg) rotateY(${
    parallax.tilt * 20
  }deg)`,
}));
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div>
    <div ref="target" :style="targetStyle">
      <div :style="containerStyle">
        <div :style="cardStyle">
          <div id="kirakira"></div>
          <div :style="layer2"></div>
          <img :style="layer1" class="image" />
          <div :style="cardWindowStyle">
            <img :style="layer0" class="image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#kirakira {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: 0.3s ease-out;
}

#kirakira:hover {
  background-image: linear-gradient(
    110deg,
    transparent 25%,
    #ec9bb6 48%,
    #ccac6f 52%,
    transparent 75%
  );
  background-position: 50% 50%;
  background-size: 250% 250%;
  opacity: 0.18;
  filter: brightness(0.66) contrast(1.33);
  transition: none;
  background-repeat: no-repeat;
  mix-blend-mode: color-dodge;
  transition: all 0.33s ease;
  animation: holoGradient 12s ease 0s 1;
}

@keyframes holoGradient {
  0%,
  100% {
    opacity: 0.3;
    background-position: 50% 50%;
    filter: brightness(0.5) contrast(1);
  }

  5%,
  9% {
    background-position: 100% 100%;
    opacity: 0.1;
    filter: brightness(0.75) contrast(1.25);
  }

  13%,
  17% {
    background-position: 0% 0%;
    opacity: 0.18;
  }

  35%,
  39% {
    background-position: 100% 100%;
    opacity: 0.2;
    filter: brightness(0.5) contrast(1);
  }

  55% {
    background-position: 0% 0%;
    opacity: 0.3;
    filter: brightness(0.75) contrast(1.25);
  }
}
</style>
