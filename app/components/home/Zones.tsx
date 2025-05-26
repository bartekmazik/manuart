import React from "react";
import Image from "next/image";
import { Gliker } from "@/app/fonts/gliker";

const Zone = () => {
  return (
    <div className=" flex flex-col min-h-[70vh] justify-start px-2 py-8 items-center shadow-lg gap-2 bg-backgroundsecondary rounded-xl">
      <div className="flex flex-row items-center justify-center gap-2">
        <h3 className="text-2xl font-bold text-primary">Strefa jeden</h3>
        <Image
          src="globe.svg"
          width={32}
          height={32}
          alt="icon"
          className="text-primary"
        />
      </div>
      <p className="text-primarydark font-semibold   p-4">
        Strefa wystawców – Spotkaj małe, lokalne marki i poznaj ich ręcznie
        tworzone produkty. Każdy wystawca chętnie opowie o swojej pasji i
        procesie tworzenia, a Ty będziesz mieć okazję do zakupu unikalnych
        przedmiotów.
      </p>
    </div>
  );
};

const Zones = () => {
  return (
    <div className="min-h-screen py-16">
      <h1
        className={`${Gliker.className} font-bold text-3xl sm:text-5xl  text-primary mb-8`}
      >
        STREFY WYDARZENIA
      </h1>
      <div className="flex flex-col sm:grid sm:grid-cols-3  self-center gap-12">
        <Zone />
        <Zone />

        <Zone />
      </div>
    </div>
  );
};

export default Zones;
