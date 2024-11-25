"use client";

import Image from "next/image";

const LogoTicker = () => {
  const logos = [
    { src: "/brand/logo1.svg" },
    { src: "/brand/logo2.svg" },
    { src: "/brand/logo3.svg" },
    { src: "/brand/logo4.svg" },
    { src: "/brand/logo5.svg" },
  ];

  // [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
  const ticker_style = "flex gap-36 flex-shrink-0 animate-infinite-scroll";

  return (
    <div className="md:h-[40vh] flex flex-nowrap gap-36 max-w-screen-2xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className={ticker_style}>
        {logos.map((logo, idx) => (
          <Image
            priority
            key={idx}
            src={logo.src}
            alt=""
            height={150}
            width={150}
          />
        ))}
      </div>
      <div className={ticker_style}>
        {logos.map((logo, idx) => (
          <Image
            priority
            key={`2${idx}`}
            src={logo.src}
            alt=""
            height={150}
            width={150}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoTicker;
