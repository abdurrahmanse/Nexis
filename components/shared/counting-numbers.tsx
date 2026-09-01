"use client";

import { useCountingAnimation } from "@/lib/hooks/use-counting-animation";

export default function CountingNumbers({
  value,
  className,
  start = 0,
  duration = 800,
}: {
  value: number;
  className: string;
  start?: number;
  duration?: number;
}) {
  const count = useCountingAnimation(value, duration, start);

  return <p className={className}>{Intl.NumberFormat().format(count)}</p>;
}
