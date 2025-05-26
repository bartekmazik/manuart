"use client";

import Image from "next/image";
import React from "react";
import { Gliker } from "@/app/fonts/gliker";

const sponsors = [
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
];
//needs to be above 3 items in array otherwise its not filling enough space

const Partners = () => {
  return (
    <div className=" min-h-screen  overflow-hidden py-8 sm:py-16">
      <div className="relative p-8 min-h-[90vh] bg-backgroundsecondary rounded-4xl w-full gap-8 flex flex-col justify-start items-start">
        <h1
          className={`${Gliker.className} font-bold text-3xl sm:text-5xl  text-primary sm:mb-8`}
        >
          PARTNERZY
        </h1>
        <div className="grid justify-center grid-cols-2 grid-rows-3 sm:grid-cols-6 sm:grid-row-2">
          {sponsors.map((logo, index) => (
            <div key={index} className="relative w-24 h-24 sm:w-36 sm:h-36 ">
              <Image
                src={logo}
                alt={`sponsor-${index}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <h1
          className={`${Gliker.className} font-bold  text-3xl sm:text-5xl  text-primary mb-8`}
        >
          PARTNERZY MEDIALNI
        </h1>
      </div>
    </div>
  );
};

export default Partners;
