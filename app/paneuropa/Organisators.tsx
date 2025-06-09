import React from "react";

import { Gliker } from "@/app/fonts/gliker";
import Image from "next/image";

function Organisator({
  name,
  role,
  imageUrl,
  imageAlt,
  description,
}: {
  name: string;
  role: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
}) {
  return (
    <div className="flex min-h-[70vh] flex-col w-full items-center gap-3 bg-background p-4 rounded-2xl shadow-md hover:shadow-lg transition">
      <div className="relative rounded-2xl h-1/2 overflow-hidden shadow-sm aspect-square w-full   bg-primary">
        <Image
          src={`${imageUrl}`}
          fill
          alt={`${imageAlt}`}
          loading="eager"
          className=" object-cover"
        />
      </div>
      <div className="h-1/2">
        <h2 className="font-extrabold text-lg sm:text-xl text-primary text-center">
          {name}
        </h2>
        <h3 className="text-sm text-gray-600 font-semibold text-center">
          {role}
        </h3>

        <p className=" text-sm text-gray-800 text-center w-full p-3 rounded-xl">
          {description}
        </p>
      </div>
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
        <Organisator
          name="Julia"
          role="Koordynatorka Główna ManuArt Festiwal"
          imageUrl="/organisators/julia.png"
          imageAlt="julia"
          description="Od zawsze kochała tworzyć — malarstwo, ceramika po florystykę i marketing. Jej pasja do sztuki przerodziła się w zamiłowanie do organizacji i promocji wydarzeń. ManuArt to dla niej przestrzeń do dzielenia się inspiracjami, rozwijania talentów i wspólnego tworzenia, z dbałością o środowisko."
        />
        <Organisator
          name="Emilia"
          role="Koordynatorka Harmonogramu i Logistyki"
          imageUrl="/organisators/emilia.jpg"
          imageAlt="emilia"
          description="Prawdziwa pasjonatka rękodzieła i lokalnej twórczości. Czerpie radość z łączenia pasji z organizacją wydarzeń, a jej zaangażowanie sprawia, że wszystko przebiega zgodnie z planem. Dzięki niej Festiwal działa jak dobrze naoliwiony mechanizm!"
        />
        <Organisator
          name="Kamila"
          role="Koordynatorka Promocji"
          imageUrl="/organisators/kamila.jpeg"
          imageAlt="kamila"
          description="Od zawsze pasjonuje się kreatywnymi zajęciami i rękodziełem, które pozwala jej wyrazić siebie. Zaangażowała się w projekt, by podjąć nowe wyzwania i rozwijać się. W wolnym czasie lubi podróże, czytanie, gry komputerowe, koncerty i spotkania z przyjaciółmi.
"
        />
        <Organisator
          name="Tobiasz"
          role="Koordynator Grupy Kontaktu z Partnerami"
          imageUrl="/organisators/tobiasz.jpeg"
          imageAlt="tobiasz"
          description="Osoba, która jest łącznikiem z firmami, instytucjami i markami wspierającymi wydarzenie. Jego zaangażowanie, otwartość i łatwość w nawiązywaniu relacji sprawiają, że świetnie odnajduje się w tej roli!
"
        />
      </div>
    </div>
  );
};

export default Organisators;
