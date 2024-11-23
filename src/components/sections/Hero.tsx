"use client";

import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col w-full justify-center md:px-6 md:pt-2">
      <div className="bg-gradient-to-r from-amber-300 to-amber-500 w-full h-[72vh] md:h-[65vh] md:rounded-t-[4rem] flex items-center flex-col text-center md:text-start justify-evenly md:flex-row md:p-5">
        <div className="md:w-3/5 flex justify-center">
          <div className="flex flex-col gap-4 max-w-[500]">
            <Typography className="font-poppins font-semibold text-4xl md:text-6xl ">
              {`Unlock Your Child's Potential with Expert English Tutoring!`}
            </Typography>
            <Typography className="font-poppins text-xl text-gray-600">
              {`Tailored lessons to boost confidence and language skills `}
            </Typography>
            <div>
              <Button variant="gradient" className="px-10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        <div className="flex">
          <Image src="/learn3.svg" width={500} height={500} alt="" />
        </div>
      </div>
      <div className="flex flex-col py-4 gap-8 h-[25vh] w-full bg-gradient-to-r from-black to-black/80 md:rounded-b-[3rem] text-white items-center justify-center">
        <div className="text-center gap-4 flex flex-col">
          <Typography className="md:text-3xl text-xl font-medium tracking-wider">
            Trusted by over{" "}
            <span className="font-bold text-2xl md:text-4xl">1,000+ </span>
            Parents
          </Typography>
          <Typography className="md:text-3xl text-xl font-medium tracking-wider">
            And many others
          </Typography>
        </div>
        <div className="flex gap-8 md:gap-20">
          <Image
            src="/messenger.svg"
            alt=""
            width={50}
            height={50}
            className="size-8 md:size-12"
          />
          <Image
            src="/facebook.svg"
            alt=""
            width={50}
            height={50}
            className="size-8 md:size-12"
          />
          <Image
            src="/elephant.svg"
            alt=""
            width={50}
            height={50}
            className="size-8 md:size-12"
          />
          <Image
            src="/reddit.svg"
            alt=""
            width={50}
            height={50}
            className="size-8 md:size-12"
          />
          <Image
            src="/cube.svg"
            alt=""
            width={50}
            height={50}
            className="size-8 md:size-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
