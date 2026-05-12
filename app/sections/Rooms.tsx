import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { Reveal, R, Drift } from '@/components/Motion';

const rooms = [
  { name: 'Living Room', count: '14 items', color: '#007AFF' },
  { name: 'Kitchen', count: '21 items', color: '#F59E0A' },
  { name: 'Bedroom', count: '8 items', color: '#8C5CFF' },
  { name: 'Office', count: '4 items · 1 folder', color: '#6B9E80' },
];

export function Rooms() {
  return (
    <section className="relative overflow-hidden bg-deep py-32">
      <Drift className="absolute inset-0 pointer-events-none">
        <div className="blob" style={{ width: 800, height: 800, top: 50, left: -200, background: '#007AFF', opacity: 0.30 }} />
      </Drift>

      <Container className="relative grid grid-cols-12 items-center gap-8">
        <Reveal className="col-span-12 flex justify-center md:col-span-6">
          <R>
            <div className="w-[420px] max-w-full rounded-3xl border border-white/8 bg-[#1A1A1F] p-7 shadow-[0_30px_80px_-10px_rgba(0,0,0,0.5)]">
              <h3 className="text-2xl font-bold text-white">My Home</h3>
              <p className="mt-1 text-[13px] text-white/50">4 rooms · 47 items</p>
              <Reveal className="mt-4 space-y-2" stagger={0.07} delayChildren={0.15}>
                {rooms.map((r) => (
                  <R key={r.name}>
                    <div className="flex items-center gap-3 rounded-2xl bg-white/[0.04] p-3">
                      <div className="h-10 w-10 rounded-[10px]" style={{ background: r.color }} />
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
          <R><h2 className="mt-5 text-[56px] font-bold leading-[1.02] tracking-tighter3 md:text-[64px]">Your home,<br />in folders.</h2></R>
          <R>
            <p className="mt-6 max-w-md text-lg leading-[1.6] text-white/70">
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
