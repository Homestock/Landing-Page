import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { Reveal, R, Float, Drift } from '@/components/Motion';

export function Lending() {
  return (
    <section className="relative overflow-hidden bg-deep py-32">
      <Drift className="absolute inset-0 pointer-events-none">
        <div className="blob" style={{ width: 800, height: 800, top: 0, right: -200, background: '#F59E0A', opacity: 0.30 }} />
      </Drift>

      <Container className="relative grid grid-cols-1 items-center gap-y-10 md:grid-cols-12 md:gap-12">
        <Reveal className="col-span-12 md:col-span-7" stagger={0.10}>
          <R><Eyebrow label="LENDING TRACKER" dotColor="#F59E0A" /></R>
          <R>
            <h2 className="mt-5 text-[44px] font-bold leading-[1.02] tracking-tighter3 sm:text-[56px] md:text-[72px]">
              You lent it.<br />We remember.
            </h2>
          </R>
          <R>
            <p className="mt-5 max-w-md text-lg leading-[1.6] text-white/70 md:mt-6 md:text-xl">
              Mark anything as lent with one tap. Add who borrowed it. Set a return date.
              <br /><br />
              When they bring it back, mark it returned — but the history stays. Forever.
            </p>
          </R>
          <R><p className="mt-6 text-[15px] font-medium text-amber">Because friendship shouldn&apos;t depend on remembering.</p></R>
        </Reveal>

        <div className="col-span-12 origin-top scale-[0.72] sm:scale-90 md:col-span-5 md:scale-100">
          <Reveal>
            <R>
              <Float amp={6} dur={6.5}>
                <div className="relative mx-auto" style={{ width: 320, height: 660 }}>
                  <div className="pointer-events-none absolute" style={{ inset: -40, background: 'radial-gradient(closest-side, rgba(245,158,10,0.35), transparent 70%)', filter: 'blur(40px)' }} />
                  <div className="relative h-full w-full" style={{ background: '#0A0A0C', borderRadius: 44, boxShadow: '0 40px 100px -20px rgba(245,158,10,0.30), 0 30px 80px -10px rgba(0,0,0,0.5)' }}>
                    <div className="absolute overflow-hidden bg-paper" style={{ inset: 8, borderRadius: 38 }}>
                      <div className="flex h-full flex-col px-5 pt-10">
                        <div className="text-[12px] text-deep/55">‹ &nbsp;Living Room</div>
                        <div className="mt-3 rounded-2xl" style={{ width: '100%', height: 180, background: 'linear-gradient(135deg, #DCDEE3 0%, #C0C3CA 100%)' }} />
                        <div className="mt-3.5 text-[18px] font-bold text-deep">MacBook Pro 16&quot;</div>
                        <div className="text-[12px] text-deep/55">Electronics · Office · $2,499</div>
                        <div className="mt-2.5 inline-flex w-fit items-center gap-1 rounded-full bg-amber px-2 py-1">
                          <span className="block h-1 w-1 rounded-full bg-white" />
                          <span className="text-[9px] font-bold tracking-[0.1em] text-white">LENT</span>
                        </div>
                        <div className="mt-3 flex items-center gap-3 rounded-xl bg-[#EDEDE9] p-2.5">
                          <div className="h-8 w-8 rounded-full bg-violet" />
                          <div>
                            <div className="text-[13px] font-semibold text-deep">Sasha</div>
                            <div className="text-[10px] text-deep/55">Borrowed Mar 15</div>
                          </div>
                        </div>
                        <button className="mt-3 rounded-full bg-deep py-2.5 text-[12px] font-semibold text-white">✓ &nbsp;Mark as returned</button>
                        <div className="mt-3 flex items-center justify-center gap-5 text-[11px] font-medium text-accent">
                          <span>Edit</span><span>Share</span><span>History</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute rounded-[20px] bg-black" style={{ left: (320 - 110) / 2, top: 14, width: 110, height: 30 }} />
                  </div>
                  <Float amp={8} dur={5} delay={0.4} className="absolute z-10" style={{ right: -60, top: 80 }}>
                    <div className="flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
                      <div className="h-7 w-7 rounded-md bg-amber" />
                      <div>
                        <div className="text-[12px] font-semibold text-deep">Lent to Sasha</div>
                        <div className="text-[10px] text-deep/55">since Mar 15</div>
                      </div>
                    </div>
                  </Float>
                </div>
              </Float>
            </R>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
