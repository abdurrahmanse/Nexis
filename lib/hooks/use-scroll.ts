import { useCallback, useSyncExternalStore } from "react";

export default function useScroll(threshold: number) {
  const getSnapshot = useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.scrollY > threshold;
  }, [threshold]);

  const getServerSnapshot = () => false;

  const subscribe = useCallback((callback: () => void) => {
    if (typeof window === "undefined") return () => {};
    
    let rafId: number;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(callback);
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
