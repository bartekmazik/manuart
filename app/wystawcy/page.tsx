import React from "react";
import { Gliker } from "../fonts/gliker";
import Image from "next/image";
import { promises as fs } from "fs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wystawcy",
};

interface ArtistType {
  name: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
}

const Tag = ({ text }: { text: string }) => {
  return (
    <div className="bg-primary py-2 px-4 rounded-full text-background">
      {text}
    </div>
  );
};

const Artist = ({
  tags,
  name,
  description,
  imageUrl,
  imageAlt,
}: ArtistType) => {
  return (
    <div className="relative bg-background sm:h-96 w-full  rounded-4xl p-4 flex flex-col sm:flex-row gap-4">
      {imageUrl !== "" && (
        <div className="relative flex items-center justify-center shadow-sm overflow-hidden w-full aspect-square sm:w-1/3 sm:h-full bg-white rounded-3xl p-4">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, 33vw"
            loading="eager"
          />
        </div>
      )}
      <div className="w-full sm:w-2/3 flex flex-col justify-between text-primary gap-4 sm:gap-2">
        <div>
          <h2 className="text-xl sm:text-3xl  font-bold mb-4 sm:mb-2">
            {name}
          </h2>
          <p className="text-sm sm:text-base">{description}</p>
        </div>
        <div className="flex flex-row flex-wrap  items-center gap-2 ">
          {tags.length > 0 && (
            <>
              <span>Tematyka:</span>
              {tags.map((text, i) => {
                return <Tag text={text} key={i} />;
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

async function Artists() {
  const file = await fs.readFile(process.cwd() + "/app/artists.json", "utf8");
  const data: ArtistType[] = JSON.parse(file);
  return (
    <section className="flex flex-col gap-6 py-12">
      <h1 className={`text-5xl ${Gliker.className} text-background `}>
        Wystawcy
      </h1>
      <p className="text-lg text-background">
        Nasze wydarzenie obejmuje wystawców i ich prelekcje
      </p>

      {data.map((artist, i) => (
        <Artist
          key={i}
          name={artist.name}
          description={artist.description}
          imageUrl={artist.imageUrl}
          imageAlt={artist.imageAlt}
          tags={artist.tags}
        />
      ))}
    </section>
  );
}

export default Artists;
