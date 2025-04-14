import React from "react";
import { Gliker } from "../fonts/gliker";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div className=" flex flex-col pt-12 justify-center sm:justify-start items-start gap-12">
      <h1 className={`${Gliker.className} text-5xl text-primary`}>O nas</h1>
      <div className="relative rounded-4xl w-full h-96 ">
        <Image src="/map.jpg" className="rounded-4xl" alt="paneuropa" fill />
      </div>

      <p className="bg-backgroundsecondary w-full text-lg  p-4 rounded-xl font-bold text-primarydark shadow-md hover:shadow-lg transition">
        Organizacja Studencka PANEUROPA Uniwersytetu Ekonomicznego w Katowicach
        *odnośnik do naszej strony* Jesteśmy Organizacją, która od 25 lat
        zrzesza ambitnych i pełnych pasji studentów, gotowych stawiać czoła
        wyzwaniom i rozwijać swoje umiejętności. Skupiamy się na aktywnym
        wykorzystaniu czasu studiów, realizując różnorodne projekty – od
        biznesowych, po te inspirowane osobistymi zainteresowaniami. W ciągu
        naszej działalności zrealizowaliśmy już około 130 wydarzeń, w tym takie
        Inicjatywy jak Tupot Małych Łapek – charytatywny bieg wspierający
        schronisko dla zwierząt, Spotkanie z gwiazdą – wywiad z Olą Kot, czy
        Gaming Insights – konferencję gamingową na Śląsku, która przyciągnęła
        ekspertów, twórców i pasjonatów gier. Jesteśmy grupą otwartych na świat
        studentów, którzy zdobywają doświadczenie, realizując projekty, które
        inspirują i angażują innych. Śledź nas na naszych mediach
        społecznościowych, aby być na bieżąco z naszymi działaniami i
        wydarzeniami:
      </p>
    </div>
  );
};

export default AboutUsPage;
