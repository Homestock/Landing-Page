import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { PhoneMockup } from '@/components/PhoneMockup';
import { Reveal, R, Float, Drift } from '@/components/Motion';

function MiniHouseholdScreen({ initial, name, role, accent }: { initial: string; name: string; role: string; accent: string }) {
  return (
    <div className="flex h-full flex-col px-4 pt-9">
      <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-deep/45">{role}</div>
      <div className="mt-1 text-[14px] font-bold text-deep">My Home</div>
      <div className="mt-3 flex items-center gap-2.5 rounded-xl bg-[#F2F2F0] px-2.5 py-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold text-white" style={{ background: accent }}>{initial}</div>
        <div className="flex-1">
          <div className="text-[11px] font-semibold text-deep">{name}</div>
          <div className="text-[9px] text-deep/55 capitalize">{role.toLowerCase()}</div>
        </div>
        <span className="block h-1.5 w-1.5 rounded-full bg-sage" />
      </div>
      <div className="mt-3 space-y-2">
        {[
          { c: '#007AFF', t: 'MacBook Pro 16"' },
          { c: '#F59E0A', t: 'KitchenAid Mixer' },
          { c: '#8C5CFF', t: 'Sonos Arc' },
          { c: '#6B9E80', t: 'Roomba i7+' },
          { c: '#ED8C8C', t: 'Vitamix' },
        ].map((it, i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg bg-[#F7F7F5] p-1.5">
            <div className="h-5 w-5 rounded" style={{ background: it.c }} />
            <span className="text-[10px] font-medium text-deep/85">{it.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Households() {
  return (
    <section className="relative overflow-x-clip bg-deep py-24 md:py-28">
      <Drift className="absolute inset-0 pointer-events-none">
        <div className="blob" style={{ width: 900, height: 900, top: -100, left: '25%', background: '#8C5CFF', opacity: 0.25 }} />
      </Drift>
      <Container className="relative">
        <Reveal className="text-center" stagger={0.10}>
          <R><div className="inline-flex"><Eyebrow label="SHARED HOUSEHOLDS" dotColor="#8C5CFF" /></div></R>
          <R>
            <h2 className="mx-auto mt-6 max-w-3xl text-[40px] font-bold leading-[1.05] tracking-tighter2 sm:text-[48px] md:text-[64px]">
              One home.<br />One inventory. Together.
            </h2>
          </R>
          <R>
            <p className="mx-auto mt-5 max-w-xl text-base leading-[1.55] text-white/65 md:mt-6 md:text-lg">
              Invite your partner, your roommates, your parents.<br />Owner, editor, or viewer — you choose.
            </p>
          </R>
        </Reveal>

        <Reveal
          className="mt-12 flex flex-col items-center justify-center gap-6 md:mt-14 md:flex-row md:gap-12 lg:gap-20"
          stagger={0.15}
          delayChildren={0.2}
        >
          <R>
            <Float amp={5} dur={6}>
              <PhoneMockup width={200} height={420}>
                <MiniHouseholdScreen initial="M" name="Mom" role="OWNER" accent="#8C5CFF" />
              </PhoneMockup>
            </Float>
          </R>

          {/* Sync indicator: vertical on mobile, horizontal on desktop */}
          <R>
            <div className="flex flex-row items-center gap-2 md:flex-row">
              {[0.5, 0.65, 0.8].map((op, i) => (
                <span key={i} className="block h-2 w-2 rounded-full bg-accent md:h-2.5 md:w-2.5" style={{ opacity: op }} />
              ))}
            </div>
          </R>

          <R>
            <Float amp={5} dur={6} delay={0.5}>
              <PhoneMockup width={200} height={420}>
                <MiniHouseholdScreen initial="D" name="Dad" role="EDITOR" accent="#007AFF" />
              </PhoneMockup>
            </Float>
          </R>
        </Reveal>
      </Container>
    </section>
  );
}
