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
            <PhoneMockup width={340} height={700} glow="rgba(0,122,255,0.4)">
              <div className="flex h-full flex-col px-4 pt-12">
                {/* Top nav */}
                <div className="flex items-center justify-between text-[12px]">
                  <span className="text-deep/55">‹ Cancel</span>
                  <span className="font-semibold text-deep">New Item</span>
                  <span className="font-semibold text-accent">Save</span>
                </div>

                {/* Photo */}
                <div className="relative mt-3 overflow-hidden rounded-2xl" style={{ width: '100%', height: 170, background: 'linear-gradient(135deg, #2C2E36 0%, #45474F 60%, #5A5D67 100%)' }}>
                  {/* MacBook silhouette */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: 130, height: 80, background: '#1A1B20', borderRadius: 6, boxShadow: '0 6px 20px rgba(0,0,0,0.4)' }} />
                  <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: 32, width: 145, height: 5, background: '#A8AAB2', borderRadius: 2 }} />
                  {/* AI scanning indicator */}
                  <div className="absolute right-2.5 top-2.5 flex items-center gap-1.5 rounded-full bg-black/55 px-2 py-1 backdrop-blur">
                    <span className="block h-1.5 w-1.5 animate-pulse rounded-full bg-violet" />
                    <span className="text-[9px] font-semibold tracking-wider text-white">AI · 2.4s</span>
                  </div>
                </div>

                {/* AI suggestion banner */}
                <div className="mt-3 flex items-center gap-2 rounded-xl bg-violet/10 px-3 py-2">
                  <div className="h-4 w-4 rounded bg-violet" />
                  <span className="text-[11px] font-semibold text-violet">AI filled 4 fields for you</span>
                </div>

                {/* Form fields */}
                <div className="mt-3 space-y-2.5">
                  <div>
                    <div className="text-[9px] font-semibold uppercase tracking-wider text-deep/40">Name</div>
                    <div className="mt-0.5 text-[14px] font-semibold text-deep">MacBook Pro 16&quot;</div>
                  </div>
                  <div className="h-px bg-deep/8" />
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[9px] font-semibold uppercase tracking-wider text-deep/40">Category</div>
                      <div className="mt-0.5 text-[13px] font-medium text-deep">Electronics</div>
                    </div>
                    <div className="rounded-full bg-accent/10 px-2 py-0.5 text-[9px] font-bold tracking-wider text-accent">AUTO</div>
                  </div>
                  <div className="h-px bg-deep/8" />
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[9px] font-semibold uppercase tracking-wider text-deep/40">Room</div>
                      <div className="mt-0.5 text-[13px] font-medium text-deep">Office</div>
                    </div>
                    <div className="rounded-full bg-accent/10 px-2 py-0.5 text-[9px] font-bold tracking-wider text-accent">AUTO</div>
                  </div>
                  <div className="h-px bg-deep/8" />
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[9px] font-semibold uppercase tracking-wider text-deep/40">Estimated price</div>
                      <div className="mt-0.5 text-[13px] font-medium text-deep">$2,499</div>
                    </div>
                    <div className="rounded-full bg-accent/10 px-2 py-0.5 text-[9px] font-bold tracking-wider text-accent">AUTO</div>
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </Float>

          {/* Floating AI captured chip — overlaid to the left of the phone */}
          <Float amp={10} dur={5} delay={0.5} className="absolute" style={{ left: -20, top: 220 }}>
            <div className="rounded-2xl bg-white px-4 py-3 shadow-[0_24px_60px_rgba(0,0,0,0.55)]" style={{ transform: 'rotate(-3deg)' }}>
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
