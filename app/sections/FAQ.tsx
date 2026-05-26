'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { Reveal, R } from '@/components/Motion';

const qa = [
  ['Does HomeStock work offline?', 'Yes. Adding and viewing items works offline. Sync resumes when you reconnect.'],
  ['Can I use it without an account?', 'Yes. Start anonymously — sign in with Apple later if you want to back up or share.'],
  ['What happens to my data if I cancel Pro?', 'Your data stays. You revert to the Free tier limits for new items.'],
  ["Is the AI on-device or cloud?", "Cloud (Gemini). One photo round-trip is ~3 seconds. We don't store the photo on AI servers."],
  ['Can I export everything?', 'Yes — your full inventory exports as an Excel (.xlsx) file from Settings.'],
  ['Can I share with my family?', 'On Pro — invite up to 10 members per house with owner / editor / viewer roles.'],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative overflow-hidden bg-deep py-28">
      <Container>
        <Reveal className="text-center" stagger={0.10}>
          <R><div className="inline-flex"><Eyebrow label="FAQ" dotColor="#948F99" /></div></R>
          <R><h2 className="mt-6 text-[48px] font-bold tracking-tighter2 md:text-[56px]">Quick answers.</h2></R>
        </Reveal>
        <Reveal className="mx-auto mt-12 max-w-3xl space-y-3" stagger={0.05} delayChildren={0.15}>
          {qa.map(([q, a], i) => (
            <R key={q}>
              <motion.div
                whileHover={{ borderColor: 'rgba(255,255,255,0.20)' }}
                className="cursor-pointer rounded-2xl border border-white/8 bg-white/[0.03] p-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex items-center justify-between">
                  <div className="text-base font-semibold text-white">{q}</div>
                  <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="text-xl text-white/50">+</motion.span>
                </div>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="mt-3 text-sm leading-[1.6] text-white/60">{a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </R>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
