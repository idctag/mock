import AboutUs from "@/components/sections/AboutUs";
import Feature from "@/components/sections/Feature";
import Hero from "@/components/sections/Hero";
import LearningMethods from "@/components/sections/LearningMethods";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center snap-y font-poppins gap-10">
      <Hero />
      <LearningMethods />
      <Feature />
      <AboutUs />
    </div>
  );
}
