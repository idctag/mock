"use client";
import { FaRegSmile } from "react-icons/fa";
import { Typography } from "@material-tailwind/react";
import { IconType } from "react-icons";
import { GrCertificate } from "react-icons/gr";
import { PiThumbsUp } from "react-icons/pi";
import { RiBrainLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const Section = ({
  title,
  description,
  Icon,
  color,
}: {
  title: string;
  description: string;
  Icon: IconType;
  color: string;
}) => {
  const t = useTranslations("Features");
  return (
    <div className="p-4 bg-white rounded-xl shadow-2xl my-2">
      <div className="flex flex-col md:w-52 h-full md:h-72 justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row md:flex-col gap-10 md:gap-0">
            <div className={cn(`bg-${color} w-min p-2 rounded-xl  mb-3`)}>
              <Icon color="white" size={30} />
            </div>
            <Typography variant="h6">{title}</Typography>
          </div>
          <Typography className="font-medium text-gray-500">
            {description}
          </Typography>
        </div>
        <Typography className="text-blue-700 font-medium hover:cursor-pointer mr-auto">
          {t("read")}
        </Typography>
      </div>
    </div>
  );
};

const Features = () => {
  const t = useTranslations("Features");
  const data = [
    {
      title: t("title_1"),
      description: t("description_1"),
      icon: PiThumbsUp,
      color: "cyan-500",
    },
    {
      title: t("title_2"),
      description: t("description_2"),
      icon: GrCertificate,
      color: "red-500",
    },
    {
      title: t("title_3"),
      description: t("description_3"),
      icon: FaRegSmile,
      color: "teal-500",
    },
    {
      title: t("title_4"),
      description: t("description_4"),
      icon: RiBrainLine,
      color: "indigo-500",
    },
  ];

  return (
    <div className="max-w-screen-2xl w-full h-full md:h-screen justify-center gap-24 flex flex-col my-10">
      <div className="w-full text-center">
        <Typography className="font-semibold text-pink-400 tracking-widest">
          {t("how")}
        </Typography>
        <Typography variant="h2" className="font-arvo font-bold">
          {t("tutor")} <span className="block">{t("service")}</span>
        </Typography>
      </div>
      <div className="flex flex-col flex-wrap md:flex-row justify-evenly">
        {data.map((curr, idx) => (
          <Section
            key={idx}
            title={curr.title}
            Icon={curr.icon}
            description={curr.description}
            color={curr.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
