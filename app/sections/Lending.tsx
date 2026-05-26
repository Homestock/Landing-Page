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
                <div className="relative mx-auto" style={{ width: 320 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/lending.png"
                    alt="HomeStock — Lending screen with items currently lent out"
                    width={1127}
                    height={2442}
                    draggable={false}
                    className="block w-full select-none"
                    style={{
                      // amber glow hugs the phone silhouette, matching this section's accent.
                      filter: 'drop-shadow(0 40px 100px rgba(245,158,10,0.30)) drop-shadow(0 20px 60px rgba(0,0,0,0.50))',
                    }}
                  />

                  {/* Callout chip — highlights one of the lent items, peeks off the phone's right edge */}
                  <Float amp={8} dur={5} delay={0.4} className="absolute z-10" style={{ right: -60, top: 150 }}>
                    <div className="flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber text-[12px] font-bold text-white">M</div>
                      <div>
                        <div className="text-[12px] font-semibold text-deep">Lent to Mike</div>
                        <div className="text-[10px] text-deep/55">Camera Sony · 4 days out</div>
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
