import Image from "next/image";
import React from "react";
import { Gliker } from "../fonts/gliker";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative w-screen mt-36 text-backgroundsecondary ">
      <Image
        src="/footer.svg"
        alt="footerbg"
        width={1440}
        height={690}
        className="w-full h-auto object-cover "
        style={{ filter: "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.2))" }}
      />
      <div className="sm:hidden bg-backgroundsecondary w-screen h-96 sm:h-64"></div>

      <div className="absolute top-0 sm:top-auto sm:bottom-0 pt-36 sm:pt-0 left-0  w-screen h-1/2 px-6 flex  flex-col sm:flex-row items-center justify-between text-center">
        <div className="flex flex-col justify-start items-start gap-2 ">
          <h2
            className={` ${Gliker.className} text-primary text-3xl font-bold`}
          >
            Manuart Festival
          </h2>
          <Link href="/about" className="text-primary font-bold">
            Wydarzenie
          </Link>
          <Link href="/about" className="text-primary font-bold">
            O nas
          </Link>
          <Link href="/about" className="text-primary font-bold">
            Partnerzy
          </Link>
          <Link href="/about" className="text-primary font-bold">
            Kontakt
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className={`${Gliker.className} text-primary text-3xl `}>
            ZAOBSERWUJ NAS
          </p>
          <div className="flex flex-row justify-center items-center gap-2">
            <Link href="https://facebook.com">
              <Image src="/facebook.svg" alt="" width={32} height={32} />
            </Link>
            <Link href="https://facebook.com">
              <Image src="/instagram.svg" alt="" width={32} height={32} />
            </Link>

            <Link href="https://facebook.com">
              <Image src="/linkedin.svg" alt="" width={32} height={32} />
            </Link>

            <Link href="https://facebook.com">
              <Image
                src="/tiktok.svg"
                alt=""
                width={32}
                height={32}
                className="text-primary"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
