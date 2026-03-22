import AboutSection from "@/components/home/AboutSection";
import CTABanner from "@/components/home/CTABanner";
import HeroSection from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import Navbar from "@/components/home/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Testimonials />
      <CTABanner />
    </>
  );
}
