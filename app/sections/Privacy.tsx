import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { Reveal, R } from '@/components/Motion';

const points = [
  { color: '#6B9E80', label: 'Encrypted in transit' },
  { color: '#007AFF', label: 'Sign in with Apple' },
  { color: '#8C5CFF', label: 'No third-party trackers' },
];

export function Privacy() {
  return (
    <section className="relative overflow-x-clip bg-deep py-28">
      <Container>
        <Reveal className="text-center" stagger={0.10}>
          <R><div className="inline-flex"><Eyebrow label="PRIVACY" dotColor="#6B9E80" /></div></R>
          <R><h2 className="mx-auto mt-6 max-w-2xl text-[48px] font-bold leading-[1.05] tracking-tighter2 md:text-[56px]">Your stuff stays yours.</h2></R>
          <R>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-[1.6] text-white/70">
              End-to-end auth with Sign in with Apple. Photos in your own private storage.
              Zero ad-tech. Zero data sales. Ever.
            </p>
          </R>
        </Reveal>
        <Reveal className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-4" stagger={0.10} delayChildren={0.15}>
          {points.map((p) => (
            <R key={p.label}>
              <div className="flex items-center gap-2.5">
                <span className="block h-5 w-5 rounded" style={{ background: p.color }} />
                <span className="text-sm font-medium text-white/85">{p.label}</span>
              </div>
            </R>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
