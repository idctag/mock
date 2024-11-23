import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import LearningMethods from "@/components/sections/LearningMethods";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center font-poppins gap-10">
      <Hero />
      <Features />
      <LearningMethods />
      <About />
    </div>
  );
}
