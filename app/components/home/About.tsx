"use client";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { Gliker } from "@/app/fonts/gliker";
import { Button } from "../Button";

export default function About() {
  return (
    <AnimatePresence>
      <motion.section
        className="h-screen overflow-hidden  flex flex-col sm:flex-row items-start justify-start py-16"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-start justify-start w-full sm:w-2/3 h-1/2 sm:pr-12 gap-8 ">
          <h2
            className={`${Gliker.className} text-primary text-3xl sm:text-5xl `}
          >
            Kazdy przedmiot to opowiesc
          </h2>
          <div className="flex flex-col items-start justify-center w-full sm:w-5/6  gap-8">
            <p className="bg-backgroundsecondary text-lg  p-4 rounded-xl font-bold text-primarydark shadow-md hover:shadow-lg transition">
              14 czerwca w Galerii Szyb Wilson w Katowicach odbędzie się
              festiwal rękodzieła, który łączy pasję do unikalnych wyrobów z
              edukacją i networkingiem. To idealna okazja, aby odkryć talenty
              lokalnych twórców, poznać ich historię i zobaczyć, jak powstają
              wyjątkowe produkty. 14 czerwca w Galerii Szyb Wilson w Katowicach
              odbędzie się festiwal rękodzieła, który łączy pasję do unikalnych
              wyrobów z edukacją i networkingiem. To idealna okazja, aby odkryć
              talenty lokalnych twórców, poznać ich historię i zobaczyć, jak
              powstają wyjątkowe produkty.
            </p>
            <Button
              text="Wydarzenie na Facebooku"
              href="https://www.facebook.com/Paneuropa"
            />
          </div>
        </div>
        <div className="hidden sm:block w-1/2 h-full aspect-square  relative rounded-4xl shadow-md hover:shadow-lg transition">
          <Image
            src="/heroguy.png"
            alt="rider"
            fill
            className="object-cover rounded-4xl bg-backgroundsecondary"
          />
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
