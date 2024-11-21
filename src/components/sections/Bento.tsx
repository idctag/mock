import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { FaRegHandshake } from "react-icons/fa";

export function Bento() {
  const t = useTranslations("Bento");
  const items = [
    {
      title: t("title_one"),
      description: t("description_one"),
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("title_two"),
      description: t("description_two"),
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("title_three"),
      description: t("description_three"),
      header: <Skeleton />,
      className: "md:row-span-2",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("title_four"),
      description: t("description_three"),
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: t("title_five"),
      description: t("description_five"),
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <FaRegHandshake className="h-4 w-4 text-neutral-500" />,
    },
  ];
  return (
    <BentoGrid className="max-w-screen-2xl mx-auto md:auto-rows-[20rem] my-20">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
