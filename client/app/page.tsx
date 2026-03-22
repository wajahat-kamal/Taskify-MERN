import AboutSection from "@/components/home/AboutSection";
import CTABanner from "@/components/home/CTABanner";
import HeroSection from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Testimonials />
      <CTABanner />
    </>
  );
}
