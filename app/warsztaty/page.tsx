import { Metadata } from "next";
import Image from "next/image";
import { Button } from "../components/Button";
import { Gliker } from "../fonts/gliker";

export const metadata: Metadata = {
  title: "Warsztaty",
};

const Workshop = ({
  title,
  description,
  imageUrl,
  imageAlt,
}: {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}) => {
  return (
    <div className="w-full min-h-96 bg-background flex flex-col gap-4 rounded-4xl p-4 text-primary">
      <div className="relative w-full bg-primarydark h-24 sm:h-1/3 rounded-2xl overflow-hidden ">
        <Image
          src={imageUrl}
          fill
          alt={imageAlt}
          className="object-cover opacity-30"
        />
        <p className="absolute text-white text-base sm:text-2xl font-black z-20 inset-0 flex gap-2 flex-row items-center justify-center opacity-100">
          {title}
        </p>
      </div>
      <p className="p-2 text-sm sm:text-lg">{description}</p>
    </div>
  );
};

const Workshops = () => {
  return (
    <section className="flex flex-col gap-6 py-12">
      <h1 className={`text-5xl ${Gliker.className} text-background `}>
        Warsztaty
      </h1>
      <p className="text-lg text-background">
        Na wydarzeniu będa dostępne warsztaty rozszerzające kompetencje
        uczestników. Oto wybrane z nich:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <Workshop
          title="Tworzenie dekoracyjnych domków"
          description="Cuda Mamy pokażą Wam, jak z wyobraźni wyczarować coś naprawdę uroczego i klimatycznego!"
          imageUrl="/workshops/houses.jpg"
          imageAlt="Mini house making Workshop"
        />
        <Workshop
          title="Warsztaty upcyklingowe z szycia"
          imageUrl="/workshops/sewing.jpg"
          imageAlt="Sewing Workshop"
          description="Razem z Warsztatownią Na dłużej, nauczycie się, jak ze starych rzeczy wyczarować coś nowego, użytecznego i pięknego! Kreatywnie i ekologicznie!"
        />

        <Workshop
          title="Tworzenie świec z wosku pszczelego"
          imageUrl="/workshops/candles.jpg"
          imageAlt="Candle making workshop"
          description="Razem z Ekomiody i Pasieka Morawskich poznacie magię naturalnego pszczelego wosku i stworzycie swoją własną pachnącą świecę!"
        />
      </div>
      <h1 className={`text-3xl ${Gliker.className} text-background `}>
        Zapisz się na warsztaty!
      </h1>
      <Button
        href="https://docs.google.com/forms/d/e/1FAIpQLSevpWc1K8L6JMWIdyzmgpm-3OP96b-qy4a2rWnF7q4kmrcvUQ/viewform"
        text="LINK DO ZAPISÓW"
        variant="light"
      />
    </section>
  );
};

export default Workshops;
