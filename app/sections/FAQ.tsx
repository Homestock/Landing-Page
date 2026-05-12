import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';

const qa = [
  ['Does HomeStock work offline?', 'Yes. Adding and viewing items works offline. Sync resumes when you reconnect.'],
  ['Can I use it without an account?', 'Yes. Start anonymously — sign in with Apple later if you want to back up or share.'],
  ['What happens to my data if I cancel Pro?', 'Your data stays. You revert to the Free tier limits for new items.'],
  ["Is the AI on-device or cloud?", "Cloud (Gemini). One photo round-trip is ~3 seconds. We don't store the photo on AI servers."],
  ['Can I export everything?', 'Yes — JSON, CSV, and PDF inventory reports from Settings.'],
  ['Can I share with my family?', 'On Pro — invite up to 10 members per house with owner / editor / viewer roles.'],
];

export function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-deep py-28">
      <Container className="text-center">
        <div className="inline-flex">
          <Eyebrow label="FAQ" dotColor="#948F99" />
        </div>
        <h2 className="mt-6 text-[48px] font-bold tracking-tighter2 md:text-[56px]">Quick answers.</h2>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {qa.map(([q, a]) => (
            <div key={q} className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 text-left">
              <div className="text-base font-semibold text-white">{q}</div>
              <div className="mt-1.5 text-sm leading-[1.6] text-white/60">{a}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
