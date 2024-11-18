import { Features } from "@/components/sections/Feature";
import { Footer } from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-screen-2xl flex flex-col gap-24">
        <Hero />
        <Features />
        <Footer />
      </div>
    </div>
  );
}
