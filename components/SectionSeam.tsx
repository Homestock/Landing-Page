/**
 * SectionSeam — a thin 1-pixel-tall element with an absolutely positioned, heavily blurred
 * radial bridge that pokes ~120-160px into both neighbour sections, smoothing the colour
 * transition between them. Sections still keep overflow-hidden (no scroll regressions);
 * the seam itself is rendered between sections in the page flow and is NOT inside either,
 * so it never gets clipped.
 */
export function SectionSeam({
  from,
  to,
  intensity = 0.25,
}: {
  from: string;
  to: string;
  intensity?: number;
}) {
  return (
    <div
      aria-hidden
      className="relative h-px w-full"
      style={{ overflow: 'visible' }}
    >
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2"
        style={{
          top: -160,
          width: '110%',
          height: 320,
          background: `linear-gradient(to bottom, ${from} 0%, transparent 50%, ${to} 100%)`,
          filter: 'blur(60px)',
          opacity: intensity,
        }}
      />
    </div>
  );
}
