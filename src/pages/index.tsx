// import { HiBars3,  } from 'react-icons/hi'
import FaQs from "@/components/UI/FaQs";
import LiveDemo from "@/components/UI/LiveDemo";
import Testimonials from "@/components/UI/Testimonials";
import HeroSection from "@/components/UI/heroSection";
import VideoDemo from "@/components/UI/videoDemo";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VideoDemo />
      <LiveDemo />
      <FaQs />
      <Testimonials />
    </>
  );
}
