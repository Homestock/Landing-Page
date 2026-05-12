import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';

const boxes = [
  { name: 'Kitchen Box 1', sub: '14 items · Sealed', color: '#6B9E80', sealed: true },
  { name: 'Living Room', sub: '8 items · Open', color: '#F59E0A', sealed: false },
  { name: 'Bedroom Essentials', sub: '11 items · Sealed', color: '#007AFF', sealed: true },
];

export function MovingBoxes() {
  return (
    <section className="relative overflow-hidden bg-deep py-32">
      <div className="blob" style={{ width: 700, height: 700, top: 50, right: -100, background: '#F59E0A', opacity: 0.20 }} />

      <Container className="relative grid grid-cols-12 items-center gap-8">
        <div className="col-span-12 md:col-span-6">
          <Eyebrow label="MOVING BOXES" dotColor="#F59E0A" />
          <h2 className="mt-5 text-[48px] font-bold leading-[1.02] tracking-tighter3 md:text-[64px]">
            Pack smart.<br />Unpack faster.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-[1.6] text-white/70">
            Label every box. Put items inside. Seal it.
            When you arrive, every box knows what room it&apos;s going to.
            <br /><br />
            No more &quot;the kitchen stuff is in box 14 somewhere.&quot;
          </p>
        </div>

        <div className="col-span-12 space-y-3.5 md:col-span-6">
          {boxes.map((b) => (
            <div key={b.name} className="flex items-center gap-3.5 rounded-2xl border border-white/8 bg-[#1A1A1F] p-4 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.4)]">
              <div className="h-14 w-14 rounded-xl" style={{ background: b.color }} />
              <div className="flex-1">
                <div className="text-base font-semibold text-white">{b.name}</div>
                <div className="text-xs text-white/55">{b.sub}</div>
              </div>
              {b.sealed && (
                <span className="rounded-md bg-sage/20 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-sage">
                  ✓ SEALED
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
