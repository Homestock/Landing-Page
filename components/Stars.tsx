export function Stars({ size = 16, color = '#F59E0A' }: { size?: number; color?: string }) {
  return (
    <div className="inline-flex items-center gap-0.5" style={{ color }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className="leading-none font-bold" style={{ fontSize: size }}>
          ★
        </span>
      ))}
    </div>
  );
}
