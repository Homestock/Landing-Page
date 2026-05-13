'use client';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

/**
 * Returns true on touch/small viewports or when the user prefers reduced motion.
 * Continuous transform animations (Float perpetual bob, Drift slow drift on
 * heavily-blurred blobs) are GPU-expensive on mobile — we skip them there.
 */
function useReducedAmbientMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px), (prefers-reduced-motion: reduce)');
    const update = () => setReduce(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);
  return reduce;
}

// Stagger container — wrap a section's content to make children fade-up in sequence
export function Reveal({
  children,
  className = '',
  stagger = 0.08,
  delayChildren = 0,
  as: As = 'div',
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  as?: keyof JSX.IntrinsicElements;
}) {
  const MotionAs = motion[As as keyof typeof motion] as React.ComponentType<HTMLMotionProps<'div'>>;
  return (
    <MotionAs
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren } },
      }}
    >
      {children}
    </MotionAs>
  );
}

// Child item that fades up + blurs in
export function R({
  children,
  className = '',
  y = 24,
  blur = 14,
  as: As = 'div',
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  blur?: number;
  as?: keyof JSX.IntrinsicElements;
}) {
  const MotionAs = motion[As as keyof typeof motion] as React.ComponentType<HTMLMotionProps<'div'>>;
  return (
    <MotionAs
      className={className}
      variants={{
        hidden: { opacity: 0, y, filter: `blur(${blur}px)` },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.9, ease: EXPO_OUT },
        },
      }}
    >
      {children}
    </MotionAs>
  );
}

// Perpetual gentle floating — for chips. Becomes a static div on mobile / reduced-motion.
export function Float({
  children,
  className = '',
  amp = 8,
  dur = 4,
  delay = 0,
  style,
}: {
  children: ReactNode;
  className?: string;
  amp?: number;
  dur?: number;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const reduce = useReducedAmbientMotion();
  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }
  return (
    <motion.div
      className={className}
      style={style}
      animate={{ y: [0, -amp, 0] }}
      transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  );
}

// Drift — for ambient blobs. Static on mobile / reduced-motion (constant transform on a
// 120px-blurred element is the #1 mobile-GPU offender on this page).
export function Drift({
  children,
  className = '',
  range = 30,
  dur = 14,
  style,
}: {
  children: ReactNode;
  className?: string;
  range?: number;
  dur?: number;
  style?: React.CSSProperties;
}) {
  const reduce = useReducedAmbientMotion();
  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }
  return (
    <motion.div
      className={className}
      style={style}
      animate={{ x: [0, range, -range / 2, 0], y: [0, -range / 2, range, 0] }}
      transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
