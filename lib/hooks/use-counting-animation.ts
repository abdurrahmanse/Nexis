import { useState, useEffect, useRef } from "react";

const easeOutQuad = (t: number, b: number, c: number, d: number) => {
  t = t > d ? d : t / d;
  return Math.round(-c * t * (t - 2) + b);
};

export function useCountingAnimation(value: number, duration: number = 800, start: number = 0) {
  const [count, setCount] = useState(start);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    let startTime: number | undefined;
    
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const timePassed = timestamp - startTime;
      const progress = timePassed / duration;
      const currentCount = easeOutQuad(progress, start, value - start, 1);
      
      if (currentCount >= value) {
        setCount(value);
        return;
      }
      
      setCount(currentCount);
      frameRef.current = requestAnimationFrame(animateCount);
    };
    
    frameRef.current = requestAnimationFrame(animateCount);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [value, duration, start]);

  return count;
}
