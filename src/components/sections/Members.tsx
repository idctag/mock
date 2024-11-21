"use client";

import { Tabs } from "../ui/tabs";
import { cn } from "@/lib/utils";

export function Members() {
  const tabs = [
    {
      title: "Teachers",
      value: "teachers",
      content: (
        <div className="w-full flex flex-col gap-8 overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-primary to-secondary">
          <p>Teachers</p>
          <div className="flex h-full gap-8 justify-evenly">
            <Card img="image3.jpeg" />
            <Card img="image3.jpeg" />
            <Card img="image3.jpeg" />
            <Card img="image3.jpeg" />
          </div>
        </div>
      ),
    },
    {
      title: "Staff",
      value: "staff",
      content: (
        <div className="w-full flex flex-col gap-8 overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-primary to-secondary">
          <p>Staff</p>
          <div className="flex h-full gap-8 justify-evenly">
            <Card img="image2.jpeg" />
            <Card img="image2.jpeg" />
            <Card img="image2.jpeg" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="md:h-[40rem] [perspective:1200px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-20">
      <Tabs tabs={tabs} />
    </div>
  );
}

export function Card({ img }: { img: string }) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between ",
        )}
        style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="mt-auto bg-primary/50 p-4">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            Author Card
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            Card with Author avatar, complete name and time to read - most
            suitable for blogs.
          </p>
        </div>
      </div>
    </div>
  );
}
