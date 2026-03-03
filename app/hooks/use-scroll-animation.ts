import { useEffect, useRef, useState, useCallback } from "react";

export type AnimationType =
  | "slide-left"
  | "slide-right"
  | "slide-up"
  | "slide-down"
  | "zoom"
  | "rotate"
  | "flip"
  | "swing"
  | "elastic"
  | "cascade"
  | "glide"
  | "wave"
  | "morph"
  | "spiral"
  | "text-reveal"
  | "letter-spacing"
  | "motion-blur-left"
  | "motion-blur-right"
  | "motion-blur-up"
  | "shimmer"
  | "pulse-grow"
  | "float";

interface UseScrollAnimationOptions {
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  const {
    animation = "slide-up",
    delay = 0,
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = "0px 0px -50px 0px",
  } = options;

  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (triggerOnce && hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              setHasAnimated(true);
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, hasAnimated]);

  const getAnimationClass = useCallback(() => {
    if (!isVisible) return "";
    
    const animClass = `animate-${animation}`;
    const delayClass = delay > 0 ? `delay-${delay}` : "";
    
    return [animClass, delayClass].filter(Boolean).join(" ");
  }, [isVisible, animation, delay]);

  const style: React.CSSProperties = isVisible
    ? {}
    : { opacity: 0 };

  return {
    ref,
    isVisible,
    animationClass: getAnimationClass(),
    style,
  };
}

// Hook for staggered children animations
export function useStaggerAnimation(
  itemCount: number,
  baseDelay: number = 100,
  animation: AnimationType = "slide-up"
) {
  const getItemProps = useCallback(
    (index: number) => {
      const delay = Math.min(baseDelay * index, 1000);
      return {
        className: `animate-${animation} delay-${delay}`,
        style: { animationDelay: `${delay}ms` } as React.CSSProperties,
      };
    },
    [baseDelay, animation]
  );

  return { getItemProps };
}
