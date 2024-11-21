"use client";
import Image from "next/image";
import { BackgroundLines } from "../ui/backgorund-line";
import { HeroHighlight, Highlight } from "../ui/text-highlight";
import { Typography } from "@material-tailwind/react";
const Hero = () => {
  // const t = useTranslations("Hero");
  return (
    <BackgroundLines className="flex flex-col md:flex-row items-center justify-center z-0">
      <div className="flex flex-col items-center max-w-screen-2xl lg:flex-row z-10">
        {/* LEFT */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="flex flex-col gap-24 md:gap-6 w-full self-end">
            <HeroHighlight className="grid gap-12">
              <Typography variant="h1">
                {`Unlock Your Child's Potential with Expert English Tutoring!`}
              </Typography>
              <Typography variant="h3">
                {`Tailored lessons to boost confidence, language skills, and `}
                <Highlight>academic success!</Highlight>
              </Typography>
            </HeroHighlight>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-1/2 hidden md:flex justify-center">
          <Image src="/hero.svg" priority alt="" width={800} height={800} />
        </div>
      </div>
    </BackgroundLines>
  );
};

export default Hero;
