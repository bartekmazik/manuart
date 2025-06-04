import React from "react";
import { Gliker } from "../fonts/gliker";
import { Metadata } from "next";
import Image from "next/image";
import { promises as fs } from "fs";

export const metadata: Metadata = {
  title: "Partnerzy",
};

interface PartnerType {
  name: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  isStrategicPartner: boolean;
}

function Partner({
  name,
  description,
  imageUrl,
  imageAlt,
  isStrategicPartner,
}: PartnerType) {
  return (
    <div className="flex min-h-[70vh] flex-col w-full items-center gap-3 bg-background p-4 rounded-2xl shadow-md hover:shadow-lg transition">
      <div className="relative rounded-2xl h-1/2 shadow-md overflow-hidden  aspect-square w-full  border-4 bg-white">
        <Image
          src={`${imageUrl}`}
          fill
          alt={`${imageAlt}`}
          className=" object-fit"
        />
      </div>
      <div className="h-1/2">
        <h2 className="font-extrabold text-lg sm:text-xl text-primary text-center">
          {name}
        </h2>

        <p className=" text-sm text-gray-800  w-full p-3 rounded-xl">
          {description}
        </p>
      </div>
    </div>
  );
}

async function PartnersPage() {
  const file = await fs.readFile(process.cwd() + "/app/partners.json", "utf8");
  const data: PartnerType[] = JSON.parse(file);
  return (
    <div className=" flex flex-col pt-12 justify-center sm:justify-start items-start gap-12">
      <h1 className={`${Gliker.className} text-5xl text-background`}>
        Partnerzy wydarzenia
      </h1>
      {/*partners*/}
      <div className="w-full h-full bg-primary p-6  gap-4 rounded-xl flex flex-col sm:grid items-stretch  place-items-center  sm:grid-cols-4 sm:grid-rows-2">
        {data.map((partner, index) => (
          <Partner
            name={partner.name}
            description={partner.description}
            imageUrl={partner.imageUrl}
            imageAlt={partner.imageAlt}
            isStrategicPartner={partner.isStrategicPartner}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default PartnersPage;
