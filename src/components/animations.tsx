"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";

// Start from visible server-rendered content; animate only after enhancement.
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced || !ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.animate(
            [
              { opacity: 0.96, transform: "translateY(10px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 450, delay, easing: "cubic-bezier(.2,.65,.3,1)" },
          );
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced, delay]);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  return (
    <motion.div
      key={pathname}
      initial={false}
      animate={{ opacity: reduced ? 1 : [0.94, 1], y: reduced ? 0 : [4, 0] }}
      transition={{ duration: reduced ? 0 : 0.3 }}
      className="page-transition"
    >
      {children}
    </motion.div>
  );
}

export function AnimatedTooth({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`tooth-art ${className}`}
      viewBox="0 0 180 220"
      fill="none"
      aria-hidden="true"
    >
      <path
        className="tooth-contour"
        pathLength="1"
        d="M90 35C70 35 53 14 31 26C5 40 15 76 27 96C38 117 35 168 53 191C64 205 69 176 73 157C77 139 82 123 90 123C98 123 103 139 107 157C111 176 116 205 127 191C145 168 142 117 153 96C165 76 175 40 149 26C127 14 110 35 90 35Z"
      />
      <path
        className="enamel-contour"
        pathLength="1"
        d="M44 48C58 42 73 59 90 59C107 59 122 42 136 48M44 80C51 97 55 108 57 131"
      />
      <path
        className="smile-contour"
        pathLength="1"
        d="M28 211Q90 225 152 211"
      />
    </svg>
  );
}

export function SmileLine() {
  return (
    <svg
      className="smile-line"
      viewBox="0 0 220 25"
      fill="none"
      aria-hidden="true"
    >
      <path pathLength="1" d="M2 4Q110 34 218 4" />
    </svg>
  );
}
