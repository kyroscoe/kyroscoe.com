import { useSyncExternalStore } from 'react';

const preference = '(prefers-reduced-motion: reduce)';
const changeEvent = 'kyroscoe-motion-change';
let paused = false;

function subscribe(callback: () => void) {
  const media = typeof window.matchMedia === 'function' ? window.matchMedia(preference) : null;
  media?.addEventListener('change', callback);
  document.addEventListener('visibilitychange', callback);
  window.addEventListener(changeEvent, callback);
  return () => {
    media?.removeEventListener('change', callback);
    document.removeEventListener('visibilitychange', callback);
    window.removeEventListener(changeEvent, callback);
  };
}

function enabled() {
  return !paused && typeof window.matchMedia === 'function'
    && !window.matchMedia(preference).matches && document.visibilityState !== 'hidden';
}

export function useMotionEnabled() {
  return useSyncExternalStore(subscribe, enabled, () => false);
}

export function useMotionPaused() {
  return useSyncExternalStore(subscribe, () => paused, () => false);
}

export function setMotionPaused(value: boolean) {
  paused = value;
  window.dispatchEvent(new window.Event(changeEvent));
}
