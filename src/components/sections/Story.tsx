"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

const Story = () => {
  return (
    <div className="flex justify-center items-center bg-primary/70 text-white h-[50vh]">
      <div className="max-w-screen-2xl flex items-center gap-10">
        <Typography className="text-center text-2xl font-semibold tracking-wider">
          Г.Өнөрсайхан нь анхлан БНХАУ-руу оюутан зуучлах зорилготой “Күнз”
          ХХК-г 2009 онд байгуулан, 2013 онд Хятад хэлний сургалт, БНХАУ-н их
          дээд, сургууль зуучлалын чиглэлээр “Күнз боловсролын төв”, 2018 онд
          Хятад, Англи хэлний сургалттай Ерөнхий боловсролын “Күнз” сургууль мөн
          тус ондоо Солонгосын их дээд, сургууль зуучлал болон хэлний чиглэлээр
          “Ким боловсролын төв”-г байгуулсан билээ. Боловсролын салбарт үйл
          ажиллагаагаа явуулсан энэхүү 10 гаруй жилийн хугацаанд 10.000 гаруй
          сурагч, оюутан залууст богино болон урт хугацааны сургалтаар гадаад
          хэлний мэдлэгийг түгээгээд байна.
        </Typography>
        <Image src={"/hats.svg"} alt="" height={500} width={500} />
      </div>
    </div>
  );
};

export default Story;
