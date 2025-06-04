"use client";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { Gliker } from "@/app/fonts/gliker";
import { Button } from "../Button";

export default function About() {
  return (
    <AnimatePresence>
      <motion.section
        className="min-h-screen overflow-hidden  flex flex-col sm:flex-row items-start justify-start py-16"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-start justify-start w-full sm:w-2/3 h-1/2 sm:pr-12 gap-8 ">
          <h2
            className={`${Gliker.className} text-background text-3xl sm:text-5xl `}
          >
            Kazdy przedmiot to opowiesc
          </h2>
          <div className="flex flex-col items-start justify-center w-full sm:w-5/6  gap-8">
            <p className="bg-background text-sm sm:text-base  p-4 rounded-xl  text-primarydark shadow-md hover:shadow-lg transition">
              ManuArt Festiwal – Twórz i Inspiruj! to wyjątkowe wydarzenie,
              które już 14 czerwca 2025 roku ożywi industrialne wnętrza Galerii
              Szyb Wilson w Katowicach! To prawdziwe święto kreatywności, gdzie
              pasja do rękodzieła spotyka się z edukacją i lokalnym duchem
              twórczości. Tworzony przez Organizację Studencką PANEUROPA
              Uniwersytetu Ekonomicznego w Katowicach. Festiwal jest otwarty na
              wszystkich, którzy chcą odkryć magię unikatowych, ręcznie
              robionych przedmiotów, poznać inspirujące historie twórców i
              samemu spróbować swoich sił podczas kreatywnych warsztatów. W
              ciągu dnia czeka na Was mnóstwo atrakcji: od stoisk lokalnych
              artystów i rzemieślników, przez inspirujące prelekcje o ekologii,
              przedsiębiorczości i rozwoju marki, aż po możliwość zanurzenia się
              w twórczym procesie i stworzenia czegoś własnoręcznie. ManuArt
              Festiwal to nie tylko targi – to przestrzeń pełna pasji,
              inspiracji i wymiany doświadczeń. Idealne miejsce, by spotkać
              ludzi z podobną energią, zdobyć nową wiedzę i odnaleźć piękno w
              detalach, które nadają przedmiotom duszę. Dołącz do nas i odkryj,
              że każdy przedmiot to opowieść!
            </p>
            <Button
              text="WYDARZENIE NA FACEBOOKU"
              href="https://www.facebook.com/Paneuropa"
              variant="light"
            />
          </div>
        </div>
        <div className="hidden sm:block w-1/2 h-full aspect-square  relative rounded-4xl shadow-md hover:shadow-lg transition">
          <Image
            src="/heroguy.png"
            alt="rider"
            fill
            className="object-cover rounded-4xl bg-background"
          />
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
