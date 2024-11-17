"use client";
import { FaApple } from "react-icons/fa";
import { BackgroundLines } from "../ui/backgorund-line";
import CustomButton from "../ui/custom-button";
import { IoLogoAndroid } from "react-icons/io";
import CarouselText from "../ui/carousel-text";
import Image from "next/image";
const Hero = () => {
  return (
    <BackgroundLines className="flex items-center justify-center z-0">
      <div className="z-10 w-screen flex items-center">
        <div className="w-1/2 flex flex-col items-end">
          <div className="flex flex-col gap-16 w-full items-end max-w-[70%]">
            <div className="flex flex-col gap-16">
              <h1 className="text-4xl font-bold">Lorem ipsum</h1>
              <CarouselText />
            </div>
            <div className="flex gap-3 self-start">
              <CustomButton text="Download" Icon={FaApple} />
              <CustomButton text="Download" Icon={IoLogoAndroid} />
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <Image
            src="/phone.png"
            alt=""
            priority={true}
            width={500}
            height={500}
          />
        </div>
      </div>
    </BackgroundLines>
  );
};

export default Hero;
