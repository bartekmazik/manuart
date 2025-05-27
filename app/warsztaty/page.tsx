import React from "react";
import { Gliker } from "../fonts/gliker";
import Image from "next/image";
import { PenTool } from "lucide-react";

const Workshop = () => {
  return (
    <div className="w-full min-h-96 bg-background flex flex-col gap-4 rounded-4xl p-4 text-primary">
      <div className="relative w-full bg-primarydark h-24 sm:h-1/3 rounded-2xl overflow-hidden ">
        <Image
          src="/rider.jpg"
          fill
          alt="workshop"
          className="object-cover opacity-40"
        />
        <p className="absolute text-white text-2xl font-black z-20 inset-0 flex gap-2 flex-row items-center justify-center opacity-100">
          WARSZTATY PISANIA
          <PenTool />
        </p>
      </div>
      <p className="p-2 text-sm sm:text-base">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
    </div>
  );
};

const Workshops = () => {
  return (
    <section className="flex flex-col gap-6 py-12">
      <h1 className={`text-5xl ${Gliker.className} text-background `}>
        Warsztaty
      </h1>
      <p className="text-lg text-background">
        Na wydarzeniu będa dostępne warsztaty rozszerzające kompetencje
        uczestników. Oto wybrane z nich:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <Workshop />
        <Workshop />

        <Workshop />
      </div>
    </section>
  );
};

export default Workshops;
