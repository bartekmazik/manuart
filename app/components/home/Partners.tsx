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
    <div className=" h-screen  overflow-hidden py-16">
      <div className="relative p-8 h-[90vh] bg-backgroundsecondary rounded-4xl w-full gap-8 flex flex-col justify-start items-start">
        <h1
          className={`${Gliker.className} font-bold text-5xl  text-primary mb-8`}
        >
          PARTNERZY
        </h1>
        <div className="grid justify-center grid-cols-6 grid-row-2">
          {sponsors.map((logo, index) => (
            <div key={index} className="mx-8 ">
              <Image
                src={logo}
                alt={`sponsor-${index}`}
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <h1
          className={`${Gliker.className} font-bold text-5xl  text-primary mb-8`}
        >
          PARTNERZY MEDIALNI
        </h1>
      </div>
    </div>
  );
};

export default Partners;
