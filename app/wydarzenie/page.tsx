import React from "react";
import { Gliker } from "../fonts/gliker";
import Image from "next/image";

const Artist = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <div
        className={`relative w-28 h-24 rounded-full bg-primary ${Gliker.className} text-background flex flex-col items-center justify-center text-3xl `}
      >
        1
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <h3 className="text-2xl font-bold text-primary">Wystawca</h3>
        <p className="text-primary  ">
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
    <div className=" flex flex-col py-12 justify-center sm:justify-start items-start gap-12">
      <h1 className={`${Gliker.className} text-5xl text-background`}>
        Wydarzenie
      </h1>
      <div className="relative w-[90vw] h-96 self-center bg-background rounded-4xl shadow-lg  ">
        <Image
          src={"/map.jpg"}
          fill
          alt="map"
          className="rounded-4xl opacity-70"
        />
      </div>

      <h2 className={`${Gliker.className} text-4xl text-background`}>
        Wystawcy
      </h2>
      <div className="p-4 bg-background rounded-4xl flex flex-col gap-4 sm:gap-12">
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
