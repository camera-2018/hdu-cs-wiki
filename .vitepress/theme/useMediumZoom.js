import mediumZoom from 'medium-zoom'
import { inject, nextTick, onMounted, watch } from 'vue'

export const mediumZoomSymbol = Symbol('mediumZoom')

export function useMediumZoom() {
  return onMounted(() => inject(mediumZoomSymbol)?.refresh())
}

export function createMediumZoomProvider(app, router) {
  if (import.meta.env.SSR)
    return
  const zoom = mediumZoom()
  zoom.refresh = () => {
    zoom.detach()
    zoom.attach(':not(a) > img:not(.no-zoom)')
    zoom.update({ background: 'var(--vp-c-bg)' })
  }
  app.provide(mediumZoomSymbol, zoom)
  watch(
    () => router.route.path,
    () => nextTick(() => zoom.refresh()),
  )
}