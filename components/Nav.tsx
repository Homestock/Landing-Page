import { Container } from './Container';

export function Nav() {
  return (
    <nav className="absolute inset-x-0 top-0 z-10">
      <Container className="flex h-16 items-center gap-8">
        <span className="text-lg font-bold">HomeStock</span>
        <div className="flex-1" />
        <a className="text-sm text-white/70 hover:text-white" href="#features">Features</a>
        <a className="text-sm text-white/70 hover:text-white" href="#pricing">Pricing</a>
        <a className="text-sm text-white/70 hover:text-white" href="#faq">FAQ</a>
        <a
          href="#download"
          className="rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-deep transition hover:bg-white/90"
        >
          Download
        </a>
      </Container>
    </nav>
  );
}
