"use client";
import { FaRegSmile } from "react-icons/fa";
import { Typography } from "@material-tailwind/react";
import { IconType } from "react-icons";
import { GrCertificate } from "react-icons/gr";
import { PiThumbsUp } from "react-icons/pi";
import { RiBrainLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

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
  return (
    <div className="p-4 bg-white rounded-xl shadow-2xl my-2">
      <div className="flex flex-col md:w-52 h-36 md:h-72 justify-between">
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
          Read More
        </Typography>
      </div>
    </div>
  );
};

const Features = () => {
  const data = [
    {
      title: "Relaxing and Learning",
      description:
        "There are several sections available in different vesrions, but most of the have fun.",
      icon: PiThumbsUp,
      color: "cyan-500",
    },
    {
      title: "Certificate",
      description:
        "We are constantly improving the material for the lessons we want to pass on to others.",
      icon: GrCertificate,
      color: "red-500",
    },
    {
      title: "Private Mentoring",
      description:
        "All of our specialists in special education have the best educational degrees.",
      icon: FaRegSmile,
      color: "teal-500",
    },
    {
      title: "Creative Thinking",
      description:
        "All of our specialists in special education have the best educational degrees.",
      icon: RiBrainLine,
      color: "indigo-500",
    },
  ];

  return (
    <div className="max-w-screen-2xl w-full gap-24 flex flex-col my-10">
      <div className="w-full text-center">
        <Typography className="font-semibold text-pink-400 tracking-widest">
          HOW IT WORKS
        </Typography>
        <Typography variant="h2" className="font-arvo font-bold">
          How is Our Tutoring <span className="block">Service</span>
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
