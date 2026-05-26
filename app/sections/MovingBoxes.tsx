import { Package, ChevronRight } from 'lucide-react';
import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { Reveal, R, Drift } from '@/components/Motion';

const boxes = [
  { name: 'Kitchen essentials',  room: 'Kitchen',     count: 14 },
  { name: 'Winter clothes',      room: 'Bedroom',     count: 8 },
  { name: 'Office supplies',     room: 'Home Office', count: 12 },
  { name: 'Holiday decorations', room: 'Garage',      count: 15 },
];

export function MovingBoxes() {
  return (
    <section className="relative overflow-hidden bg-deep py-32">
      <Drift className="absolute inset-0 pointer-events-none">
        <div className="blob" style={{ width: 700, height: 700, top: 50, right: -100, background: '#F59E0A', opacity: 0.20 }} />
      </Drift>
      <Container className="relative grid grid-cols-1 items-center gap-y-10 md:grid-cols-12 md:gap-8">
        <Reveal className="col-span-12 md:col-span-6" stagger={0.10}>
          <R><Eyebrow label="MOVING BOXES" dotColor="#F59E0A" /></R>
          <R><h2 className="mt-5 text-[40px] font-bold leading-[1.02] tracking-tighter3 sm:text-[48px] md:text-[64px]">Pack smart.<br />Unpack faster.</h2></R>
          <R>
            <p className="mt-5 max-w-md text-base leading-[1.6] text-white/70 md:mt-6 md:text-lg">
              Label every box. Put items inside. Seal it. When you arrive, every box knows what room it&apos;s going to.
              <br /><br />
              No more &quot;the kitchen stuff is in box 14 somewhere.&quot;
            </p>
          </R>
        </Reveal>

        {/* iOS-style list of box cards: white pill with tinted accent box-icon, name + room/count, chevron */}
        <Reveal className="col-span-12 space-y-3 md:col-span-6" stagger={0.08} delayChildren={0.2}>
          {boxes.map((b) => (
            <R key={b.name}>
              <div className="flex items-center gap-3.5 rounded-2xl bg-white p-3.5 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.45)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-accent/10">
                  <Package size={24} className="text-accent" strokeWidth={1.8} />
                </div>
                <div className="flex-1">
                  <div className="text-[16px] font-bold leading-tight text-deep">{b.name}</div>
                  <div className="mt-1 text-[13px] text-deep/55">{b.room} · {b.count} items</div>
                </div>
                <ChevronRight size={18} className="text-deep/30" strokeWidth={2.2} />
              </div>
            </R>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
