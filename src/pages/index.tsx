// import { HiBars3,  } from 'react-icons/hi'
import FaQs from "@/components/UI/FaQs";
import Testimonials from "@/components/UI/Testimonials";
import HeroSection from "@/components/UI/heroSection";
import FeaturedBots from "./featured-bots";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedBots />
      //<FaQs />
      <Testimonials />
    </>
  );
}
