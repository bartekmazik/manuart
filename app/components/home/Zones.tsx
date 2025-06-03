import React from "react";
import { Gliker } from "@/app/fonts/gliker";

const Zone = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className=" flex flex-col min-h-[70vh] justify-start px-2 py-8 items-center shadow-lg gap-2 bg-background rounded-xl">
      <div className="flex flex-row items-center justify-center gap-2">
        <h3 className="text-3xl font-bold text-primary">{title}</h3>
      </div>
      <p className="text-primarydark text-lg    p-4">{description}</p>
    </div>
  );
};

const Zones = () => {
  return (
    <div className="min-h-screen py-16">
      <h1
        className={`${Gliker.className} font-bold text-3xl sm:text-5xl  text-background mb-8`}
      >
        STREFY WYDARZENIA
      </h1>
      <div className="flex flex-col sm:grid sm:grid-cols-3  self-center gap-12">
        <Zone
          title="Strefa wystawców 🛍"
          description="Spotkaj małe, lokalne marki i poznaj ich ręcznie tworzone produkty. Każdy wystawca chętnie opowie o swojej pasji i procesie tworzenia, a Ty będziesz mieć okazję do zakupu unikalnych przedmiotów."
        />
        <Zone
          title="Warsztat kreatywny 🎨"
          description="Spróbuj swoich sił w tworzeniu! Nasze warsztaty to świetna okazja, by poczuć satysfakcję z własnoręcznie wykonanego przedmiotu."
        />

        <Zone
          title="Inspirujące prelekcje 🎤"
          description="Na naszej scenie pojawią się prelegenci, którzy podzielą się swoją wiedzą i doświadczeniem w zakresie przedsiębiorczości, rozwoju własnej marki oraz ekologii. To wyjątkowa możliwość, by posłuchać ich historii, zdobyć cenne wskazówki i zainspirować się do działania. Po wystąpieniach będzie również przestrzeń na rozmowy, pytania i wymianę doświadczeń."
        />
      </div>
    </div>
  );
};

export default Zones;
