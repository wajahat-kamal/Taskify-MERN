import AboutSection from "@/components/AboutSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="bg-[#000310]">
      <ToastContainer/>
      <Navbar />
      <Hero />
      <AboutSection/>
      <Testimonials/>
      <CTABanner/>
      <Footer/>
    </div>
  );
}
