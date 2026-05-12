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

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <AICapture />
      <Rooms />
      <Lending />
      <Households />
      <Insurance />
      <MovingBoxes />
      <Privacy />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
