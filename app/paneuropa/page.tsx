import React from "react";
import { Gliker } from "../fonts/gliker";
import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import Organisators from "../components/Organisators";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nas",
};

const AboutUsPage = () => {
  return (
    <div className="flex flex-col gap-12 py-12  sm:px-12 mx-auto text-background">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <h1 className={`${Gliker.className} text-4xl sm:text-5xl font-bold`}>
          Organizacja Studencka PANEUROPA
        </h1>
      </div>

      {/* map image */}
      <div className="relative w-full h-72 sm:h-96 rounded-3xl overflow-hidden shadow-md">
        <Image
          src="/map.jpg"
          alt="Mapa PANEUROPA"
          fill
          className="object-cover"
        />
      </div>

      {/* description */}
      <p className="bg-background text-primary text-sm sm:text-lg p-6 rounded-2xl font-medium  shadow-lg ">
        Organizacja Studencka PANEUROPA Uniwersytetu Ekonomicznego w Katowicach
        działa już od 25 lat. Zrzeszamy ambitnych, pełnych pasji studentów,
        gotowych stawiać czoła wyzwaniom i rozwijać swoje umiejętności poprzez
        realizację różnorodnych projektów – od biznesowych, po te inspirowane
        osobistymi zainteresowaniami.
        <br />
        <br />
        Na przestrzeni lat zrealizowaliśmy około 130 wydarzeń, takich jak{" "}
        <strong>Tupot Małych Łapek</strong> – charytatywny bieg wspierający
        schronisko dla zwierząt, <strong>Spotkanie z Gwiazdą</strong> – wywiad z
        Olą Kot, czy <strong>Gaming Insights</strong> – konferencja gamingowa na
        Śląsku, przyciągająca ekspertów, twórców i pasjonatów gier.
        <br />
        <br />
        Jesteśmy grupą otwartych na świat studentów, którzy zdobywają
        doświadczenie, realizując projekty, które inspirują i angażują innych.
      </p>

      {/*social medias*/}
      <div className="flex bg-background p-4 rounded-2xl shadow-lg flex-col sm:flex-row items-start sm:justify-between sm:items-center gap-4 sm:gap-6">
        <p className="  text-primary text-sm sm:text-lg">
          Śledź nas na mediach społecznościowych, aby być na bieżąco:
        </p>
        <div className="flex flex-row items-center gap-4 self-center ">
          {[
            {
              href: "https://facebook.com",
              src: "/facebook.svg",
              alt: "Facebook",
            },
            {
              href: "https://instagram.com",
              src: "/instagram.svg",
              alt: "Instagram",
            },
            {
              href: "https://linkedin.com",
              src: "/linkedin.svg",
              alt: "LinkedIn",
            },
            { href: "https://tiktok.com", src: "/tiktok.svg", alt: "TikTok" },
          ].map(({ href, src, alt }) => (
            <Link key={alt} href={href} target="_blank">
              <Image
                src={src}
                alt={alt}
                width={32}
                height={32}
                className="hover:scale-110 transition-transform duration-200"
              />
            </Link>
          ))}
          <Link href="https://www.paneuropa.com.pl" target="_blank">
            <Globe className="hover:scale-110 transition-transform duration-200" />
          </Link>
        </div>
      </div>
      <Organisators />
    </div>
  );
};

export default AboutUsPage;
