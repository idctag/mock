"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-screen-2xl text-center">
        <div className="flex items-center">
          <Image src={"/image1.jpeg"} alt="" height={700} width={700} />
          <Typography className="text-2xl font-semibold">
            Суралцагч бүртэй тулж ажиллан тэдэнд англи хэл дурлаж суралцах арга
            барилыг бий болгон үүгээрээ эцэг эхчүүдэд одоо оруулсан хөрөнгө
            оруулалтаас нь илүү ирээдүйн боловсролын өгөөж, үр дүнг тэдэнд
            хүргэх.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
