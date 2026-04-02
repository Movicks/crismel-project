import HeroSection from "@/components/majors/HeroSection";
import LogoCloud from "@/components/majors/LogoCloud";
import About from "@/components/majors/About";
import Stats from "@/components/majors/Stats";
import Features from "@/components/majors/Features";
import Process from "@/components/majors/Process";
import CTA from "@/components/majors/CTA";
import Footer from "@/components/majors/Footer";
import ContactForm from "@/components/majors/ContactForm";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div id="top" className="space-y-6 md:space-y-10">
      <Navbar />
      <HeroSection />
      <div className="w-full px-4 md:px-6 lg:px-20 xl:px-30 space-y-6 md:space-y-10 flex flex-col items-center justify-center">
        {/* <LogoCloud /> */}
        <About />
        <Stats />
        <Features />
        <Process />
        <CTA />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
