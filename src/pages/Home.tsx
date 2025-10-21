import Hero from '../components/Hero';
import VideoText from '../components/VideoText';
import ProTips from '../components/ProTips';
import Speciality from '../components/Speciality';
import SignatureDishes from '../components/SignatureDishes';
import Ambiance from '../components/Ambiance';
import Testimonials from '../components/Testimonials';
import Rating from '../components/Rating';

/**
 * The Home page component.
 * It assembles all the sections that should appear on the main landing page.
 */
export default function Home() {
  return (
    <>
      <Hero />
      {/* <VideoText /> */}
      
      <Speciality />
      <SignatureDishes />
      <Ambiance />
      <Testimonials />
      <Rating />
    </>
  );
}
