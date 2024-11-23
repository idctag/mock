"use client";

import { Typography } from "@material-tailwind/react";
import { IconType } from "react-icons";
import { LiaSchoolSolid } from "react-icons/lia";
import { FaDoorOpen } from "react-icons/fa";
import { RiEarthLine } from "react-icons/ri";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
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
    <CardContainer className="bg-sky-500/50 h-56 flex flex-col py-0 justify-between p-10 md:rounded-[2rem] inter-var">
      <CardBody className="flex flex-col justify-between px-10">
        <div className="flex justify-between">
          <CardItem as="p" translateZ={50} className="text-3xl font-semibold">
            {title}
          </CardItem>
          <CardItem as="div" translateX={30}>
            <Icon size={30} />
          </CardItem>
        </div>
        <CardItem as="p" translateZ={60} className="text-lg">
          {sub}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

const About = () => {
  const t = useTranslations("About");
  return (
    <div id="about" className="bg-gradient-to-b from-sky-700 to-sky-600">
      <div className="h-full p-10 md:h-[80vh] w-screen bg-dot-white/[0.3] text-white flex justify-center">
        <div className="max-w-screen-2xl flex flex-col justify-evenly">
          <div className="w-full flex justify-center">
            <Typography className="md:w-[70%] w-[85%] py-12 text-center text-4xl md:text-5xl font-medium">
              {t("title")}
            </Typography>
          </div>
          <div className="grid flex-wrap md:grid-cols-3 gap-4 md:gap-32">
            <Item title={t("item_1")} sub={t("sub_1")} Icon={FaDoorOpen} />
            <Item title={t("item_2")} sub={t("sub_2")} Icon={LiaSchoolSolid} />
            <Item title={t("item_3")} sub={t("sub_3")} Icon={RiEarthLine} />
          </div>
          <div className="flex flex-col md:flex-row w-full p-4 justify-evenly text-center gap-12">
            <Typography className="text-4xl md:text-6xl font-semibold">
              {t("years")}
            </Typography>
            <Typography className="text-4xl md:text-6xl font-semibold">
              {t("students")}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
