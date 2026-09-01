import { useState, useEffect } from "react";

const easeOutQuad = (t: number, b: number, c: number, d: number) => {
  t = t > d ? d : t / d;
  return Math.round(-c * t * (t - 2) + b);
};

export function useCountingAnimation(value: number, duration: number = 800, start: number = 0) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime: number | undefined;
    
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const timePassed = timestamp - startTime;
      const progress = timePassed / duration;
      const currentCount = easeOutQuad(progress, 0, value, 1);
      
      if (currentCount >= value) {
        setCount(value);
        return;
      }
      
      setCount(currentCount);
      requestAnimationFrame(animateCount);
    };
    
    requestAnimationFrame(animateCount);
  }, [value, duration]);

  return count;
}
