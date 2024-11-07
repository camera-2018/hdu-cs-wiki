import mediumZoom, { Zoom } from 'medium-zoom'
import { inject, nextTick, onMounted, watch } from 'vue'

interface ZoomWithRefresh extends Zoom {
  refresh: () => void;
}

export const mediumZoomSymbol = Symbol('mediumZoom')

export function useMediumZoom() {
  return onMounted(() => (inject(mediumZoomSymbol) as ZoomWithRefresh)?.refresh())
}

interface App {
  provide: (symbol: symbol, value: unknown) => void;
}

interface Router {
  route: {
    path: string;
  };
}

export function createMediumZoomProvider(app: App, router: Router): void {
  // 检查是否是 SSR 环境，如果是则返回，不执行
  if (import.meta.env.SSR || typeof window === "undefined") {
    return;
  }

  // 在客户端环境中执行 mediumZoom
  const zoom = mediumZoom() as ZoomWithRefresh;
  zoom.refresh = () => {
    zoom.detach();
    zoom.attach(':not(a) > img:not(.no-zoom)');
    zoom.update({ background: 'var(--vp-c-bg)' });
  };

  app.provide(mediumZoomSymbol, zoom);

  watch(
    () => router.route.path,
    () => nextTick(() => zoom.refresh()),
  );
}
