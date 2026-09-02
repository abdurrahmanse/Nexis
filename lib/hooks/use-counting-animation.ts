import { useCallback, useRef, useSyncExternalStore } from "react";

const easeOutQuad = (t: number, b: number, c: number, d: number) => {
  t = t > d ? d : t / d;
  return Math.round(-c * t * (t - 2) + b);
};

export function useCountingAnimation(value: number, duration: number = 800, start: number = 0) {
  const currentCountRef = useRef<number>(start);

  const getSnapshot = useCallback(() => currentCountRef.current, []);
  const getServerSnapshot = useCallback(() => start, [start]);

  const subscribe = useCallback((callback: () => void) => {
    let startTime: number | undefined;
    let frameId: number;
    
    currentCountRef.current = start;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const timePassed = timestamp - startTime;
      const progress = timePassed / duration;
      const currentCount = easeOutQuad(progress, start, value - start, 1);
      
      if (currentCount >= value) {
        currentCountRef.current = value;
        callback();
        return;
      }
      
      currentCountRef.current = currentCount;
      callback();
      frameId = requestAnimationFrame(animateCount);
    };
    
    frameId = requestAnimationFrame(animateCount);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [value, duration, start]);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
