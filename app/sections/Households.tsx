import { Check, Pencil, Eye, Crown } from 'lucide-react';
import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { Reveal, R, Drift } from '@/components/Motion';

// Three role cards illustrate Owner / Editor / Viewer — exactly what the section copy promises.
const members = [
  {
    initial: 'M',
    name: 'Mom',
    role: 'Owner',
    accent: '#8C5CFF',
    perms: ['Add & edit anything', 'Invite household', 'Manage roles'],
    Icon: Crown,
  },
  {
    initial: 'D',
    name: 'Dad',
    role: 'Editor',
    accent: '#007AFF',
    perms: ['Add new items', 'Edit & lend items', 'View full history'],
    Icon: Pencil,
  },
  {
    initial: 'S',
    name: 'Sasha',
    role: 'Viewer',
    accent: '#6B9E80',
    perms: ['Browse all rooms', 'View item details', 'See lending log'],
    Icon: Eye,
  },
];

export function Households() {
  return (
    <section className="relative overflow-hidden bg-deep py-24 md:py-28">
      <Drift className="absolute inset-0 pointer-events-none">
        <div className="blob" style={{ width: 900, height: 900, top: -100, left: '25%', background: '#8C5CFF', opacity: 0.25 }} />
      </Drift>
      <Container className="relative">
        <Reveal className="text-center" stagger={0.10}>
          <R><div className="inline-flex"><Eyebrow label="SHARED HOUSEHOLDS" dotColor="#8C5CFF" /></div></R>
          <R>
            <h2 className="mx-auto mt-6 max-w-3xl text-[40px] font-bold leading-[1.05] tracking-tighter2 sm:text-[48px] md:text-[64px]">
              One home.<br />One inventory. Together.
            </h2>
          </R>
          <R>
            <p className="mx-auto mt-5 max-w-xl text-base leading-[1.55] text-white/65 md:mt-6 md:text-lg">
              Invite your partner, your roommates, your parents.<br />Owner, editor, or viewer — you choose.
            </p>
          </R>
        </Reveal>

        <Reveal
          className="mt-12 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-3 md:gap-6"
          stagger={0.15}
          delayChildren={0.2}
        >
          {members.map((m) => (
            <R key={m.name}>
              <div className="flex h-full flex-col rounded-3xl border border-white/8 bg-white/[0.04] p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-3.5">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full text-[18px] font-bold text-white"
                    style={{ background: m.accent }}
                  >
                    {m.initial}
                  </div>
                  <div className="flex-1">
                    <div className="text-[18px] font-bold text-white">{m.name}</div>
                    <div
                      className="mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: m.accent, background: `${m.accent}26` }}
                    >
                      <m.Icon size={10} strokeWidth={2.5} />
                      {m.role}
                    </div>
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {m.perms.map((perm) => (
                    <li key={perm} className="flex items-start gap-2.5 text-[13px] text-white/70">
                      <Check size={14} className="mt-0.5 shrink-0 text-sage" strokeWidth={2.5} />
                      <span>{perm}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </R>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
