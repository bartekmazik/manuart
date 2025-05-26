import React from "react";
import { Gliker } from "../fonts/gliker";
import Image from "next/image";

const Artist = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <div className="relative w-full sm:w-1/3 h-48 sm:h-36 shadow-lg rounded-4xl">
        <Image
          src="/map.jpg"
          alt="map"
          fill
          className="object-cover rounded-4xl"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold text-primary">Wystawca</h3>
        <p className="text-primarydark font-semibold bg-backgroundsecondary rounded-xl p-4">
          Strefa wystawców – Spotkaj małe, lokalne marki i poznaj ich ręcznie
          tworzone produkty. Każdy wystawca chętnie opowie o swojej pasji i
          procesie tworzenia, a Ty będziesz mieć okazję do zakupu unikalnych
          przedmiotów.
        </p>
      </div>
    </div>
  );
};
const AboutPage = () => {
  return (
    <div className=" flex flex-col pt-12 justify-center sm:justify-start items-start gap-12">
      <h1 className={`${Gliker.className} text-5xl text-primary`}>
        Wydarzenie
      </h1>
      <div className="relative w-[90vw] h-96 self-center bg-backgroundsecondary rounded-4xl shadow-lg  ">
        <Image src={"/map.jpg"} fill alt="map" className="rounded-4xl" />
      </div>

      <h2 className={`${Gliker.className} text-4xl text-primary`}>Wystawcy</h2>
      <div className="flex flex-col gap-4 sm:gap-12">
        <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist />
        <Artist />
      </div>
    </div>
  );
};

export default AboutPage;
