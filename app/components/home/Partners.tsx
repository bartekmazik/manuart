"use client";

import Image from "next/image";
import React from "react";
import { Gliker } from "@/app/fonts/gliker";

const sponsors = [
  "/partners/angelos.svg",
  "/partners/artstudio.png",
  "/partners/bonadea.svg",
  "/partners/bwa.svg",
  "/partners/cudamamy.svg",
  "/partners/kolektyw.png",
  "/partners/molihua.png",
  "/partners/pasieka.svg",
];

const Partners = () => {
  return (
    <div className=" min-h-screen  overflow-hidden py-8 sm:py-16">
      <div className="relative p-8 min-h-[90vh] bg-background rounded-4xl w-full gap-8 flex flex-col justify-start items-start">
        <h1
          className={`${Gliker.className} font-bold text-3xl sm:text-5xl  text-primary sm:mb-8`}
        >
          PARTNERZY
        </h1>
        <div className="w-full h-full bg-white p-6 rounded-xl grid items-stretch  grid-cols-2 place-items-center grid-rows-3 sm:grid-cols-6 sm:grid-rows-2">
          {sponsors.map((logo, index) => (
            <div key={index} className="relative w-24 h-24 sm:w-40 sm:h-40  ">
              <Image src={logo} alt={`sponsor-${index}`} fill />
            </div>
          ))}
        </div>
        <h1
          className={`${Gliker.className} font-bold  text-3xl sm:text-5xl  text-primary mb-8`}
        >
          PARTNERZY MEDIALNI
        </h1>
        <div className="w-full  h-full bg-white p-6 rounded-xl grid  grid-cols-2 place-items-center grid-rows-3 sm:grid-cols-6 sm:grid-rows-2">
          {sponsors.map((logo, index) => (
            <div key={index} className="relative w-24 h-24 sm:w-36 sm:h-36  ">
              <Image src={logo} alt={`sponsor-${index}`} fill />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
