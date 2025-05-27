import React from "react";

import { Gliker } from "@/app/fonts/gliker";
import Image from "next/image";

function Organisator() {
  return (
    <div className="flex min-h-[70vh] flex-col w-full items-center gap-3 bg-background p-4 rounded-2xl shadow-md hover:shadow-lg transition">
      <div className="relative rounded-2xl h-2/3 overflow-hidden  aspect-square w-full  border-4 bg-primary">
        <Image
          src={"/steve.jpg"}
          fill
          alt="organisator"
          className=" object-cover"
        />
      </div>

      <h2 className="font-extrabold text-lg sm:text-xl text-primary text-center">
        Tobiasz Zbygmunt
      </h2>
      <h3 className="text-sm text-gray-600 text-center">Koordynator KZP</h3>

      <p className=" text-sm text-gray-800 text-center w-full p-3 rounded-xl">
        Miły, uprzejmy i dbający o wartości rodzinne filantrop, a zarazem
        doskonały filozof. Jego największym zainteresowaniem jest sprzedaż
        kradzionych perfum.
      </p>
    </div>
  );
}

const Organisators = () => {
  return (
    <div className="w-full">
      <h1
        className={`${Gliker.className} text-3xl sm:text-5xl font-bold mb-6 text-background 
        `}
      >
        ORGANIZATORZY
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8  w-full">
        <Organisator />
        <Organisator />
        <Organisator />
        <Organisator />
      </div>
    </div>
  );
};

export default Organisators;
