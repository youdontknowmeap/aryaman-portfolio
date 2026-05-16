import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/sections/Hero"), { 
  ssr: false,
  loading: () => <div className="w-full h-screen bg-[#080808]" />
});
import Manifesto from "@/components/sections/Manifesto";
import Disciplines from "@/components/sections/Disciplines";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Disciplines />
      <Work />
      <About />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}


