<script setup lang="ts">
import { computed, reactive, ref, onMounted } from "vue";
import type { CSSProperties } from "vue";
import { useParallax, useMouseInElement } from "@vueuse/core";
const target = ref(null);

const parallax = reactive(useParallax(target));
const { isOutside } = useMouseInElement(target);

// 创建自定义的 tilt 和 roll 值用于动画
const animatedTilt = ref(0);
const animatedRoll = ref(0);
const isAnimating = ref(false);

// 监听鼠标是否在元素外
const startResetAnimation = () => {
  if (isAnimating.value) return;
  
  isAnimating.value = true;
  const duration = 400; // 400ms
  const startTime = Date.now();
  const startTilt = animatedTilt.value;
  const startRoll = animatedRoll.value;
  
  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    
    animatedTilt.value = startTilt * (1 - easeOut);
    animatedRoll.value = startRoll * (1 - easeOut);
    
    if (progress < 1 && isOutside.value) {
      requestAnimationFrame(animate);
    } else {
      isAnimating.value = false;
    }
  };
  
  animate();
};

// 实时更新动画值
const updateValues = () => {
  if (!isOutside.value) {
    animatedTilt.value = parallax.tilt;
    animatedRoll.value = parallax.roll;
    isAnimating.value = false;
  } else if (!isAnimating.value) {
    startResetAnimation();
  }
  requestAnimationFrame(updateValues);
};

onMounted(() => {
  updateValues();
});

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
const layerBase = {
  position: "absolute",
  userSelect: "none",
  "-webkit-user-drag": "none",
  height: "100%",
  width: "100%",
  transition: ".3s ease-out all",
} as CSSProperties;
const containerStyle: CSSProperties = {
  margin: "3em auto",
  perspective: "300px",
};

const layer0 = computed(() => ({
  ...layerBase,
  content: "url(https://cdn.xyxsw.site/hdu-cs-wiki_main.png)",
  transform: `translateX(${animatedTilt.value * 3}px) translateY(${
    animatedRoll.value * 3
  }px) scale(1)`,
}));

const layer1 = computed(() => ({
  content: "url(https://cdn.xyxsw.site/sparkles.gif)",
  userSelect: "none" as CSSProperties['userSelect'],
  "-webkit-user-drag": "none",
  transform: `translateX(${animatedTilt.value * 6}px) translateY(${
    animatedRoll.value * 6
  }px) scale(1.33)`,
  "background-blend-mode": "overlay",
  filter: "brightness(1) contrast(1)",
  "mix-blend-mode": "color-dodge" as CSSProperties['mixBlendMode'],
  opacity: "1",
  position: "absolute" as CSSProperties['position'],
}));

const layer2 = computed(() => ({
  transform: `translateX(${animatedTilt.value * 9}px) translateY(${
    animatedRoll.value * 9
  }px) scale(1.33)`,
  "background-image":
    "linear-gradient(115deg,transparent 0%,#ec9bb6 25%,transparent 47%,transparent 53%,#ccac6f 75%,transparent 100%)",
  opacity: ".18",
  filter: "brightness(.5) contrast(1)",
  width: "100%",
  height: "100%",
  position: "absolute" as CSSProperties['position'],
}));

const layer3 = computed(() => ({
  ...layerBase,
  transform: `translateX(${animatedTilt.value * 12}px) translateY(${
    animatedRoll.value * 12
  }px) scale(1.33)`,
}));

const layer4 = layerBase;

const cardStyle = computed(() => ({
  background: "",
  height: "12rem",
  width: "28rem",
  borderRadius: "16px",
  border: "1px solid #000000",
  overflow: "hidden",
  transition: ".3s ease-out all",
  boxShadow:
    "-15px -10px 25px -20px rgba(17, 232, 218, 0.4), 15px 10px 25px -20px rgba(30, 165, 230, 0.4), -5px -5px 15px -8px rgba(17, 232, 218, 0.3), 5px 5px 15px -8px rgba(30, 165, 230, 0.3), 0 0 20px 6px rgba(255,255,255,0.1), 0 8px 25px -5px rgba(0, 0, 0, 0.3)",
  transform: `rotateX(${animatedRoll.value * 6}deg) rotateY(${
    animatedTilt.value * 6
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
          <img :style="layer1" class="image no-zoom" />
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
    rgba(255, 255, 255, 0.9) 47%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0.9) 53%,
    transparent 75%
  );
  background-position: 50% 50%;
  background-size: 150% 150%;
  opacity: 0.6;
  filter: brightness(1.8) contrast(2.2) blur(0.5px);
  transition: none;
  background-repeat: no-repeat;
  mix-blend-mode: overlay;
  transition: all 0.2s ease;
  animation: holoGradient 8s ease 0s 1;
}

@keyframes holoGradient {
  0%,
  100% {
    opacity: 0.6;
    background-position: 50% 50%;
    filter: brightness(1.8) contrast(2.2) blur(0.5px);
  }

  12%,
  18% {
    background-position: 95% 95%;
    opacity: 0.75;
    filter: brightness(2.1) contrast(2.5) blur(0.3px);
  }

  25%,
  30% {
    background-position: 5% 5%;
    opacity: 0.65;
    filter: brightness(1.9) contrast(2.3) blur(0.4px);
  }

  45%,
  50% {
    background-position: 95% 5%;
    opacity: 0.7;
    filter: brightness(2.0) contrast(2.4) blur(0.35px);
  }

  65%,
  70% {
    background-position: 5% 95%;
    opacity: 0.8;
    filter: brightness(2.2) contrast(2.6) blur(0.3px);
  }

  85% {
    background-position: 75% 75%;
    opacity: 0.68;
    filter: brightness(1.95) contrast(2.35) blur(0.4px);
  }
}
</style>
