import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';

const points = [
  { color: '#6B9E80', label: 'Encrypted in transit' },
  { color: '#007AFF', label: 'Sign in with Apple' },
  { color: '#8C5CFF', label: 'No third-party trackers' },
];

export function Privacy() {
  return (
    <section className="relative overflow-hidden bg-deep py-28">
      <Container className="text-center">
        <div className="inline-flex">
          <Eyebrow label="PRIVACY" dotColor="#6B9E80" />
        </div>
        <h2 className="mx-auto mt-6 max-w-2xl text-[48px] font-bold leading-[1.05] tracking-tighter2 md:text-[56px]">
          Your stuff stays yours.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-[1.6] text-white/70">
          End-to-end auth with Sign in with Apple. Photos in your own private storage.
          Zero ad-tech. Zero data sales. Ever.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-4">
          {points.map((p) => (
            <div key={p.label} className="flex items-center gap-2.5">
              <span className="block h-5 w-5 rounded" style={{ background: p.color }} />
              <span className="text-sm font-medium text-white/85">{p.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
