import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { PhoneMockup } from '@/components/PhoneMockup';
import { Nav } from '@/components/Nav';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-deep" style={{ minHeight: 900 }}>
      <Nav />
      {/* Blobs */}
      <div className="blob" style={{ width: 900, height: 900, top: -150, right: -100, background: '#007AFF', opacity: 0.45 }} />
      <div className="blob" style={{ width: 600, height: 600, bottom: -150, left: -200, background: '#8C5CFF', opacity: 0.25 }} />

      <Container className="relative grid h-[900px] grid-cols-12 items-center gap-8 pt-20">
        {/* Left: copy */}
        <div className="col-span-12 md:col-span-6">
          <div className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5">
            <Eyebrow label="NEW · iOS 26 READY" />
          </div>
          <h1 className="mt-7 text-[64px] font-bold leading-[1.02] tracking-tighter3 md:text-[84px]">
            One photo.<br />
            Every detail.<br />
            Forever.
          </h1>
          <p className="mt-7 max-w-md text-xl leading-[1.55] text-white/70">
            Your home, indexed in seconds. AI captures the rest.
          </p>
          <div className="mt-9 flex items-center gap-5">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-deep transition hover:bg-white/90"
            >
              <span>↓</span>
              <span>Download on the App Store</span>
            </a>
            <a href="#features" className="text-[15px] font-medium text-white/85 hover:text-white">
              Watch demo &nbsp;→
            </a>
          </div>
        </div>

        {/* Right: phone */}
        <div className="col-span-12 flex justify-center md:col-span-6 md:justify-end">
          <PhoneMockup width={380} height={760} glow="rgba(0,122,255,0.4)">
            <div className="flex h-full items-center justify-center text-xs text-ink-faint">
              [ Dashboard screenshot ]
            </div>
          </PhoneMockup>
        </div>

        {/* Floating chips around phone */}
        <div className="pointer-events-none absolute right-[5%] top-[25%] hidden md:block">
          <div className="flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-[0_12px_28px_rgba(0,0,0,0.25)]">
            <div className="h-8 w-8 rounded-lg bg-accent" />
            <div>
              <div className="text-[13px] font-semibold text-deep">MacBook Pro</div>
              <div className="text-[11px] text-deep/50">Office · $2,499</div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-[10%] right-[8%] hidden md:block">
          <div className="flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-[0_12px_28px_rgba(0,0,0,0.25)]">
            <div className="h-8 w-8 rounded-lg bg-amber" />
            <div>
              <div className="text-[13px] font-semibold text-deep">KitchenAid Mixer</div>
              <div className="text-[11px] text-deep/50">Kitchen · $449</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
