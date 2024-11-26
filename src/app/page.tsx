import Reveal from "@/components/Reveal";
import AboutUs from "@/components/sections/AboutUs";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import LearningMethods from "@/components/sections/LearningMethods";
import LogoTicker from "@/components/sections/LogoTicker";
import AnimatedBackground from "@/components/ui/background-particles";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center snap-y font-poppins gap-10">
      <Reveal>
        <Hero />
      </Reveal>
      <AnimatedBackground className="w-full items-center justify-center flex flex-col">
        <Reveal>
          <LearningMethods />
        </Reveal>
        <Reveal>
          <Features />
        </Reveal>
      </AnimatedBackground>
      <Reveal classname="flex justify-center">
        <LogoTicker />
      </Reveal>
      <Reveal>
        <AboutUs />
      </Reveal>
    </div>
  );
}
