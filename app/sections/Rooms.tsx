import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { Reveal, R, Drift } from '@/components/Motion';

const STROKE = { stroke: 'white', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' };

const SofaIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...STROKE}>
    <path d="M4 14v5M20 14v5" />
    <path d="M3 14a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2h10v-2a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3Z" />
    <path d="M6 12V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
  </svg>
);

const ForkKnifeIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...STROKE}>
    <path d="M8 4v6a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2V4" />
    <path d="M6 12v8" />
    <path d="M16 4c-2 0-3 2-3 5s1 4 3 4v7" />
  </svg>
);

const BedIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...STROKE}>
    <path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
    <path d="M3 16h18" />
    <path d="M3 20v-2M21 20v-2" />
    <rect x="6" y="11" width="6" height="3" rx="1" />
  </svg>
);

const LaptopIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" {...STROKE}>
    <rect x="5" y="6" width="14" height="9" rx="1.2" />
    <path d="M3 18h18l-1 1H4l-1-1Z" />
  </svg>
);

const rooms = [
  { name: 'Living Room', count: '14 items', color: '#007AFF', icon: <SofaIcon /> },
  { name: 'Kitchen', count: '21 items', color: '#F59E0A', icon: <ForkKnifeIcon /> },
  { name: 'Bedroom', count: '8 items', color: '#8C5CFF', icon: <BedIcon /> },
  { name: 'Office', count: '4 items · 1 folder', color: '#6B9E80', icon: <LaptopIcon /> },
];

export function Rooms() {
  return (
    <section className="relative overflow-hidden bg-deep py-32">
      <Drift className="absolute inset-0 pointer-events-none">
        <div className="blob" style={{ width: 800, height: 800, top: 50, left: -200, background: '#007AFF', opacity: 0.30 }} />
      </Drift>

      <Container className="relative grid grid-cols-1 items-center gap-y-10 md:grid-cols-12 md:gap-8">
        <Reveal className="col-span-12 flex justify-center md:col-span-6">
          <R>
            <div className="w-[420px] max-w-full rounded-3xl border border-white/8 bg-[#1A1A1F] p-7 shadow-[0_30px_80px_-10px_rgba(0,0,0,0.5)]">
              <h3 className="text-2xl font-bold text-white">My Home</h3>
              <p className="mt-1 text-[13px] text-white/50">4 rooms · 47 items</p>
              <Reveal className="mt-4 space-y-2" stagger={0.07} delayChildren={0.15}>
                {rooms.map((r) => (
                  <R key={r.name}>
                    <div className="flex items-center gap-3 rounded-2xl bg-white/[0.04] p-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-[10px]"
                        style={{ background: r.color }}
                      >
                        {r.icon}
                      </div>
                      <span className="text-[15px] font-semibold text-white">{r.name}</span>
                      <div className="flex-1 border-b border-dotted border-white/15" />
                      <span className="text-[13px] text-white/55">{r.count}</span>
                      <span className="text-lg text-white/40">›</span>
                    </div>
                  </R>
                ))}
              </Reveal>
            </div>
          </R>
        </Reveal>

        <Reveal className="col-span-12 md:col-span-6 md:pl-12" stagger={0.10}>
          <R><Eyebrow label="ORGANIZATION" /></R>
          <R><h2 className="mt-5 text-[44px] font-bold leading-[1.02] tracking-tighter3 sm:text-[56px] md:text-[64px]">Your home,<br />in folders.</h2></R>
          <R>
            <p className="mt-5 max-w-md text-base leading-[1.6] text-white/70 md:mt-6 md:text-lg">
              Group by room. Group by closet. Group by &quot;stuff in the attic I&apos;ll deal with later.&quot;
              <br /><br />
              Two levels deep — like Apple Notes. As simple as it sounds.
            </p>
          </R>
        </Reveal>
      </Container>
    </section>
  );
}
