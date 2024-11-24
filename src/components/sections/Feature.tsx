"use client";
import { cn } from "@/lib/utils";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

const Section = ({
  num,
  title,
  sub,
  color,
}: {
  num: string;
  title: string;
  sub: string;
  color: string;
}) => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <p className={cn(`text-${color} text-7xl`)}>{num}</p>
        <p className="text-4xl font-medium">{title}</p>
        <div className="flex md:flex-col gap-8">
          <p className="text-gray-500">{sub}</p>
          <Button variant="outlined" className="md:w-[30%] rounded-[5rem]">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};
const Feature = () => {
  const sectionStyle =
    "flex flex-col md:flex-row max-w-screen-2xl w-full justify-evenly h-full md:h-[40vh] items-center md:snap-center";
  return (
    <div className="flex flex-col w-full h-full gap-24 items-center my-24">
      <div className={cn(sectionStyle)}>
        <Section
          num="01"
          title="Start by going through our classes"
          sub="Covering subjects like Speaking, Listeing and Reading"
          color="yellow-500"
        />
        <Image src="/step1.svg" alt="" width={500} height={500} />
      </div>
      <div className={cn(sectionStyle)}>
        <Image src="/step2.svg" alt="" width={500} height={500} />
        <Section
          num="02"
          title="Start by going through our classes"
          sub="Covering subjects like Speaking, Listeing and Reading"
          color="blue-500"
        />
      </div>
      <div className={cn(sectionStyle)}>
        <Section
          num="03"
          title="Start by going through our classes"
          sub="Covering subjects like Speaking, Listeing and Reading"
          color="purple-500"
        />
        <Image src="/step3.svg" alt="" width={500} height={500} />
      </div>
    </div>
  );
};

export default Feature;
