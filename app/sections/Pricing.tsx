'use client';
import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { Reveal, R } from '@/components/Motion';
import { motion } from 'framer-motion';

const proFeatures = [
  'Unlimited items, rooms, boxes',
  'AI Capture (Gemini-powered)',
  'Shared Households (up to 10)',
  'Insurance PDF reports',
  'Cloud backup + sync',
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-x-clip bg-deep py-32">
      <Container>
        <Reveal className="text-center" stagger={0.10}>
          <R><div className="inline-flex"><Eyebrow label="PRICING" dotColor="#948F99" /></div></R>
          <R><h2 className="mx-auto mt-6 max-w-3xl text-[48px] font-bold leading-[1.05] tracking-tighter2 md:text-[56px]">Free to start.<br />Pro when you&apos;re ready.</h2></R>
        </Reveal>
        <Reveal className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3" stagger={0.10} delayChildren={0.2}>
          <R>
            <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }} className="h-full rounded-3xl bg-[#1A1A1F] p-8 text-left">
              <div className="text-[13px] font-semibold tracking-[0.14em] text-white/50">FREE</div>
              <div className="mt-2 text-[56px] font-bold leading-none tracking-tighter3 text-white">$0</div>
              <div className="mt-2 text-sm text-white/55">Forever. No card needed.</div>
              <div className="mt-5 border-t border-white/10" />
              <ul className="mt-5 space-y-2.5 text-[15px] text-white/80">
                <li className="flex items-center gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-white/40" />25 items</li>
                <li className="flex items-center gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-white/40" />6 rooms</li>
                <li className="flex items-center gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-white/40" />1 storage box</li>
                <li className="flex items-center gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-white/40" />Manual entry only</li>
              </ul>
            </motion.div>
          </R>
          <R>
            <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }} className="relative -mt-4 h-full rounded-3xl border-[1.5px] border-accent bg-white p-8 text-left text-deep shadow-[0_30px_100px_-10px_rgba(0,122,255,0.40)]">
              <div className="absolute right-6 top-[-12px] rounded-full bg-accent px-2.5 py-1.5">
                <span className="text-[11px] font-bold tracking-wider text-white">50% OFF</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[13px] font-semibold tracking-[0.14em] text-accent">YEARLY</span>
                <span className="rounded bg-accent/15 px-2 py-1 text-[10px] font-semibold tracking-wider text-accent">1-WEEK TRIAL</span>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-[56px] font-bold leading-none tracking-tighter3">$23.99</span>
                <span className="text-base text-deep/55">/ year</span>
              </div>
              <div className="mt-2 text-sm text-deep/70">then $0.46/week · save 50% vs monthly</div>
              <div className="mt-5 border-t border-deep/10" />
              <ul className="mt-5 space-y-2.5 text-[15px]">
                {proFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-6 w-full rounded-full bg-accent py-3 text-sm font-semibold text-white">
                Start free trial &nbsp;→
              </motion.button>
            </motion.div>
          </R>
          <R>
            <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }} className="h-full rounded-3xl bg-white p-8 text-left text-deep shadow-[0_12px_30px_-5px_rgba(0,0,0,0.06)]">
              <div className="text-[13px] font-semibold tracking-[0.14em] text-deep/50">MONTHLY</div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-[56px] font-bold leading-none tracking-tighter3">$3.99</span>
                <span className="text-base text-deep/55">/ month</span>
              </div>
              <div className="mt-2 text-sm text-deep/55">3-day free trial · then $0.92/week</div>
              <div className="mt-5 border-t border-deep/8" />
              <ul className="mt-5 space-y-2.5 text-[15px] text-deep/85">
                <li className="flex items-center gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-deep/40" />Everything in Yearly</li>
                <li className="flex items-center gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-deep/40" />Monthly billing</li>
                <li className="flex items-center gap-2.5"><span className="h-1.5 w-1.5 rounded-full bg-deep/40" />No commitment</li>
              </ul>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-6 w-full rounded-full border border-deep/20 py-3 text-sm font-semibold text-deep">
                Subscribe
              </motion.button>
            </motion.div>
          </R>
        </Reveal>
      </Container>
    </section>
  );
}
