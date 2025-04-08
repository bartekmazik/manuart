"use client";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { Gliker } from "@/app/fonts/gliker";
import { Button } from "../Button";

export default function About() {
  return (
    <AnimatePresence>
      <motion.section
        className="h-screen  flex flex-col sm:flex-row items-center justify-start py-16"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-start justify-start w-full sm:w-2/3 h-1/2 sm:pr-12 gap-4 ">
          <h2
            className={`${Gliker.className} text-primary text-3xl sm:text-5xl `}
          >
            Kazdy przedmiot to opowiesc
          </h2>
          <div className="flex flex-col items-center justify-center w-full sm:w-5/6  gap-4">
            <p className="bg-backgroundsecondary text-lg  p-4 rounded-xl font-bold text-primarydark ">
              14 czerwca w Galerii Szyb Wilson w Katowicach odbędzie się
              festiwal rękodzieła, który łączy pasję do unikalnych wyrobów z
              edukacją i networkingiem. To idealna okazja, aby odkryć talenty
              lokalnych twórców, poznać ich historię i zobaczyć, jak powstają
              wyjątkowe produkty.
            </p>
            <Button text="Wydarzenie na FB" href="https://www.google.com" />
          </div>
        </div>
        <div className="hidden sm:block w-1/3 h-2/3 relative rounded-4xl ">
          <Image src="/rider.jpg" alt="" fill className="rounded-4xl" />
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
