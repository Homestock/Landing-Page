import { ReactNode } from 'react';
import Link from 'next/link';
import { Container } from './Container';

export function LegalLayout({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-deep pb-32 text-white">
      <nav className="border-b border-white/8">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" aria-label="HomeStock" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/homestock-logo.svg" alt="HomeStock" className="h-7 w-auto" />
          </Link>
          <Link href="/" className="text-sm text-white/60 hover:text-white">
            ← Back home
          </Link>
        </Container>
      </nav>

      <Container className="pt-16 md:pt-24">
        <div className="mx-auto max-w-2xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
            Effective {effectiveDate}
          </div>
          <h1 className="mt-3 text-[44px] font-bold leading-[1.05] tracking-tighter3 md:text-[56px]">
            {title}
          </h1>

          <div className="legal-prose mt-12 text-[15px] leading-[1.75] text-white/75">
            {children}
          </div>

          <div className="mt-16 border-t border-white/10 pt-6 text-[13px] text-white/40">
            Questions?{' '}
            <a className="text-white/70 hover:text-white" href="mailto:support@homestock.app">
              support@homestock.app
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
