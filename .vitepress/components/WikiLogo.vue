<script setup lang="ts">
import { animate, stagger } from 'animejs'
import { onMounted } from 'vue'

onMounted(() => {
  console.log('WikiLogo mounted')
  
  // 初始化SVG路径
  const paths = document.querySelectorAll('.wiki-logo-path') as NodeListOf<SVGPathElement>
  console.log('Found paths:', paths.length)
  
  paths.forEach((path, index) => {
    const length = path.getTotalLength()
    const strokeColor = path.getAttribute('stroke')
    
    // 设置初始状态
    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = `${length}`
    path.style.fill = 'transparent'
    
    // 设置CSS变量供动画使用
    path.style.setProperty('--fill-color', strokeColor || '#000')
    path.style.setProperty('--fill-opacity', '0')
    
    console.log(`Path ${index}: length=${length}, stroke=${strokeColor}`)
  })

  // 创建描边动画
  function createStrokeAnimation() {
    console.log('Starting stroke animation')
    
    return animate('.wiki-logo-path', {
      strokeDashoffset: { to: 0 },
      duration: 1500,
      delay: stagger(300),
      ease: 'inOutCubic',
      onComplete: () => {
        console.log('Stroke animation completed')
        setTimeout(() => {
          createFillAnimation()
        }, 100)
      }
    })
  }

  // 创建填充动画（使用CSS动画）
  function createFillAnimation() {
    console.log('Starting fill animation with CSS')
    
    paths.forEach((path, index) => {
      const strokeColor = path.getAttribute('stroke')
      
      setTimeout(() => {
        console.log(`Path ${index}: starting CSS fill animation`)
        
        // 直接设置fill属性
        path.style.fill = strokeColor || '#000'
        
        // 添加CSS动画类
        path.classList.add('fill-animation')
        
      }, index * 300)
    })
    
    // 填充完成后，等待2秒开始消失填充
    setTimeout(() => {
      console.log('All fill animations completed, starting fade out')
      setTimeout(() => {
        createFillFadeAnimation()
      }, 2000)
    }, 800 + (paths.length - 1) * 300)
  }

  // 创建填充消失动画
  function createFillFadeAnimation() {
    console.log('Starting fill fade out animation')
    
    paths.forEach((path, index) => {
      setTimeout(() => {
        console.log(`Path ${index}: starting fill fade out`)
        
        // 移除填充动画，添加消失动画
        path.classList.remove('fill-animation')
        path.classList.add('fill-fade-out')
        
      }, index * 300)
    })
    
    // 填充消失完成后，开始线段缩回
    setTimeout(() => {
      console.log('All fill fade animations completed, starting stroke shrink')
      createStrokeShrinkAnimation()
    }, 800 + (paths.length - 1) * 300)
  }

  // 创建线段缩回动画
  function createStrokeShrinkAnimation() {
    console.log('Starting stroke shrink animation')
    
    animate('.wiki-logo-path', {
      strokeDashoffset(el: SVGPathElement) {
        return el.getTotalLength()
      },
      duration: 1500,
      delay: stagger(300),
      ease: 'inOutCubic',
      onComplete: () => {
        console.log('Stroke shrink animation completed, restarting cycle')
        // 缩回完成后，立即开始下一个循环
        resetAndRestart()
      }
    })
  }

  // 重置并重新开始动画
  function resetAndRestart() {
    console.log('Resetting animation')
    
    paths.forEach(path => {
      const length = path.getTotalLength()
      path.style.strokeDashoffset = `${length}`
      path.style.fill = 'transparent'
      path.classList.remove('fill-animation', 'fill-fade-out')
    })
    
    // 立即开始下一个循环，不添加延迟
    createStrokeAnimation()
  }

  // 开始动画
  createStrokeAnimation()
})
</script>

<style scoped>
/* CSS动画用于填充效果 */
@keyframes fillIn {
  from {
    fill-opacity: 0;
  }
  to {
    fill-opacity: 1;
  }
}

@keyframes fillOut {
  from {
    fill-opacity: 1;
  }
  to {
    fill-opacity: 0;
  }
}

.fill-animation {
  animation: fillIn 0.8s ease-in-out forwards;
}

.fill-fade-out {
  animation: fillOut 0.8s ease-in-out forwards;
}

/* 确保SVG路径初始状态 */
.wiki-logo-path {
  fill: transparent;
  fill-opacity: 0;
  transition: fill-opacity 0.3s ease;
}
</style>



