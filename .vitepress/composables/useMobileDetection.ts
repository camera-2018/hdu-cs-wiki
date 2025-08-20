import { useMediaQuery, usePointer, useWindowSize } from '@vueuse/core'
import type { ComputedRef } from 'vue'
import { computed } from 'vue'

export function useMobileDetection(): { isMobile: ComputedRef<boolean> } {
  const { width } = useWindowSize()
  const isMobileQuery = useMediaQuery('(max-width: 768px)')
  const isTouchQuery = useMediaQuery('(pointer: coarse)')
  const { pointerType } = usePointer()
  
  const isMobile = computed(() => {
    const isSmallScreen = width.value <= 768
    const mediaQueryMobile = isMobileQuery.value
    const isTouchDevice = pointerType.value === 'touch' || isTouchQuery.value
    const userAgentMobile = typeof navigator !== 'undefined' && 
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent)
    
    return isSmallScreen || (mediaQueryMobile && isTouchDevice) || userAgentMobile
  })
  
  return { isMobile }
}