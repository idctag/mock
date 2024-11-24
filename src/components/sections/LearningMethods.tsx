"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

import { MdSportsGymnastics } from "react-icons/md";
import { SiFuturelearn } from "react-icons/si";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { IconType } from "react-icons";
import { useTranslations } from "next-intl";

const LearningMethods = () => {
  const t = useTranslations("Learning");
  return (
    <div className="flex flex-col snap-center md:flex-row max-w-screen-2xl h-full md:h-[80vh] items-center  w-full md:gap-12 my-10">
      <div className="bg-gradient-to-l md:w-1/2 from-amber-300 h-min  to-amber-300/70 p-10 pb-0 md:rounded-[3rem]">
        <Image src="/tr3.png" priority alt="" height={600} width={600} />
      </div>
      <div className="md:w-1/2 md:p-2 flex justify-between flex-col md:gap-12">
        <div className="flex flex-col gap-5 bg-blue-300 p-10 md:rounded-[2rem]">
          <Typography className="font-semibold text-gray-600 tracking-widest">
            {t("title")}
          </Typography>
          <Typography className="text-4xl font-semibold">
            {t("sub_title")}
          </Typography>
          <Typography className="text-xl font-medium text-gray-600">
            {t("description")}
          </Typography>
        </div>
        <div className="grid grid-cols-2 w-full md:rounded-[2rem] md:p-10 bg-blue-300">
          <GridItem title={t("world")} Icon={FaGlobeAmericas} />
          <div className="border-l border-gray-500">
            <GridItem title={t("flexible")} Icon={MdSportsGymnastics} />
          </div>
          <GridItem title={t("affordable")} Icon={FaMoneyCheckDollar} />
          <div className="border-l border-gray-500">
            <GridItem title={t("easy")} Icon={SiFuturelearn} />
          </div>
        </div>
      </div>
    </div>
  );
};

const GridItem = ({ title, Icon }: { title: string; Icon: IconType }) => {
  return (
    <div className="p-4 font-normal md:text-xl flex text-center items-center gap-4">
      <Icon />
      {title}
    </div>
  );
};

export default LearningMethods;
