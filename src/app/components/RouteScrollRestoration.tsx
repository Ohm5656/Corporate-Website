import { useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

interface SavedPosition {
  top: number;
  anchorId?: string;
  anchorOffset?: number;
}

const positions = new Map<string, SavedPosition>();

function save(key: string, position: SavedPosition) {
  positions.set(key, position);
  if (positions.size > 60) positions.delete(positions.keys().next().value!);
}

export function rememberScrollPosition(key: string, anchor: HTMLElement) {
  save(key, { top: window.scrollY, anchorId: anchor.id, anchorOffset: anchor.getBoundingClientRect().top });
}

// Restore after the lazy page commits; the clicked card anchors layouts that
// include content-visibility sections whose estimated heights may change.
export function RouteScrollRestoration() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    const previous = history.scrollRestoration;
    history.scrollRestoration = 'manual';
    return () => { history.scrollRestoration = previous; };
  }, []);

  useLayoutEffect(() => {
    const saved = navigationType === 'POP' ? positions.get(location.key) : undefined;
    let frame = 0;
    let applied = false;
    let lastTop = saved?.top ?? 0;

    const record = () => {
      if (!applied) return;
      lastTop = window.scrollY;
      const existing = positions.get(location.key);
      save(location.key, Math.abs((existing?.top ?? -1) - lastTop) < 2
        ? { ...existing, top: lastTop } : { top: lastTop });
    };

    const restore = () => {
      const page = document.querySelector('[data-route-key]');
      if (!page || page.getAttribute('data-route-key') !== location.key) return;
      observer.disconnect();
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => {
          let target = saved?.top ?? 0;
          const anchor = saved?.anchorId ? document.getElementById(saved.anchorId) : null;
          if (anchor) target = window.scrollY + anchor.getBoundingClientRect().top - (saved?.anchorOffset ?? 80);
          else if (!saved && location.hash) {
            const section = document.getElementById(decodeURIComponent(location.hash.slice(1)));
            if (section) target = window.scrollY + section.getBoundingClientRect().top - 80;
          }
          window.scrollTo({ top: Math.max(0, target), behavior: 'instant' });
          lastTop = window.scrollY;
          applied = true;
          if (anchor) anchor.focus({ preventScroll: true });
          else if (navigationType !== 'POP') page.querySelector<HTMLElement>('h1')?.focus({ preventScroll: true });
        });
      });
    };

    const observer = new MutationObserver(restore);
    observer.observe(document.querySelector('main')!, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-route-key'] });
    window.addEventListener('scroll', record, { passive: true });
    restore();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', record);
      if (applied) {
        const existing = positions.get(location.key);
        save(location.key, { ...existing, top: lastTop });
      }
    };
  }, [location.key, location.hash, navigationType]);

  return null;
}
