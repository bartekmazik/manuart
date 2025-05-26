import React from "react";

import { Gliker } from "@/app/fonts/gliker";
import Image from "next/image";

function Organisator() {
  return (
    <div className="flex flex-col items-center gap-3 bg-backgroundsecondary p-4 rounded-2xl shadow-md hover:shadow-lg transition">
      <div className="relative rounded-full w-24 h-24 sm:w-28 sm:h-28 border-4 border-primary">
        <Image
          src={"/steve.jpg"}
          fill
          alt="organisator"
          className="rounded-full object-cover"
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
    <div>
      <h1
        className={`${Gliker.className} text-3xl sm:text-5xl font-bold text-primary text-center`}
      >
        ORGANIZATORZY
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8 max-w-screen-xl w-full">
        <Organisator />
        <Organisator />
        <Organisator />
        <Organisator />
      </div>
    </div>
  );
};

export default Organisators;
