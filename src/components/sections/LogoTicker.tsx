"use client";
import {
  IoLogoFacebook,
  IoLogoOctocat,
  IoLogoWhatsapp,
  IoLogoWindows,
  IoLogoWordpress,
} from "react-icons/io";
import { BiLogoAws, BiLogoLinkedinSquare } from "react-icons/bi";
import { IoLogoDocker, IoLogoFigma } from "react-icons/io5";
import { Typography } from "@material-tailwind/react";
import { useTranslations } from "next-intl";

const logos = [
  {
    icon: IoLogoFacebook,
    name: "Facebook",
  },
  { icon: IoLogoOctocat, name: "Octocat" },
  { icon: IoLogoWindows, name: "Windows" },
  { icon: IoLogoWordpress, name: "Wordpress" },
  { icon: IoLogoWhatsapp, name: "Whatsapp" },
  { icon: IoLogoDocker, name: "Docker" },
  { icon: IoLogoFigma, name: "Figma" },
  { icon: BiLogoAws, name: "Aws" },
  { icon: BiLogoLinkedinSquare, name: "Linkedin" },
];
export default function LogoTicker() {
  const duplicatedLogos = [...logos, ...logos];
  const t = useTranslations("LogoTicker");
  return (
    <div>
      <section className="overflow-x-clip py-24">
        <Typography variant="h3" className="container text-center">
          {t("title_one")}
        </Typography>
        <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-slide gap-24 pr-24">
            {duplicatedLogos.map((logo, idx) => (
              <div className="flex flex-shrink-0 gap-4 items-center" key={idx}>
                <logo.icon size={30} />
                <Typography variant="lead">{logo.name}</Typography>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="overflow-x-clip py-24">
        <Typography variant="h3" className="container text-center">
          {t("title_two")}
        </Typography>
        <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-slideReverse gap-24 pr-24">
            {duplicatedLogos.map((logo, idx) => (
              <div className="flex flex-shrink-0 gap-4 items-center" key={idx}>
                <logo.icon size={30} />
                <Typography variant="lead">{logo.name}</Typography>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
