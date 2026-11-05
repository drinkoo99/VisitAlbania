import { useEffect, useRef, useState } from 'react';
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => { const m = window.matchMedia('(prefers-reduced-motion: reduce)'); const update = () => setReduced(m.matches); update(); m.addEventListener('change', update); return () => m.removeEventListener('change', update); }, []);
  return reduced;
}
export function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.documentElement.classList.add('js-reveal');
    const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); observer.unobserve(e.target); } }), { threshold: .2 });
    document.querySelectorAll('[data-reveal]').forEach(e => observer.observe(e));
    return () => { observer.disconnect(); document.documentElement.classList.remove('js-reveal'); };
  }, []);
}
export function useScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (reduced) return;
    let frame = 0;
    const measure = () => { frame = 0; const node = ref.current; if (!node) return; const rect = node.getBoundingClientRect(); setProgress(Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height - window.innerHeight)))); };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(measure); };
    schedule(); window.addEventListener('scroll', schedule, { passive: true }); window.addEventListener('resize', schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); };
  }, [reduced]);
  return { ref, progress, reduced };
}
