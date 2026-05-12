import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { PhoneMockup } from '@/components/PhoneMockup';
import { Reveal, R, Float, Drift } from '@/components/Motion';

export function Households() {
  return (
    <section className="relative overflow-hidden bg-deep py-28">
      <Drift className="absolute inset-0 pointer-events-none">
        <div className="blob" style={{ width: 900, height: 900, top: -100, left: '25%', background: '#8C5CFF', opacity: 0.25 }} />
      </Drift>
      <Container className="relative">
        <Reveal className="text-center" stagger={0.10}>
          <R><div className="inline-flex"><Eyebrow label="SHARED HOUSEHOLDS" dotColor="#8C5CFF" /></div></R>
          <R><h2 className="mx-auto mt-6 max-w-3xl text-[48px] font-bold leading-[1.05] tracking-tighter2 md:text-[64px]">One home.<br />One inventory. Together.</h2></R>
          <R><p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.55] text-white/65">Invite your partner, your roommates, your parents.<br />Owner, editor, or viewer — you choose.</p></R>
        </Reveal>
        <Reveal className="mt-14 flex flex-wrap items-center justify-center gap-12 md:gap-20" stagger={0.15} delayChildren={0.2}>
          <R><Float amp={5} dur={6}><PhoneMockup width={260} height={526}><div className="flex h-full items-end justify-center pb-12 text-[11px] text-ink-faint">[ Mom ]</div></PhoneMockup></Float></R>
          <R>
            <div className="flex items-center gap-2">
              {[0.5, 0.65, 0.8].map((op, i) => (
                <span key={i} className="block h-2 w-2 rounded-full bg-accent" style={{ opacity: op }} />
              ))}
            </div>
          </R>
          <R><Float amp={5} dur={6} delay={0.5}><PhoneMockup width={260} height={526}><div className="flex h-full items-end justify-center pb-12 text-[11px] text-ink-faint">[ Dad ]</div></PhoneMockup></Float></R>
        </Reveal>
      </Container>
    </section>
  );
}
