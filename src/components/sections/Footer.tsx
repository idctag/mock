"use client";
import { IoIosMail } from "react-icons/io";
import { IconButton, Typography } from "@material-tailwind/react";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebook, FaInstagramSquare, FaPhone } from "react-icons/fa";
import { useTranslations } from "next-intl";

const currentYear = new Date().getFullYear();

export function Footer() {
  const t = useTranslations("Footer");
  const LINKS = [
    {
      title: t("title_one"),
      items: [
        t("items_one.one"),
        t("items_one.two"),
        t("items_one.three"),
        t("items_one.four"),
      ],
    },
    {
      title: t("title_two"),
      items: [
        t("items_two.one"),
        t("items_two.two"),
        t("items_two.three"),
        t("items_two.four"),
      ],
    },
    {
      title: t("title_three"),
      items: [
        t("items_three.one"),
        t("items_three.two"),
        t("items_three.three"),
        t("items_three.four"),
      ],
    },
  ];
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Typography variant="h5" className="mb-6">
              Company Name
            </Typography>
            <div className="flex gap-3">
              <IconButton variant="outlined" className="rounded-full">
                <FaInstagramSquare size={20} />
              </IconButton>
              <IconButton variant="outlined" className="rounded-full">
                <FaFacebook size={20} />
              </IconButton>
              <IconButton variant="outlined" className="rounded-full">
                <FaXTwitter size={20} />
              </IconButton>
              <IconButton variant="outlined" className="rounded-full">
                <FaYoutube size={20} />
              </IconButton>
            </div>
            <div className="flex gap-3 items-center">
              <FaPhone />
              <Typography className="font-normal">+976 99999999</Typography>
            </div>
            <div className="flex gap-3 items-center">
              <IoIosMail />
              <Typography className="font-normal">
                company@example.com
              </Typography>
            </div>
          </div>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-3 font-medium"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="">Company Name</a>. All Rights
            Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
