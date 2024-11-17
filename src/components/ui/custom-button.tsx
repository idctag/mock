import React from "react";
import { IconType } from "react-icons";

const CustomButton = ({ text, Icon }: { text: string; Icon: IconType }) => {
  return (
    <button className="hover:cursor-pointer px-5 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
      <div className="w-full flex gap-3 items-center">
        <p className="w-3/4 font-bold">{text}</p>
        <Icon size={25} className="w-1/4" />
      </div>
    </button>
  );
};

export default CustomButton;
