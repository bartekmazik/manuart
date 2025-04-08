"use client";
import Image from "next/image";
import React from "react";
import { Gliker } from "../../fonts/gliker";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Button } from "../Button";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <motion.div
      className="h-screen"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full bg-backgroundsecondary h-[90vh] pt-6 rounded-4xl flex flex-row justify-between">
        <div className="mt-16 p-6 lg:w-1/2 w-full gap-4 flex flex-col items-start justify-start">
          <h1 className={`font-bold ${Gliker.className} text-5xl text-primary`}>
            Manuart Festival
          </h1>
          <h2
            className={`font-bold ${Gliker.className} text-3xl text-secondary`}
          >
            {" "}
            Twórz i inspiruj
          </h2>
          <div className="w-full flex justify-start items-center gap-2 ">
            <CalendarDays className="text-primarydark w-6 h-6" />
            <p className="font-bold text-primarydark text-xl">7 lipca 2025</p>
          </div>
          <div className="w-full flex justify-start items-center gap-2">
            <Clock className="text-primarydark w-6 h-6" />
            <p className="font-bold text-primarydark text-xl">18:00</p>
          </div>
          <div className="w-full flex justify-start items-center gap-2 ">
            <MapPin className="text-primarydark w-6 h-6" />
            <p className="font-bold text-primarydark text-xl">
              Galeria Szyb Wilson, Katowice
            </p>
          </div>
          <Button text="MAPA WYDARZENIA" href="/Wydarzenie" />
          <h2
            className={`text-3xl ${Gliker.className} text-secondary
        }`}
          >
            Bądź na bieząco
          </h2>
          <form className="hidden lg:flex flex-row gap-2 items-center justify-center  ">
            <input
              placeholder="Email"
              className="bg-white rounded-3xl py-3 px-6 text-black focus:outline-primary"
            />
            <button className="bg-primary rounded-3xl py-3 px-6 text-white cursor-pointer hover:bg-primarydark transition-colors duration-300 font-extrabold">
              ZAPISZ SIĘ DO NEWSLETTERA
            </button>
          </form>
        </div>
        <div className="hidden lg:block w-1/2 relative">
          <Image src="/heroguy.png" fill={true} alt="guy" objectFit="contain" />
        </div>
      </div>
    </motion.div>
  );
}
