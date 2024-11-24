import AboutUs from "@/components/sections/AboutUs";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import LearningMethods from "@/components/sections/LearningMethods";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center snap-y font-poppins gap-10">
      <Hero />
      <Features />
      <LearningMethods />
      <AboutUs />
    </div>
  );
}
