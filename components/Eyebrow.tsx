export function Eyebrow({
  label,
  dotColor = '#007AFF',
}: {
  label: string;
  dotColor?: string;
}) {
  return (
    <div className="inline-flex items-center gap-2.5 text-white/70">
      <span className="block h-2 w-2 rounded-full" style={{ background: dotColor }} />
      <span className="text-[12px] font-semibold tracking-[0.14em]">{label}</span>
    </div>
  );
}
