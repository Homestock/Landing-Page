import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { PhoneMockup } from '@/components/PhoneMockup';
import { Reveal, R, Float, Drift } from '@/components/Motion';

export function AICapture() {
  return (
    <section className="relative overflow-hidden bg-deep py-32">
      <Drift className="absolute inset-0 pointer-events-none" range={30}>
        <div className="blob" style={{ width: 700, height: 700, top: 50, right: -100, background: '#007AFF', opacity: 0.35 }} />
      </Drift>

      <Container className="relative grid grid-cols-12 items-center gap-8">
        <Reveal className="col-span-12 md:col-span-6" stagger={0.10}>
          <R><Eyebrow label="AI CAPTURE" /></R>
          <R>
            <h2 className="mt-5 text-[56px] font-bold leading-[1.02] tracking-tighter3 md:text-[72px]">
              Point. Shoot.<br />Done.
            </h2>
          </R>
          <R>
            <p className="mt-6 max-w-md text-xl leading-[1.6] text-white/70">
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

        <div className="relative col-span-12 flex justify-center md:col-span-6 md:justify-end">
          <Float amp={6} dur={6}>
            <PhoneMockup width={360} height={700} glow="rgba(0,122,255,0.4)">
              <div className="flex h-full items-center justify-center text-xs text-ink-faint">[ AI Capture flow ]</div>
            </PhoneMockup>
          </Float>
          <Float amp={10} dur={5} delay={0.5} className="absolute -left-2 top-1/3">
            <div className="rounded-2xl bg-white px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="mb-1.5 flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-violet" />
                <span className="text-[10px] font-semibold tracking-[0.14em] text-violet">AI CAPTURED · 2.4s</span>
              </div>
              <div className="text-base font-semibold text-deep">MacBook Pro 16&quot;</div>
              <div className="text-xs text-deep/55">Electronics · Office · $2,499</div>
            </div>
          </Float>
        </div>
      </Container>
    </section>
  );
}
