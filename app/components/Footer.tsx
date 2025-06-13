"use client";
import Image from "next/image";
import React from "react";
import { Gliker } from "../fonts/gliker";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const FooterProvider = () => {
  const pathname = usePathname();
  return <>{pathname !== "/" ? <Footer /> : <></>}</>;
};

const Footer = () => {
  return (
    <footer className="relative  w-full h-[50vh] sm:h-[40vh] rounded-t-4xl overflow-x-visible sm:mt-36 text-backgroundsecondary bg-background ">
      {/* footer content */}
      <div className="absolute bg-transparent inset-0 px-8 sm:px-16 py-4 sm:py-20 flex flex-col sm:flex-row items-end justify-end sm:justify-between  text-left gap-10 sm:gap-0">
        {/*left column*/}
        <div className="flex flex-col items-center sm:items-start gap-4 w-full">
          <h2
            className={`${Gliker.className} text-primary text-xl sm:text-4xl font-bold`}
          >
            ManuArt Festiwal
          </h2>
          <div className="flex flex-col items-center sm:items-start gap-2 text-primary text-base sm:text-lg font-medium">
            <Link href="/" className="hover:text-primarydark transition-colors">
              Strona główna
            </Link>
            <Link
              href="/paneuropa"
              className="hover:text-primarydark transition-colors"
            >
              O nas
            </Link>
            <Link
              href="/partnerzy"
              className="hover:text-primarydark transition-colors"
            >
              Partnerzy
            </Link>
            <Link
              href="/kontakt"
              className="hover:text-primarydark transition-colors"
            >
              Kontakt
            </Link>
          </div>
        </div>
        {/* right column */}
        <div className="w-full h-full flex flex-col justify-center items-center  sm:w-1/3 gap-4">
          <div className="hidden sm:block relative w-full h-full self-start ">
            <Image
              src="/paneuropa/paneuropalogo.svg"
              alt="logo paneuropy"
              fill
            />
          </div>
          <p
            className={`${Gliker.className} text-primary  text-lg sm:text-2xl`}
          >
            ZAOBSERWUJ NAS
          </p>
          <div className="flex flex-row justify-center items-center gap-4">
            {[
              {
                href: "https://www.facebook.com/Paneuropa",
                src: "/facebook.svg",
                alt: "Facebook",
              },
              {
                href: "https://www.instagram.com/paneuropa_ue/",
                src: "/instagram.svg",
                alt: "Instagram",
              },
              {
                href: "https://www.linkedin.com/company/paneuropakatowice",
                src: "/linkedin.svg",
                alt: "LinkedIn",
              },
              {
                href: "https://www.tiktok.com/@paneuropa_ue",
                src: "/tiktok.svg",
                alt: "TikTok",
              },
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
