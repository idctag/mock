import { Footer } from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import LogoTicker from "@/components/sections/LogoTicker";
import { Members } from "@/components/sections/Members";
import Story from "@/components/sections/Story";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center">
      <Hero />
      <Story />
      <Introduction />
      <LogoTicker />
      <Members />
      <Footer />
    </div>
  );
}
