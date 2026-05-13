import { Hero } from './sections/Hero';
import { Problem } from './sections/Problem';
import { AICapture } from './sections/AICapture';
import { Rooms } from './sections/Rooms';
import { Lending } from './sections/Lending';
import { Households } from './sections/Households';
import { Insurance } from './sections/Insurance';
import { MovingBoxes } from './sections/MovingBoxes';
import { Privacy } from './sections/Privacy';
import { Pricing } from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { FinalCTA } from './sections/FinalCTA';
import { SectionSeam } from '@/components/SectionSeam';

// Approximate dominant tint of each section's blob, used to bleed colour across the seam.
const BLUE = 'rgba(0,122,255,0.30)';
const AMBER = 'rgba(245,158,10,0.30)';
const VIOLET = 'rgba(140,92,255,0.30)';
const SAGE = 'rgba(107,158,128,0.30)';
const DEEP = 'rgba(10,10,12,1)';

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionSeam from={BLUE} to={DEEP} />
      <Problem />
      <SectionSeam from={DEEP} to={BLUE} />
      <AICapture />
      <SectionSeam from={BLUE} to={BLUE} />
      <Rooms />
      <SectionSeam from={BLUE} to={AMBER} />
      <Lending />
      <SectionSeam from={AMBER} to={VIOLET} />
      <Households />
      <SectionSeam from={VIOLET} to={SAGE} />
      <Insurance />
      <SectionSeam from={SAGE} to={AMBER} />
      <MovingBoxes />
      <SectionSeam from={AMBER} to={DEEP} />
      <Privacy />
      <SectionSeam from={DEEP} to={DEEP} />
      <Pricing />
      <SectionSeam from={DEEP} to={DEEP} />
      <FAQ />
      <SectionSeam from={DEEP} to={BLUE} />
      <FinalCTA />
    </main>
  );
}
