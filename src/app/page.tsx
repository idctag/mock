import { Bento } from "@/components/sections/Bento";
import { Features } from "@/components/sections/Feature";
import { Footer } from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import LogoTicker from "@/components/sections/LogoTicker";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-screen-2xl flex flex-col gap-24">
        <Hero />
        <Features />
        <LogoTicker />
        <Bento />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}
