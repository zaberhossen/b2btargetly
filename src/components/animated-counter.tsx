"use client";

import { useEffect, useState, useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({ end, duration = 2000, prefix = "", suffix = "", className }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView({ triggerOnce: true });
  const animationFrameId = useRef<number>();

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(progress * end);
        if (progress < 1) {
          animationFrameId.current = requestAnimationFrame(step);
        } else {
            setCount(end);
        }
      };
      animationFrameId.current = requestAnimationFrame(step);
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{Math.floor(count)}{suffix}
    </span>
  );
}
