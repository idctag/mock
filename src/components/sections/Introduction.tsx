"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="w-full h-[50vh] flex flex-col justify-center items-center">
      <div className="max-w-screen-2xl text-center">
        <div className="flex items-center">
          <Image src={"/image1.jpeg"} alt="" height={700} width={700} />
          <div className="flex flex-col gap-4">
            <Typography variant="h2">Сурагчдын сурах боломж</Typography>
            <Typography className="text-xl">
              Суралцагч бүртэй тулж ажиллан тэдэнд англи хэл дурлах суралцах
              арга барилыг бий болгон үгээрээ эцэг эхчүүдэд одоо оруулсан
              хөрөнгө оруулалтаас нь илүү ирээдүйн боловсролын өгөөж, үр дүнг
              тэдэнд хүргэх.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
