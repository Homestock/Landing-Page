import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';

export function Lending() {
  return (
    <section className="relative overflow-hidden bg-deep py-32">
      <div className="blob" style={{ width: 800, height: 800, top: 0, right: -200, background: '#F59E0A', opacity: 0.30 }} />

      <Container className="relative grid grid-cols-12 items-center gap-8">
        <div className="col-span-12 md:col-span-6">
          <Eyebrow label="LENDING TRACKER" dotColor="#F59E0A" />
          <h2 className="mt-5 text-[56px] font-bold leading-[1.02] tracking-tighter3 md:text-[72px]">
            You lent it.<br />We remember.
          </h2>
          <p className="mt-6 max-w-md text-xl leading-[1.6] text-white/70">
            Mark anything as lent with one tap. Add who borrowed it. Set a return date.
            <br /><br />
            When they bring it back, mark it returned — the history stays.
          </p>
          <p className="mt-6 text-[15px] font-medium text-amber">
            Because friendship shouldn&apos;t depend on remembering.
          </p>
        </div>

        {/* Lending card mockup */}
        <div className="col-span-12 flex justify-center md:col-span-6 md:justify-end">
          <div className="w-[420px] max-w-full rounded-3xl border border-white/10 bg-[#1A1A1F] p-7 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-accent" />
              <div>
                <div className="text-base font-semibold text-white">MacBook Pro 16&quot;</div>
                <div className="text-[13px] text-white/55">Office</div>
              </div>
            </div>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-amber px-2.5 py-1 text-[11px] font-bold tracking-wider text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              LENT
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white/[0.05] p-3">
              <div className="h-9 w-9 rounded-full bg-violet" />
              <div className="flex-1">
                <div className="text-sm font-semibold text-white">Sasha · borrowed Mar 15</div>
                <div className="text-xs text-white/55">Due Apr 1 · 4 days left</div>
              </div>
            </div>
            <button className="mt-3 w-full rounded-full bg-white py-3 text-sm font-semibold text-deep transition hover:bg-white/90">
              ✓ &nbsp;Mark as returned
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
