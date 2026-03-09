"use client";
import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string; // e.g. "reveal-up", "reveal-left", "reveal-right"
  style?: React.CSSProperties;
}

export default function RevealOnScroll({ children, delay = 0, className = "reveal-up", style = {} }: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`${className} ${isVisible ? 'is-visible' : ''}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
