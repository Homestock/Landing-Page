import Link from 'next/link';
import { Container } from './Container';
import { Logo } from './Logo';

export function Nav() {
  return (
    <nav className="absolute inset-x-0 top-0 z-10">
      <Container className="flex h-20 items-center gap-4 md:gap-8">
        <Link href="/" aria-label="HomeStock" className="flex items-center">
          <Logo className="h-12 w-auto md:h-14" />
        </Link>
        <div className="flex-1" />
        <a className="hidden text-sm text-white/70 hover:text-white sm:inline" href="#features">Features</a>
        <a className="hidden text-sm text-white/70 hover:text-white sm:inline" href="#pricing">Pricing</a>
        <a className="hidden text-sm text-white/70 hover:text-white sm:inline" href="#faq">FAQ</a>
        <a
          href="https://apps.apple.com/us/app/home-stock-house-inventory/id6764231947"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-deep transition hover:bg-white/90"
        >
          Download
        </a>
      </Container>
    </nav>
  );
}
