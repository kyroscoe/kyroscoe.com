import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export function RouteBehavior() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const initial = useRef(true);
  useEffect(() => {
    const isInitial = initial.current;
    initial.current = false;
    const frame = requestAnimationFrame(() => {
      if (hash) {
        let id: string;
        try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
        const target = document.getElementById(id);
        target?.scrollIntoView({ block: 'start' });
        if (target && !isInitial) {
          const hadTabindex = target.hasAttribute('tabindex');
          if (!hadTabindex) target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
          if (!hadTabindex) target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
        }
      } else if (!isInitial) {
        // Preserve the browser's scroll restoration on back/forward navigation.
        if (navigationType !== 'POP') window.scrollTo({ top: 0, behavior: 'instant' });
        document.getElementById('main-content')?.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, navigationType]);
  return null;
}
