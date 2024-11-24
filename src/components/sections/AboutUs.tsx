"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { IconType } from "react-icons";
import { LiaSchoolSolid } from "react-icons/lia";
import { FaDoorOpen } from "react-icons/fa";
import { RiEarthLine } from "react-icons/ri";
import { useTranslations } from "next-intl";

const Item = ({
  title,
  sub,
  Icon,
}: {
  title: string;
  sub: string;
  Icon: IconType;
}) => {
  return (
    <div className="text-white flex flex-col bg-cyan-700 p-8 md:rounded-[2rem] gap-12 w-full md:w-2/3">
      <Typography className="text-xl font-medium">{sub}</Typography>
      <div className="flex justify-between">
        <Typography className="text-lg text-gray-300">{title}</Typography>
        <Icon size={30} />
      </div>
    </div>
  );
};

const AboutUs = () => {
  const t = useTranslations("About");
  return (
    <div
      id="about"
      className="h-full md:snap-center md:h-[80vh] bg-gradient-to-l from-cyan-800 to-cyan-700 justify-center flex w-full"
    >
      <div className="max-w-screen-2xl flex flex-col-reverse md:flex-row justify-between ">
        <div className="h-full flex flex-col-reverse gap-4 w-full md:w-1/2">
          <Image
            priority
            src="/point.png"
            className="self-center"
            alt=""
            width={400}
            height={600}
          />
          <div className="text-white flex justify-between w-full">
            <Typography className="text-2xl font-semibold">
              {t("years")}
            </Typography>
            <Typography className="text-2xl font-semibold">
              {t("students")}
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-center h-full justify-evenly w-full gap-4 md:w-1/2 ">
          <Item title={t("item_1")} sub={t("sub_1")} Icon={FaDoorOpen} />
          <Item title={t("item_2")} sub={t("sub_2")} Icon={LiaSchoolSolid} />
          <Item title={t("item_3")} sub={t("sub_3")} Icon={RiEarthLine} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
