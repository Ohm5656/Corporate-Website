import { useLayoutEffect, useRef } from 'react';
import { useInView } from 'motion/react';

interface CountUpAnimationProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function CountUpAnimation({ 
  end, 
  duration = 2.5, 
  suffix = '', 
  className = '' 
}: CountUpAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  useLayoutEffect(() => {
    const node = ref.current!;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animationFrame = 0;
    const finish = () => {
      cancelAnimationFrame(animationFrame);
      hasAnimated.current = true;
      node.textContent = `${end}${suffix}`;
    };
    const onPreferenceChange = () => { if (preference.matches) finish(); };
    preference.addEventListener('change', onPreferenceChange);
    if (preference.matches) finish();
    if (!hasAnimated.current && !isInView) node.textContent = `0${suffix}`;
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime: number | null = null;
      let previousCount = -1;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        // Easing function for smooth animation - ใช้ easeOutExpo เพื่อความนุ่มนวล
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        // ใช้ทศนิยมแทน Math.floor เพื่อความ smooth แล้วค่อย round ในตอนท้าย
        const currentCount = easeOutExpo * end;
        
        const count = Math.round(currentCount);
        if (count !== previousCount) node.textContent = `${count}${suffix}`;
        previousCount = count;

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          node.textContent = `${end}${suffix}`;
        }
      };

      animationFrame = requestAnimationFrame(animate);

    }
    return () => {
      cancelAnimationFrame(animationFrame);
      preference.removeEventListener('change', onPreferenceChange);
    };
  }, [isInView, end, duration, suffix]);

  return (
    <span ref={ref} className={className}>
      {end}{suffix}
    </span>
  );
}