<template>
  <div class="wiki-logo-img">
    <svg width="364" height="300" viewBox="200 100 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip1_1_2)">
        <g clip-path="url(#clip2_1_2)">
          <path
            d="M381.715 155.12C392.052 150.613 402.971 148.711 414.744 149.613L403.971 189.821C398.094 190.904 392.475 194.011 385.278 199.761L384.152 200.673C383.962 200.828 383.771 200.985 383.579 201.145L382.411 202.12L381.215 203.14L380.606 203.665L379.347 204.769L368.531 214.392C352.63 228.337 340.198 236.577 323.582 242.177C305.59 248.241 285.702 243.009 263.41 228.548L261.886 227.548L260.355 226.52C258.308 225.129 248.294 216.608 246.207 215.067L277.907 189.937L278.527 190.393L279.143 190.841L280.36 191.715L280.96 192.14L282.147 192.967L283.312 193.76L284.456 194.525L285.58 195.259C285.767 195.379 285.951 195.499 286.135 195.615L287.228 196.304C287.588 196.529 287.946 196.749 288.299 196.964L289.351 197.593L290.38 198.195L291.39 198.768C291.723 198.955 292.052 199.135 292.378 199.312L293.344 199.828C293.663 199.995 293.978 200.157 294.29 200.315L295.214 200.776L296.116 201.208L296.996 201.615L297.43 201.807L298.279 202.173C298.976 202.467 299.652 202.733 300.306 202.973L301.079 203.248L301.456 203.376L302.196 203.612C302.439 203.687 302.679 203.759 302.914 203.825L303.61 204.012L303.95 204.096L304.611 204.247C305.155 204.363 305.674 204.453 306.171 204.52L306.755 204.588C308.378 204.749 309.731 204.635 310.806 204.272C318.432 201.703 324.988 198.051 332.648 192.184L333.936 191.185L334.588 190.671L335.91 189.608L337.258 188.501C337.711 188.127 338.171 187.741 338.635 187.351L340.042 186.153L341.482 184.908L342.955 183.615L348.278 178.865L353.447 174.279L355.284 172.683C364.844 164.473 372.627 159.081 381.715 155.12Z"
            stroke="#0DE3D2" stroke-width="2" class="wiki-logo-path" />
        </g>
      </g>
      <g clip-path="url(#clip3_1_2)">
        <g clip-path="url(#clip4_1_2)">
          <path
            d="M277.762 190.485L278.762 191.765C311.764 233.805 341.952 256.236 368.286 260.275C374.736 261.264 379.999 260.739 385.659 258.165L374.255 300.723C370.226 300.736 366.202 300.432 362.222 299.812C323.591 293.887 285.276 265.22 246.207 215.067L277.762 190.485Z"
            stroke="#1994E1" stroke-width="2" class="wiki-logo-path" />
        </g>
      </g>
      <g clip-path="url(#clip5_1_2)">
        <g clip-path="url(#clip6_1_2)">
          <path
            d="M277.762 190.485L246.206 215.067C247.176 215.784 249.863 218.011 252.664 220.327L253.506 221.024C256.455 223.46 259.355 225.84 260.355 226.52L261.886 227.548L263.41 228.548C285.7 243.009 305.59 248.241 323.58 242.177C324.714 241.795 325.843 241.396 326.964 240.979C311.723 229.576 295.61 213.225 278.762 191.765L277.762 190.485Z"
            stroke="#0B52BF" stroke-width="1" class="wiki-logo-path" />
        </g>
      </g>
      <g clip-path="url(#clip7_1_2)">
        <g clip-path="url(#clip8_1_2)">
          <path
            d="M433.387 169.611C435.372 169.763 437.38 169.993 439.415 170.305C477.966 176.219 515.14 203.513 551.676 250.885L527.6 283.507L519.402 271.485C488.902 232.264 459.762 213.893 433.351 209.843C429.455 209.244 425.991 209.2 422.612 209.825L433.387 169.611Z"
            stroke="#0DE3D2" stroke-width="2" class="wiki-logo-path" />
        </g>
      </g>
      <g clip-path="url(#clip9_1_2)">
        <g clip-path="url(#clip10_1_2)">
          <path
            d="M478.055 227.941C494.496 222.4 512.879 226.817 534.09 239.595L535.707 240.58C536.803 241.257 537.892 241.947 538.974 242.648L540.622 243.731C542.311 244.851 543.983 245.996 545.639 247.165L547.334 248.372C548.184 248.983 549.039 249.607 549.898 250.24L551.622 251.524L527.6 283.508L526.767 282.885C524.405 281.125 522.003 279.421 519.562 277.773L518.036 276.759C511.482 272.457 505.707 269.396 500.796 267.559C497.832 266.452 495.359 265.857 493.414 265.696C492.143 265.592 491.328 265.679 490.831 265.845C482.358 268.701 475.204 272.892 466.391 279.973L465.055 281.057L464.378 281.616L463.002 282.767C462.77 282.963 462.536 283.16 462.303 283.36L460.879 284.581L460.155 285.209L458.682 286.503L447.392 296.537L446.352 297.436C436.792 305.645 429.01 311.039 419.92 314.999C411.364 318.728 402.408 320.675 392.899 320.723L404.299 278.176C407.236 276.844 410.279 274.96 413.648 272.451L414.715 271.644C415.457 271.074 416.191 270.495 416.918 269.905L418.058 268.973C418.442 268.656 418.831 268.331 419.226 267.997L420.422 266.979L421.031 266.453L422.448 265.209L431.332 257.296L434.003 254.944L435.774 253.413C450.427 240.857 462.379 233.224 478.055 227.941Z"
            stroke="#1994E1" stroke-width="2" class="wiki-logo-path" />
        </g>
      </g>
      <g clip-path="url(#clip11_1_2)">
        <g clip-path="url(#clip12_1_2)">
          <path
            d="M478.055 227.941C494.496 222.4 512.879 226.817 534.09 239.595L535.707 240.58C536.803 241.257 537.892 241.947 538.974 242.648L540.622 243.731C542.311 244.851 543.983 245.996 545.639 247.165L547.334 248.372C548.184 248.983 549.039 249.607 549.898 250.24L551.351 251.323L527.6 283.509L519.402 271.487C504.682 252.556 490.278 238.483 476.343 228.532C476.91 228.332 477.479 228.135 478.055 227.941Z"
            stroke="#08BAB6" stroke-width="1" class="wiki-logo-path" />
        </g>
      </g>
    </svg>
  </div>
</template>