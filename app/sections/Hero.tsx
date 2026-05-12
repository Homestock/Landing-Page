'use client';
import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { Nav } from '@/components/Nav';
import { Reveal, R, Float, Drift } from '@/components/Motion';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-deep min-h-[820px] md:min-h-[900px]">
      <Nav />

      {/* Drifting ambient blobs */}
      <Drift className="absolute inset-0 pointer-events-none" range={30} dur={16}>
        <div className="blob" style={{ width: 900, height: 900, top: -200, right: -100, background: '#007AFF', opacity: 0.45 }} />
      </Drift>
      <Drift className="absolute inset-0 pointer-events-none" range={20} dur={18}>
        <div className="blob" style={{ width: 500, height: 500, bottom: -100, left: -150, background: '#8C5CFF', opacity: 0.25 }} />
      </Drift>

      <Container className="relative grid grid-cols-12 items-center gap-8 pb-12 pt-28 md:h-[900px] md:gap-12 md:pb-0 md:pt-20">
        {/* Left: copy with staggered fade-up */}
        <Reveal className="col-span-12 md:col-span-7" stagger={0.10} delayChildren={0.05}>
          <R>
            <div className="inline-flex rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5">
              <Eyebrow label="NEW · iOS 26 READY" />
            </div>
          </R>
          <R>
            <h1 className="mt-6 text-[48px] font-bold leading-[1.02] tracking-tighter3 sm:text-[56px] md:mt-7 md:text-[80px]">
              One photo.<br />
              Every detail.<br />
              Forever.
            </h1>
          </R>
          <R>
            <p className="mt-5 max-w-md text-lg leading-[1.55] text-white/70 md:mt-7 md:text-xl">
              Your home, indexed in seconds.<br />
              AI captures the rest.
            </p>
          </R>
          <R>
            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5 md:mt-8">
              <motion.a
                href="#download"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-deep md:px-7 md:py-4 md:text-base"
              >
                <span>↓</span>
                <span>Download on the App Store</span>
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-[15px] font-medium text-white/85 hover:text-white"
              >
                Watch demo&nbsp;&nbsp;→
              </motion.a>
            </div>
          </R>
        </Reveal>

        {/* Right: phone with floating chips. Outer wrapper scales the whole block down on mobile so chips don't overflow. */}
        <div className="col-span-12 origin-top scale-[0.7] sm:scale-90 md:col-span-5 md:scale-100">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30, filter: 'blur(20px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <Float amp={6} dur={6} className="relative mx-auto" style={{ width: 340 }}>
            <div className="relative mx-auto" style={{ width: 340, height: 700 }}>
              <div
                className="pointer-events-none absolute"
                style={{
                  inset: -60,
                  background: 'radial-gradient(closest-side, rgba(0,122,255,0.45), transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />
              <div
                className="relative h-full w-full"
                style={{
                  background: '#0A0A0C',
                  borderRadius: 48,
                  boxShadow: '0 40px 100px -10px rgba(0,122,255,0.30), 0 30px 80px -10px rgba(0,0,0,0.5)',
                  transform: 'rotate(-3deg)',
                }}
              >
                <div className="absolute overflow-hidden bg-paper" style={{ inset: 8, borderRadius: 42 }}>
                  <div className="flex h-full flex-col p-5 pt-12">
                    <div className="mb-4">
                      <div className="h-5 w-24 rounded bg-deep" />
                      <div className="mt-1.5 h-3 w-32 rounded bg-deep/30" />
                    </div>
                    <div className="flex-1 space-y-2.5">
                      {[
                        { c: '#007AFF', w: 70 },
                        { c: '#F59E0A', w: 80 },
                        { c: '#8C5CFF', w: 65 },
                        { c: '#6B9E80', w: 75 },
                        { c: '#ED8C8C', w: 60 },
                      ].map((r, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-3 rounded-xl bg-[#F2F2F0] p-2.5"
                          initial={{ opacity: 0, x: -10, filter: 'blur(8px)' }}
                          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                          transition={{ duration: 0.6, delay: 0.6 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="h-9 w-9 rounded-lg" style={{ background: r.c }} />
                          <div className="flex-1">
                            <div className="h-2.5 rounded bg-deep/60" style={{ width: `${r.w}%` }} />
                            <div className="mt-1.5 h-2 w-12 rounded bg-deep/20" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute rounded-[20px] bg-black" style={{ left: (340 - 110) / 2, top: 14, width: 110, height: 30 }} />
              </div>
            </div>
          </Float>

          {/* Floating chips — same width box as the phone, centered with mx-auto, so left/right offsets are relative to the phone */}
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2" style={{ width: 340, height: 700 }}>
            <Float amp={10} dur={5} delay={0.2} className="pointer-events-auto absolute" style={{ left: -140, top: 180 }}>
              <motion.div
                initial={{ opacity: 0, x: -30, rotate: -10, filter: 'blur(16px)' }}
                animate={{ opacity: 1, x: 0, rotate: -4, filter: 'blur(0px)' }}
                transition={{ duration: 1.0, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3.5 rounded-2xl bg-white px-5 py-4 shadow-[0_24px_60px_rgba(0,0,0,0.50)]"
              >
                <div className="h-12 w-12 rounded-xl bg-accent" />
                <div>
                  <div className="text-[15px] font-semibold leading-tight text-deep">MacBook Pro</div>
                  <div className="mt-1 text-[12px] text-deep/55">Office · $2,499</div>
                </div>
              </motion.div>
            </Float>

            <Float amp={8} dur={5.5} delay={0.5} className="pointer-events-auto absolute" style={{ left: -110, top: 400 }}>
              <motion.div
                initial={{ opacity: 0, x: -30, rotate: 8, filter: 'blur(16px)' }}
                animate={{ opacity: 1, x: 0, rotate: 2, filter: 'blur(0px)' }}
                transition={{ duration: 1.0, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl bg-white px-4 py-3 shadow-[0_24px_60px_rgba(0,0,0,0.50)]"
              >
                <div className="flex items-center gap-2">
                  <span className="block h-3 w-3 rounded bg-violet" />
                  <span className="text-[10px] font-bold tracking-[0.14em] text-violet">AI · 2.4s</span>
                </div>
                <div className="mt-1.5 text-[14px] font-semibold leading-tight text-deep">Sonos Arc</div>
                <div className="mt-0.5 text-[12px] text-deep/55">Living Room · $899</div>
              </motion.div>
            </Float>

            <Float amp={12} dur={6} delay={0.8} className="pointer-events-auto absolute" style={{ right: -140, top: 480 }}>
              <motion.div
                initial={{ opacity: 0, x: 30, rotate: 12, filter: 'blur(16px)' }}
                animate={{ opacity: 1, x: 0, rotate: 4, filter: 'blur(0px)' }}
                transition={{ duration: 1.0, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3.5 rounded-2xl bg-white px-5 py-4 shadow-[0_24px_60px_rgba(0,0,0,0.50)]"
              >
                <div className="h-12 w-12 rounded-xl bg-amber" />
                <div>
                  <div className="text-[15px] font-semibold leading-tight text-deep">KitchenAid Mixer</div>
                  <div className="mt-1 text-[12px] text-deep/55">Kitchen · $449</div>
                </div>
              </motion.div>
            </Float>
          </div>
        </motion.div>
        </div>
      </Container>
    </section>
  );
}
