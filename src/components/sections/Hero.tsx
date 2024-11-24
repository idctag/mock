"use client";

import { Button, Typography } from "@material-tailwind/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <div className="flex flex-col w-full justify-center md:px-6 md:pt-2 snap-end">
      <div className="bg-gradient-to-r to-sky-600 from-sky-500 w-full h-[72vh] md:h-[65vh] md:rounded-t-[4rem] flex items-center flex-col text-center md:text-start justify-evenly md:flex-row md:p-5">
        <div className="md:w-3/5 text-white flex justify-center">
          <div className="flex flex-col gap-4 max-w-[500]">
            <Typography className="font-poppins font-semibold text-4xl md:text-6xl ">
              {t("title")}
            </Typography>
            <Typography className="font-poppins text-xl text-gray-600">
              {t("description")}
            </Typography>
            <div>
              <Button variant="gradient" className="px-10">
                {t("contact")}
              </Button>
            </div>
          </div>
        </div>
        <div className="flex">
          <Image src="/hero2.svg" priority width={500} height={500} alt="" />
        </div>
      </div>
      <div className="flex flex-col py-4 gap-8 h-[25vh] w-full bg-gradient-to-r from-black to-black/80 md:rounded-b-[3rem] text-white items-center justify-center">
        <div className="text-center gap-4 flex flex-col">
          <Typography className="md:text-3xl text-xl font-medium tracking-wider">
            {t("trust")}
            <span className="font-bold text-2xl md:text-4xl"> 1,000+ </span>
            {t("parent")}
          </Typography>
          <Typography className="md:text-3xl text-xl font-medium tracking-wider">
            {t("many")}
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
