"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Gliker } from "@/app/fonts/gliker";

const sponsors = [
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
];
//needs to be above 3 items in array otherways its not filling enough space
const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];

const PartnersCarousel = () => {
  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-start overflow-hidden  py-8">
      <h1
        className={`${Gliker.className} font-bold text-5xl self-center text-primary mb-8`}
      >
        PARTNERZY
      </h1>
      <motion.div
        className="flex min-w-fit "
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedSponsors.map((logo, index) => (
          <div key={index} className="mx-8 flex-shrink-0">
            <Image
              src={logo}
              alt={`sponsor-${index}`}
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PartnersCarousel;
