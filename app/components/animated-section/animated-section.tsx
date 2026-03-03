import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./animated-section.module.css";
import classNames from "classnames";

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

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  as?: "div" | "section" | "article" | "aside" | "header" | "footer" | "main" | "nav" | "span";
  staggerChildren?: boolean;
  staggerDelay?: number;
}

export function AnimatedSection({
  children,
  animation = "slide-up",
  delay = 0,
  className,
  threshold = 0.1,
  rootMargin = "0px 0px -80px 0px",
  as = "div",
  staggerChildren = false,
  staggerDelay = 100,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(element);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const animationClass = styles[animation] || styles["slide-up"];
  
  const Tag = as;
  
  return (
    <Tag
      ref={ref as any}
      className={classNames(
        styles.animated,
        isVisible && animationClass,
        isVisible && styles.visible,
        className
      )}
      style={{
        animationDelay: isVisible ? `${delay}ms` : undefined,
        opacity: isVisible ? undefined : 0,
        "--stagger-delay": `${staggerDelay}ms`,
      } as React.CSSProperties}
      data-stagger={staggerChildren ? "true" : undefined}
    >
      {children}
    </Tag>
  );
}

interface AnimatedTextProps {
  children: string;
  animation?: "text-reveal" | "letter-spacing" | "motion-blur-up";
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export function AnimatedText({
  children,
  animation = "text-reveal",
  delay = 0,
  className,
  as: Component = "span",
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const animationClass = styles[animation] || styles["text-reveal"];

  return (
    <Component
      ref={ref as any}
      className={classNames(
        styles.animatedText,
        isVisible && animationClass,
        isVisible && styles.visible,
        className
      )}
      style={{
        animationDelay: isVisible ? `${delay}ms` : undefined,
        opacity: isVisible ? undefined : 0,
      }}
    >
      {children}
    </Component>
  );
}

interface AnimatedGroupProps {
  children: ReactNode[];
  animation?: AnimationType;
  baseDelay?: number;
  staggerDelay?: number;
  className?: string;
  itemClassName?: string;
}

export function AnimatedGroup({
  children,
  animation = "slide-up",
  baseDelay = 0,
  staggerDelay = 100,
  className,
  itemClassName,
}: AnimatedGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const animationClass = styles[animation] || styles["slide-up"];

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={classNames(
            styles.animated,
            isVisible && animationClass,
            isVisible && styles.visible,
            itemClassName
          )}
          style={{
            animationDelay: isVisible ? `${baseDelay + index * staggerDelay}ms` : undefined,
            opacity: isVisible ? undefined : 0,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
