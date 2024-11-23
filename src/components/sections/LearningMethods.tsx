"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

import { MdSportsGymnastics } from "react-icons/md";
import { SiFuturelearn } from "react-icons/si";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { IconType } from "react-icons";

const LearningMethods = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-screen-2xl w-full gap-12 my-10">
      <div className="bg-gradient-to-l md:w-1/2 from-indigo-700 to-cyan-600 p-10 pb-0 md:rounded-[3rem]">
        <Image src="/tr3.png" priority alt="" height={600} width={600} />
      </div>
      <div className="md:w-1/2 p-10 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <Typography className="font-semibold text-pink-400 tracking-widest">
            LEARNING METHODS
          </Typography>
          <Typography className="font-arvo text-4xl font-semibold">
            Access to learning anytime and anywhere
          </Typography>
          <Typography className="text-xl text-gray-600">
            Make it easier for all students to lean through digital media with
            existing media making it easier for students to learn anywhere
            anytime
          </Typography>
        </div>
        <div className="grid grid-cols-2 gap-4 md:w-[70%]">
          <GridItem title="World Class" Icon={FaGlobeAmericas} />
          <GridItem title="Flexible" Icon={MdSportsGymnastics} />
          <GridItem title="Affordable" Icon={FaMoneyCheckDollar} />
          <GridItem title="Easy Learning" Icon={SiFuturelearn} />
        </div>
      </div>
    </div>
  );
};

const GridItem = ({ title, Icon }: { title: string; Icon: IconType }) => {
  return (
    <div className="p-4 font-normal flex text-center w-44 text-blue-700  items-center gap-4">
      <Icon />
      {title}
    </div>
  );
};

export default LearningMethods;
