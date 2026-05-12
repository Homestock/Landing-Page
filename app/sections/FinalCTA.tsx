import { Container } from '@/components/Container';

export function FinalCTA() {
  return (
    <section id="download" className="relative overflow-hidden bg-deep py-28">
      <div className="blob" style={{ width: 900, height: 900, top: -150, left: '50%', transform: 'translateX(-50%)', background: '#007AFF', opacity: 0.30 }} />

      <Container className="relative text-center">
        <h2 className="mx-auto max-w-3xl text-[64px] font-bold leading-[1.02] tracking-tighter3 md:text-[80px]">
          Your home is<br />more than walls.
        </h2>
        <p className="mt-6 text-xl text-white/70">
          Start indexing it. One photo at a time.
        </p>
        <a
          href="https://apps.apple.com/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-9 py-5 text-[17px] font-semibold text-deep transition hover:bg-white/90"
        >
          <span>↓</span>
          <span>Download on the App Store</span>
        </a>

        {/* Footer */}
        <div className="mt-20 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <div className="flex items-center gap-6">
              <span className="text-[15px] font-bold text-white">HomeStock</span>
              <a className="text-[13px] text-white/50 hover:text-white" href="/privacy">Privacy</a>
              <a className="text-[13px] text-white/50 hover:text-white" href="/support">Support</a>
              <a className="text-[13px] text-white/50 hover:text-white" href="mailto:support@homestock.app">support@homestock.app</a>
            </div>
            <span className="text-xs text-white/40">© 2026 HomeStock. Made for iPhone.</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
