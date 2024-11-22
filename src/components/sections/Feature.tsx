import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";

export function Features({ className }: { className?: string }) {
  const t = useTranslations("Feature");
  const features = [
    {
      title: t("title_one"),
      description: t("description_one"),
      icon: <IconTerminal2 />,
    },
    {
      title: t("title_two"),
      description: t("description_two"),
      icon: <IconEaseInOut />,
    },
    {
      title: t("title_three"),
      description: t("description_three"),
      icon: <IconCurrencyDollar />,
    },
    {
      title: t("title_four"),
      description: t("description_four"),
      icon: <IconCloud />,
    },
    {
      title: t("title_five"),
      description: t("description_five"),
      icon: <IconRouteAltLeft />,
    },
    {
      title: t("title_six"),
      description: t("description_six"),
      icon: <IconHelp />,
    },
    {
      title: t("title_seven"),
      description: t("description_seven"),
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: t("title_eight"),
      description: t("description_eight"),
      icon: <IconHeart />,
    },
  ];
  return (
    <div
      className={cn(
        "grid my-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto",
        className,
      )}
    >
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800",
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
