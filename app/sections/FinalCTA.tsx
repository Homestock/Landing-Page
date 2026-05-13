'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { Reveal, R, Drift } from '@/components/Motion';

export function FinalCTA() {
  return (
    <section id="download" className="relative overflow-hidden bg-deep py-28">
      <Drift className="absolute inset-0 pointer-events-none" range={50} dur={20}>
        <div className="blob" style={{ width: 900, height: 900, top: -150, left: '50%', transform: 'translateX(-50%)', background: '#007AFF', opacity: 0.30 }} />
      </Drift>
      <Container className="relative">
        <Reveal className="text-center" stagger={0.10}>
          <R><h2 className="mx-auto max-w-3xl text-[44px] font-bold leading-[1.02] tracking-tighter3 sm:text-[56px] md:text-[80px]">Your home is<br />more than walls.</h2></R>
          <R><p className="mt-6 text-xl text-white/70">Start indexing it. One photo at a time.</p></R>
          <R>
            <motion.a
              href="https://apps.apple.com/"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-9 py-5 text-[17px] font-semibold text-deep"
            >
              <span>↓</span>
              <span>Download on the App Store</span>
            </motion.a>
          </R>
        </Reveal>
        <Reveal className="mt-20 border-t border-white/10 pt-6" stagger={0.05} delayChildren={0.2}>
          <R>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                <Link href="/" aria-label="HomeStock" className="flex items-center">
                  <Logo className="h-12 w-auto md:h-14" />
                </Link>
                <Link className="text-[13px] text-white/50 transition hover:text-white" href="/privacy">
                  Privacy Policy
                </Link>
                <Link className="text-[13px] text-white/50 transition hover:text-white" href="/terms">
                  Terms of Use
                </Link>
                <a className="text-[13px] text-white/50 hover:text-white" href="mailto:support@homestock.app">support@homestock.app</a>
              </div>
              <span className="text-xs text-white/40">© 2026 HomeStock. Made for iPhone.</span>
            </div>
          </R>
        </Reveal>
      </Container>
    </section>
  );
}
