import React from "react";
import { Gliker } from "../fonts/gliker";
import Image from "next/image";

const Zone = () => {
  return (
    <div className="flex flex-col items-center bg-backgroundsecondary rounded-3xl p-4 shadow-lg gap-4 text-center transition-all duration-300 hover:scale-[1.02]">
      <div className="relative w-full h-36 rounded-3xl overflow-hidden">
        <Image
          src="/map.jpg"
          alt="map"
          fill
          className="object-cover rounded-3xl"
        />
      </div>
      <h3 className="text-xl font-bold text-primary">Strefa jeden</h3>
      <p className="text-primarydark font-medium text-sm">
        Strefa wystawców – Spotkaj małe, lokalne marki i poznaj ich ręcznie
        tworzone produkty. Każdy wystawca chętnie opowie o swojej pasji i
        procesie tworzenia, a Ty będziesz mieć okazję do zakupu unikalnych
        przedmiotów.
      </p>
    </div>
  );
};

const Artist = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start bg-backgroundsecondary rounded-3xl p-4 shadow-lg gap-4 transition-all duration-300 hover:scale-[1.02]">
      <div className="relative w-full sm:w-1/3 h-48 rounded-3xl overflow-hidden">
        <Image
          src="/map.jpg"
          alt="artist"
          fill
          className="object-cover rounded-3xl"
        />
      </div>
      <div className="text-left">
        <h3 className="text-xl font-bold text-primary">Wystawca</h3>
        <p className="text-primarydark font-medium text-sm mt-2">
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
    <div className="flex flex-col px-4 sm:px-8 pt-12 max-w-7xl mx-auto gap-12">
      <h1 className={`${Gliker.className} text-4xl sm:text-5xl text-primary`}>
        Wydarzenie
      </h1>

      <div className="relative w-full h-64 sm:h-96 bg-backgroundsecondary rounded-4xl shadow-lg overflow-hidden">
        <Image
          src="/map.jpg"
          fill
          alt="map"
          className="object-cover rounded-4xl"
        />
      </div>

      <h2 className={`${Gliker.className} text-3xl sm:text-4xl text-primary`}>
        Strefy wydarzenia
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Zone />
        <Zone />
        <Zone />
      </div>

      <h2 className={`${Gliker.className} text-3xl sm:text-4xl text-primary`}>
        Wystawcy
      </h2>

      <div className="flex flex-col gap-6">
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
