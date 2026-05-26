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

      <Container className="relative grid grid-cols-1 items-center gap-y-10 pb-12 pt-28 md:h-[900px] md:grid-cols-12 md:gap-12 md:pb-0 md:pt-20">
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
                href="https://apps.apple.com/us/app/home-stock-house-inventory/id6764231947"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-deep md:px-7 md:py-4 md:text-base"
              >
                <span>↓</span>
                <span>Download on the App Store</span>
              </motion.a>
            </div>
          </R>
        </Reveal>

        {/* Right: phone with floating chips. .hero-phone-frame defines responsive --phone-w / --phone-h via globals.css. */}
        <motion.div
          className="hero-phone-frame relative col-span-12 md:col-span-5"
          initial={{ opacity: 0, y: 30, filter: 'blur(20px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <Float amp={6} dur={6} className="relative mx-auto" style={{ width: 'var(--phone-w)' }}>
            <div className="relative mx-auto" style={{ width: 'var(--phone-w)', height: 'var(--phone-h)' }}>
              <div
                className="pointer-events-none absolute hidden md:block"
                style={{
                  inset: -60,
                  background: 'radial-gradient(closest-side, rgba(0,122,255,0.45), transparent 70%)',
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero-phone.png"
                alt="HomeStock — rooms in My Home"
                width={1127}
                height={2303}
                className="relative h-full w-full select-none"
                draggable={false}
                style={{
                  objectFit: 'contain',
                  // drop-shadow (not box-shadow) so the glow hugs the phone silhouette, not the bounding box.
                  filter: 'drop-shadow(0 40px 60px rgba(0,122,255,0.30)) drop-shadow(0 30px 50px rgba(0,0,0,0.5))',
                  transform: 'rotate(-3deg)',
                }}
              />
            </div>
          </Float>

          {/* Floating chips — hidden on mobile (would crowd the small phone); shown md+ around the phone */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden -translate-x-1/2 md:block" style={{ width: 'var(--phone-w)', height: 'var(--phone-h)' }}>
            {/* Top-left — peeks just below "My Home" header, beside the "need attention" banner */}
            <Float amp={10} dur={5} delay={0.2} className="pointer-events-auto absolute" style={{ left: -190, top: 210 }}>
              <motion.div
                initial={{ opacity: 0, x: -30, rotate: 10, filter: 'blur(16px)' }}
                animate={{ opacity: 1, x: 0, rotate: 4, filter: 'blur(0px)' }}
                transition={{ duration: 1.0, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3.5 rounded-2xl bg-white px-5 py-4 shadow-[0_24px_60px_rgba(0,0,0,0.50)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/coffee-machine.png" alt="" className="h-12 w-12 rounded-xl object-contain" draggable={false} />
                <div>
                  <div className="text-[15px] font-semibold leading-tight text-deep">Espresso Machine</div>
                  <div className="mt-1 text-[12px] text-deep/55">Kitchen · $799</div>
                </div>
              </motion.div>
            </Float>

            {/* Middle-right — between row 1 and row 2 of the room grid */}
            <Float amp={8} dur={5.5} delay={0.5} className="pointer-events-auto absolute" style={{ right: -160, top: 320 }}>
              <motion.div
                initial={{ opacity: 0, x: 30, rotate: 10, filter: 'blur(16px)' }}
                animate={{ opacity: 1, x: 0, rotate: 4, filter: 'blur(0px)' }}
                transition={{ duration: 1.0, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3.5 rounded-2xl bg-white px-5 py-4 shadow-[0_24px_60px_rgba(0,0,0,0.50)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/monstera.png" alt="" className="h-12 w-12 rounded-xl object-contain" draggable={false} />
                <div>
                  <div className="text-[15px] font-semibold leading-tight text-deep">Monstera Deliciosa</div>
                  <div className="mt-1 text-[12px] text-deep/55">Living Room · $89</div>
                </div>
              </motion.div>
            </Float>

            {/* Bottom-left — peeks beside the Bedroom row, above the tab bar */}
            <Float amp={12} dur={6} delay={0.8} className="pointer-events-auto absolute" style={{ left: -170, top: 540 }}>
              <motion.div
                initial={{ opacity: 0, x: -30, rotate: -12, filter: 'blur(16px)' }}
                animate={{ opacity: 1, x: 0, rotate: -3, filter: 'blur(0px)' }}
                transition={{ duration: 1.0, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3.5 rounded-2xl bg-white px-5 py-4 shadow-[0_24px_60px_rgba(0,0,0,0.50)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/hair-dryer.png" alt="" className="h-12 w-12 rounded-xl object-contain" draggable={false} />
                <div>
                  <div className="text-[15px] font-semibold leading-tight text-deep">Pro Styler 3000</div>
                  <div className="mt-1 text-[12px] text-deep/55">Bathroom · $129</div>
                </div>
              </motion.div>
            </Float>
          </div>

          {/* Mobile-only chip strip — sits below the phone in flow (no overlap, no jank).
              Shows the same three items the floating chips reveal on desktop. */}
          <div className="mt-6 grid grid-cols-3 gap-2 md:hidden">
            {[
              { img: '/coffee-machine.png', name: 'Espresso Machine', sub: 'Kitchen' },
              { img: '/monstera.png', name: 'Monstera', sub: 'Living Room' },
              { img: '/hair-dryer.png', name: 'Pro Styler', sub: 'Bathroom' },
            ].map((c) => (
              <div
                key={c.name}
                className="flex flex-col items-start gap-2 rounded-2xl bg-white/[0.04] p-3"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt="" className="h-8 w-8 rounded-lg bg-white object-contain" draggable={false} />
                <div>
                  <div className="text-[13px] font-semibold leading-tight text-white">{c.name}</div>
                  <div className="mt-0.5 text-[11px] leading-tight text-white/50">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
