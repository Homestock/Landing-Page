import { Sofa, UtensilsCrossed, Bath, Monitor, BedDouble, Car } from 'lucide-react';
import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { Reveal, R, Drift } from '@/components/Motion';

const rooms = [
  { name: 'Kitchen',     count: '21 items', value: '12.1K$', color: '#8C5CFF', Icon: UtensilsCrossed },
  { name: 'Living Room', count: '14 items', value: '18.3K$', color: '#6B9E80', Icon: Sofa },
  { name: 'Bathroom',    count: '8 items',  value: '2.4K$',  color: '#F59E0A', Icon: Bath },
  { name: 'Office',      count: '11 items', value: '14.8K$', color: '#FF4B8A', Icon: Monitor },
  { name: 'Bedroom',     count: '18 items', value: '8.2K$',  color: '#FF8FA3', Icon: BedDouble },
  { name: 'Garage',      count: '9 items',  value: '8.7K$',  color: '#007AFF', Icon: Car },
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
            {/* Light card holding only the room grid — header, warning banner and Add Room stripped. */}
            <div className="w-[420px] max-w-full rounded-[32px] bg-[#F2F2F0] p-5 shadow-[0_40px_100px_-10px_rgba(0,0,0,0.6),0_20px_50px_-10px_rgba(0,122,255,0.15)]">
              <Reveal className="grid grid-cols-2 gap-3" stagger={0.05} delayChildren={0.15}>
                {rooms.map((r) => (
                  <R key={r.name}>
                    {/* aspect-square gives each room card a clean 1:1 tile; icon top, stats anchored to the bottom. */}
                    <div className="flex aspect-square flex-col rounded-2xl bg-white p-4">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-[12px]"
                        style={{ background: r.color }}
                      >
                        <r.Icon size={24} strokeWidth={2} className="text-white" />
                      </div>
                      <div className="mt-auto">
                        <div className="text-[15px] font-bold leading-tight text-deep">{r.name}</div>
                        <div className="mt-0.5 text-[11px] text-deep/55">{r.count}</div>
                        <div className="mt-1.5 text-[15px] font-bold text-deep">{r.value}</div>
                      </div>
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
