import { ReactNode } from 'react';

export function PhoneMockup({
  children,
  width = 360,
  height = 740,
  rotate = 0,
  className = '',
  glow,
  screenBg = '#FFFFFF',
}: {
  children?: ReactNode;
  width?: number;
  height?: number;
  rotate?: number;
  className?: string;
  glow?: string; // CSS color
  screenBg?: string;
}) {
  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{
        width,
        height,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        background: '#0A0A0C',
        borderRadius: width * 0.14,
        boxShadow: glow
          ? `0 40px 120px -20px ${glow}, 0 20px 60px -10px rgba(0,0,0,0.5)`
          : '0 30px 80px -10px rgba(0,0,0,0.6), 0 10px 30px -5px rgba(0,0,0,0.3)',
      }}
    >
      {/* Screen */}
      <div
        className="absolute overflow-hidden"
        style={{
          left: 8,
          top: 8,
          width: width - 16,
          height: height - 16,
          borderRadius: width * 0.13,
          background: screenBg,
        }}
      >
        {children}
      </div>
      {/* Dynamic Island */}
      <div
        className="absolute rounded-[20px] bg-black"
        style={{ left: (width - 120) / 2, top: 16, width: 120, height: 32 }}
      />
    </div>
  );
}
