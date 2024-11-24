import AboutUs from "@/components/sections/AboutUs";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import LearningMethods from "@/components/sections/LearningMethods";
import LogoTicker from "@/components/sections/LogoTicker";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center snap-y font-poppins gap-10">
      <Hero />
      <LearningMethods />
      <Features />
      <LogoTicker />
      <AboutUs />
    </div>
  );
}
