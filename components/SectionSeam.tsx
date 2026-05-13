/**
 * SectionSeam — a thin 1-pixel-tall element with an absolutely positioned, blurred
 * radial bridge that pokes ~120-160px into both neighbour sections, smoothing the colour
 * transition between them.
 *
 * Hidden on mobile (`hidden md:block`) — section colour transitions are barely visible
 * on a phone-width viewport, and rendering 11 large filter:blur layers tanks scroll FPS.
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
      className="relative hidden h-px w-full md:block"
      style={{ overflow: 'visible' }}
    >
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2"
        style={{
          top: -160,
          width: '110%',
          height: 320,
          background: `linear-gradient(to bottom, ${from} 0%, transparent 50%, ${to} 100%)`,
          filter: 'blur(40px)',
          opacity: intensity,
        }}
      />
    </div>
  );
}
