import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { Reveal, R, Drift } from '@/components/Motion';

const items = [
  ['MacBook Pro 16"', 'Electronics · Office · #C02', '$2,499'],
  ['Samsung TV 55"', 'Electronics · Living Room', '$799'],
  ['KitchenAid Mixer', 'Appliances · Kitchen', '$449'],
  ['Sonos Arc', 'Electronics · Living Room', '$899'],
];

export function Insurance() {
  return (
    <section className="relative overflow-hidden bg-deep py-32">
      <Drift className="absolute inset-0 pointer-events-none">
        <div className="blob" style={{ width: 600, height: 600, top: 100, left: -100, background: '#6B9E80', opacity: 0.20 }} />
      </Drift>
      <Container className="relative grid grid-cols-1 items-center gap-y-10 md:grid-cols-12 md:gap-8">
        <Reveal className="col-span-12 flex justify-center md:col-span-6">
          <R>
            <div className="w-[380px] max-w-full rounded-2xl border border-white/8 bg-[#1A1A1F] p-7 shadow-[0_30px_80px_-10px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3">
                <div className="h-10 w-8 rounded bg-sage" />
                <div>
                  <div className="text-sm font-semibold text-white">home-inventory.xlsx</div>
                  <div className="text-[11px] text-white/50">47 items · $34,219 · Apr 2026</div>
                </div>
              </div>
              <div className="mt-3.5 border-t border-white/8" />
              <Reveal stagger={0.06} delayChildren={0.2}>
                {items.map((it, i) => (
                  <R key={i}>
                    <div className="flex items-center gap-3 py-3">
                      <div className="flex-1">
                        <div className="text-[13px] font-semibold text-white/90">{it[0]}</div>
                        <div className="text-[11px] text-white/50">{it[1]}</div>
                      </div>
                      <div className="text-[13px] font-semibold text-white">{it[2]}</div>
                    </div>
                  </R>
                ))}
              </Reveal>
            </div>
          </R>
        </Reveal>
        <Reveal className="col-span-12 md:col-span-6 md:pl-12" stagger={0.10}>
          <R><Eyebrow label="INSURANCE-READY" dotColor="#6B9E80" /></R>
          <R><h2 className="mt-5 text-[48px] font-bold leading-[1.02] tracking-tighter3 md:text-[64px]">The receipt<br />you&apos;ll never lose.</h2></R>
          <R>
            <p className="mt-6 max-w-md text-lg leading-[1.6] text-white/70">
              Photos, prices, dates, serial numbers — one clean Excel spreadsheet, ready for any insurance form.
              <br /><br />
              Warranty expiring in 30 days? You&apos;ll know before they do.
            </p>
          </R>
        </Reveal>
      </Container>
    </section>
  );
}
