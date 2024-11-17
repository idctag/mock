"use client";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io5";
import Image from "next/image";
import { BackgroundLines } from "../ui/backgorund-line";
import { Typography } from "@material-tailwind/react";
import CarouselText from "../ui/carousel-text";
import CustomButton from "../ui/custom-button";
import { useTranslations } from "next-intl";
const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <BackgroundLines className="flex items-center justify-center z-0">
      <div className="flex flex-col max-w-screen-2xl lg:flex-row z-10">
        {/* LEFT */}
        <div className="w-1/2 flex flex-col justify-center">
          <div className="flex flex-col gap-4 max-w-[80%] self-end">
            <Typography variant="h1">{t("title")}</Typography>
            <CarouselText />
            <div className="flex gap-4 justify-center">
              <CustomButton text="Download" Icon={FaApple} />
              <CustomButton text="Download" Icon={IoLogoAndroid} />
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-1/2">
          <Image src="/phone.png" alt="" width={500} height={500} />
        </div>
      </div>
    </BackgroundLines>
  );
};

export default Hero;
