import React from "react";
import { Gliker } from "../fonts/gliker";
import Image from "next/image";

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
}: {
  tags: string[];
  name: string;
  description: string;
}) => {
  return (
    <div className="relative bg-background sm:h-96 w-full sm:w-2/3 rounded-4xl p-4 flex flex-col sm:flex-row gap-4">
      <div className="relative overflow-hidden w-full aspect-square sm:aspect-auto sm:w-1/3 h-1/3 sm:h-full bg-primary rounded-3xl">
        <Image src="/steve.jpg" fill alt="artist" />
      </div>
      <div className="w-full sm:w-2/3 flex flex-col justify-between text-primary gap-4 sm:gap-2">
        <div>
          <h2 className="text-xl sm:text-3xl  font-bold mb-4 sm:mb-2">
            {name}
          </h2>
          <p className="text-sm sm:text-base">{description}</p>
        </div>
        <div className="flex flex-row flex-wrap  items-center gap-2 ">
          Tematyka:
          {tags.map((text, i) => {
            return <Tag text={text} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

const Artists = () => {
  return (
    <section className="flex flex-col gap-6">
      <h1 className={`text-5xl ${Gliker.className} text-background pt-12`}>
        Wystawcy
      </h1>
      <p className="text-lg text-background">
        Nasze wydarzenie obejmuje wystawców i ich prelekcje
      </p>

      <Artist
        name="Tomasz Oświęcimski"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
        tags={["rzeźbiarstwo", "malarstwo"]}
      />
    </section>
  );
};

export default Artists;
