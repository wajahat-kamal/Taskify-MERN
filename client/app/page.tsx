import AboutSection from "@/components/AboutSection";
import CTABanner from "@/components/CTABanner";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="bg-[#000310]">
      <Navbar />
      <Hero />
      <AboutSection/>
      <Testimonials/>
      <CTABanner/>
    </div>
  );
}
