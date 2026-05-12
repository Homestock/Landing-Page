import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';

const stats = [
  { num: '60%', label: 'of US homes are\nunder-insured', src: 'CoreLogic, 2024' },
  { num: '$50K+', label: 'average personal\nproperty value', src: 'Insurance Info. Institute' },
  { num: '22%', label: 'of homeowners have\na complete inventory', src: 'III / Trusted Choice' },
];

export function Problem() {
  return (
    <section className="relative overflow-hidden bg-deep py-32">
      <Container className="text-center">
        <div className="inline-flex">
          <Eyebrow label="WHY HOMESTOCK" dotColor="#948F99" />
        </div>
        <h2 className="mx-auto mt-6 max-w-3xl text-[48px] font-bold leading-[1.05] tracking-tighter2 md:text-[64px]">
          You own more than<br />you think.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.55] text-white/65">
          Most homes carry $20,000+ in belongings people forget about.
          Movers lose them. Insurance forgets them. Friends borrow them.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.num} className="flex flex-col items-center">
              <div className="text-[40px] font-bold tracking-tighter2 text-[#66B2FF]">{s.num}</div>
              <div className="mt-1.5 whitespace-pre-line text-sm leading-[1.4] text-white/65">{s.label}</div>
              <div className="mt-1 text-[11px] text-white/40">— {s.src}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
