"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: string;
  delay?: number;
  threshold?: number;
}

export default function ScrollAnimation({
  children,
  className = "",
  animation = "animate-fade-in-up",
  delay = 0,
  threshold = 0.15,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.classList.add("is-visible", animation);
          }, delay);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [animation, delay, threshold]);

  return (
    <div ref={ref} className={`scroll-animate ${className}`}>
      {children}
    </div>
  );
}
