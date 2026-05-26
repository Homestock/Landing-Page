import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { Reveal, R, Float, Drift } from '@/components/Motion';

export function AICapture() {
  return (
    <section className="relative overflow-hidden bg-deep py-32">
      <Drift className="absolute inset-0 pointer-events-none" range={30}>
        <div className="blob" style={{ width: 700, height: 700, top: 50, right: -100, background: '#007AFF', opacity: 0.35 }} />
      </Drift>

      <Container className="relative grid grid-cols-1 items-center gap-y-10 md:grid-cols-12 md:gap-8">
        <Reveal className="col-span-12 md:col-span-6" stagger={0.10}>
          <R><Eyebrow label="AI CAPTURE" /></R>
          <R>
            <h2 className="mt-5 text-[44px] font-bold leading-[1.02] tracking-tighter3 sm:text-[56px] md:text-[72px]">
              Point. Shoot.<br />Done.
            </h2>
          </R>
          <R>
            <p className="mt-5 max-w-md text-lg leading-[1.6] text-white/70 md:mt-6 md:text-xl">
              Take a photo. Our AI fills in the name, category, and estimated price in 3 seconds.
              <br /><br />
              Edit if you like. Or just save and forget.
            </p>
          </R>
          <R>
            <div className="mt-6 flex items-end gap-8">
              <div><div className="text-3xl font-bold text-[#66B2FF]">1</div><div className="text-xs text-white/50">photo</div></div>
              <div><div className="text-3xl font-bold text-[#66B2FF]">4</div><div className="text-xs text-white/50">fields</div></div>
              <div><div className="text-3xl font-bold text-[#66B2FF]">3s</div><div className="text-xs text-white/50">seconds</div></div>
            </div>
          </R>
        </Reveal>

        <div className="relative col-span-12 flex origin-top scale-[0.72] justify-center sm:scale-90 md:col-span-6 md:scale-100 md:justify-start">
          {/* Inner wrapper hugs the phone so the chip can be positioned relative to the phone's left edge.
              md:translate-x nudges the whole composition (phone + chips) slightly right so the left chip
              doesn't crowd the text column. */}
          <div className="relative md:translate-x-16" style={{ width: 340 }}>
            <Float amp={6} dur={6}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ai-suggestion.png"
                alt="HomeStock — AI suggestion for a captured photo"
                width={1127}
                height={2303}
                draggable={false}
                className="block w-full select-none"
                style={{
                  // drop-shadow hugs the rounded phone silhouette instead of the bounding box.
                  filter: 'drop-shadow(0 40px 120px rgba(0,122,255,0.40)) drop-shadow(0 20px 60px rgba(0,0,0,0.50))',
                }}
              />
            </Float>

            {/* Floating AI captured chip — a *different* item the AI cataloged, to show range.
                Hidden on mobile to avoid covering the form. */}
            <Float amp={10} dur={5} delay={0.5} className="absolute hidden md:block" style={{ left: -130, top: 600 }}>
              <div
                className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
                style={{ transform: 'rotate(-4deg)' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/vacuum.png" alt="" className="h-12 w-12 rounded-xl object-contain" draggable={false} />
                <div>
                  <div className="mb-1 flex items-center gap-1.5">
                    <span className="block h-2.5 w-2.5 rounded bg-violet" />
                    <span className="text-[9px] font-bold tracking-[0.14em] text-violet">AI CAPTURED · 2.4s</span>
                  </div>
                  <div className="text-[14px] font-semibold leading-tight text-deep">Cyclonix X5</div>
                  <div className="mt-0.5 text-[11px] text-deep/55">Appliances · Storage · $399</div>
                </div>
              </div>
            </Float>

            {/* Second floating chip — drill, peeks off the phone's upper-right with a counter-tilt */}
            <Float amp={9} dur={5.5} delay={0.7} className="absolute hidden md:block" style={{ right: -140, top: 140 }}>
              <div
                className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
                style={{ transform: 'rotate(4deg)' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/drill.png" alt="" className="h-12 w-12 rounded-xl object-contain" draggable={false} />
                <div>
                  <div className="mb-1 flex items-center gap-1.5">
                    <span className="block h-2.5 w-2.5 rounded bg-violet" />
                    <span className="text-[9px] font-bold tracking-[0.14em] text-violet">AI CAPTURED · 1.8s</span>
                  </div>
                  <div className="text-[14px] font-semibold leading-tight text-deep">DeWalt 20V Max</div>
                  <div className="mt-0.5 text-[11px] text-deep/55">Tools · Garage · $229</div>
                </div>
              </div>
            </Float>
          </div>
        </div>
      </Container>
    </section>
  );
}
