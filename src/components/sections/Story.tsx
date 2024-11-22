"use client";

import { Typography } from "@material-tailwind/react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { LuGraduationCap } from "react-icons/lu";
import { FaDoorOpen, FaSchool } from "react-icons/fa";

export function Story() {
  return (
    <BentoGrid className="max-w-screen-2xl mx-auto md:auto-rows-[20rem]">
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
const items = [
  {
    title:
      "A Decade of Excellence in Language Training and Educational Placement",
    description: "",
    header: (
      <div className="flex h-full flex-col justify-center">
        <Typography variant="h2">
          Empowering Students for Global Opportunities Since 2009
        </Typography>
      </div>
    ),
    className: "md:col-span-4 bg-white text-black border-none",
    icon: <></>,
  },
  {
    title: "",
    description: "",
    header: (
      <div className="flex h-full flex-col justify-center">
        <Typography variant="h3">10+</Typography>
        <Typography variant="h4">years of experience</Typography>
      </div>
    ),
    className: "md:col-span-1 bg-white text-black border-none",
    icon: <></>,
  },
  {
    title: "",
    description: "",
    header: (
      <div className="flex h-full flex-col justify-center">
        <Typography variant="h3">10,000+</Typography>
        <Typography variant="h4">Students Empowered</Typography>
      </div>
    ),
    className: "md:col-span-1 bg-white text-black border-none",
    icon: <></>,
  },
  {
    title: (
      <div className="flex items-center justify-between">
        <Typography>2009</Typography>
        <FaDoorOpen size={40} />
      </div>
    ),
    description: "",
    header: (
      <div className="h-full flex flex-col justify-center">
        <Typography variant="h4">
          Kunz LLC established for recruiting students to China.
        </Typography>
      </div>
    ),
    className: "md:col-span-2 bg-secondary",
    icon: <></>,
  },
  {
    title: (
      <div className="flex items-center justify-between">
        <Typography>2013</Typography>
        <LuGraduationCap size={40} />
      </div>
    ),
    description: "",
    header: (
      <div className="h-full flex flex-col justify-center">
        <Typography variant="h4">
          Kunz Education Center for Chinese training and placements
        </Typography>
      </div>
    ),
    className: "md:col-span-2 bg-secondary",
    icon: <></>,
  },
  {
    title: (
      <div className="flex items-center justify-between">
        <Typography>2019</Typography>
        <FaSchool size={40} />
      </div>
    ),
    description: "",
    header: (
      <div className="h-full flex flex-col justify-center">
        <Typography variant="h4">
          Kunz School for Chinese and English training; Kim Education Center for
          Korean education.
        </Typography>
      </div>
    ),
    className: "md:col-span-2 bg-secondary",
    icon: <></>,
  },
];

// const Story = () => {
//   return (
//     <div className="flex justify-center items-center bg-primary/70 text-white h-[70vh]">
//       <div className="max-w-screen-2xl">
//         {/* HEAD */}
//         <div className="flex flex-col gap-10">
//           <div className="flex flex-col gap-4">
//             <Typography variant="h2" className="">
//               Empowering Students for Global Opportunities Since 2009
//             </Typography>
//             <Typography variant="h5">
//               A Decade of Excellence in Language Training and Educational
//               Placement
//             </Typography>
//           </div>
//           {/* SUB TEXTS */}
//           <div className="flex gap-4">
//             <div className="flex flex-col bg-secondary rounded-lg p-5 gap-3">
//               <Typography variant="h4" className="">
//                 2009:
//               </Typography>
//               <Typography className="text-xl ">
//                 Kunz LLC established for recruiting students to China.
//               </Typography>
//             </div>
//             <div className="flex flex-col bg-secondary rounded-lg p-5 gap-3">
//               <Typography variant="h4" className="">
//                 2013:
//               </Typography>
//               <Typography className="text-xl ">
//                 Kunz Education Center for Chinese training and placements.
//               </Typography>
//             </div>
//             <div className="flex flex-col bg-secondary rounded-lg p-5 gap-3">
//               <Typography variant="h4" className="">
//                 2018:
//               </Typography>
//               <Typography className="text-xl ">
//                 Kunz School for Chinese and English training; Kim Education
//                 Center for Korean education
//               </Typography>
//             </div>
//           </div>
//           {/* BOTTOM */}
//           <div className="flex w-full text-center gap-10">
//             <Typography className="w-1/2 text-4xl bg-secondary p-7 rounded-lg">
//               10+ years of experience
//             </Typography>
//             <Typography className="w-1/2 text-4xl bg-secondary p-7 rounded-lg">
//               10,000+ students empowered.
//             </Typography>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default Story;
