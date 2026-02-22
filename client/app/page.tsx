import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#000310]">
      <Navbar />
      <Hero />
      <AboutSection/>
      <Testimonials/>
    </div>
  );
}
