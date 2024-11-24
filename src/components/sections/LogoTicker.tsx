"use client";

import Image from "next/image";

const Card = ({ src }: { src: string }) => {
  return (
    <div className="flex-shrink-0 flex">
      <Image src={src} alt="" height={150} width={150} />
    </div>
  );
};

const LogoTicker = () => {
  const logos = [
    { src: "/brand/logo1.svg" },
    { src: "/brand/logo2.svg" },
    { src: "/brand/logo3.svg" },
    { src: "/brand/logo4.svg" },
    { src: "/brand/logo5.svg" },
  ];
  const data = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="md:h-[40vh] snap-center max-w-screen-2xl overflow-hidden">
      <div className="relative overflow-x-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-infinite-scroll flex gap-36 pr-36">
          {data.map((logo, idx) => (
            <Card key={idx} src={logo.src} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
