'use client';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

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

// Child item that fades up
export function R({
  children,
  className = '',
  y = 24,
  as: As = 'div',
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: keyof JSX.IntrinsicElements;
}) {
  const MotionAs = motion[As as keyof typeof motion] as React.ComponentType<HTMLMotionProps<'div'>>;
  return (
    <MotionAs
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EXPO_OUT } },
      }}
    >
      {children}
    </MotionAs>
  );
}

// Perpetual gentle floating — for chips
export function Float({
  children,
  className = '',
  amp = 8,
  dur = 4,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  amp?: number;
  dur?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amp, 0] }}
      transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  );
}

// Drift — for ambient blobs
export function Drift({
  children,
  className = '',
  range = 30,
  dur = 14,
}: {
  children: ReactNode;
  className?: string;
  range?: number;
  dur?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ x: [0, range, -range / 2, 0], y: [0, -range / 2, range, 0] }}
      transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
