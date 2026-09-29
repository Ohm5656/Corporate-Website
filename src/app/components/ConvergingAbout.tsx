import { useLayoutEffect, useRef, type ReactNode } from 'react';

// One visibility observation; movement is handled by compositor-friendly CSS.
export function ConvergingAbout({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current!;
    const parts = [...root.querySelectorAll<HTMLElement>('[data-about-part]')];
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const columns = matchMedia('(min-width: 768px)');
    let observer: IntersectionObserver | null = null;
    const show = (part: HTMLElement) => { part.dataset.reveal = 'visible'; };
    const setup = () => {
      observer?.disconnect();
      if (reduced.matches || !('IntersectionObserver' in window)) {
        parts.forEach(show);
        return;
      }
      parts.forEach(part => { if (!part.dataset.reveal) part.dataset.reveal = 'pending'; });
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (columns.matches) parts.forEach(show);
          else show(entry.target as HTMLElement);
          observer?.unobserve(entry.target);
        }
      }, { threshold: .12, rootMargin: '0px 0px -24px 0px' });
      if (columns.matches) observer.observe(root);
      else parts.filter(part => part.dataset.reveal !== 'visible').forEach(part => observer?.observe(part));
    };
    setup();
    reduced.addEventListener('change', setup);
    columns.addEventListener('change', setup);
    return () => {
      observer?.disconnect();
      reduced.removeEventListener('change', setup);
      columns.removeEventListener('change', setup);
    };
  }, []);

  return <div ref={ref} className="ntp-about-converge grid md:grid-cols-2 gap-12 lg:gap-16 items-center">{children}</div>;
}
