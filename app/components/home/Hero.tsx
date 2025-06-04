"use client";

import React from "react";
import { Gliker } from "../../fonts/gliker";
import { CalendarDays, Clock, MapPin, Send } from "lucide-react";
import { Button } from "../Button";
import { motion } from "motion/react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "../Navbar";

const newsletterSchema = z.object({
  email: z.string().email("Niepoprawny adres email"),
});
type NewsletterBody = z.infer<typeof newsletterSchema>;

export default function Hero() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterBody>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: NewsletterBody) => {
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to join newsletter");
      }
      reset();
    } catch (error) {
      console.error("Error joining to newsletter:", error);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="h-screen pt-6"
    >
      <div className="relative w-full bg-background h-[95%] sm:h-[90%] rounded-4xl flex flex-row justify-between shadow-md hover:shadow-lg transition">
        <Navbar />
        <div className="mt-20 sm:mt-28 p-6 lg:w-1/2 w-full gap-4 flex flex-col items-start justify-start">
          <h1
            className={`font-bold ${Gliker.className} text-3xl sm:text-5xl text-primary`}
          >
            ManuArt Festiwal
          </h1>
          <h2
            className={`font-bold ${Gliker.className} text-2xl sm:text-3xl text-secondary`}
          >
            {" "}
            Twórz i Inspiruj
          </h2>
          <div className="w-full flex justify-start items-center text-primary gap-2 ">
            <CalendarDays className=" w-6 h-6" />
            <p className="font-bold   text-base sm:text-xl">14 czerwca 2025</p>
          </div>
          <div className="w-full flex justify-start text-primary items-center gap-2">
            <Clock className=" w-6 h-6" />
            <p className="font-bold   text-base sm:text-xl">10:00 - 17:00</p>
          </div>
          <div className="w-full flex justify-start text-primary items-center gap-2 ">
            <MapPin className=" w-6 h-6" />
            <p className="font-bold   text-base sm:text-xl">
              Galeria Szyb Wilson, Katowice
            </p>
          </div>
          <Button text="MAPA WYDARZENIA" href="/wydarzenie" variant="green" />
          <h2
            className={`text-2xl sm:text-3xl ${Gliker.className} text-secondary
        }`}
          >
            Bądź na bieżąco
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative flex bg-white rounded-3xl  w-full sm:w-auto sm:bg-transparent  flex-row gap-4 sm:gap-2 items-center justify-center  "
          >
            <input
              placeholder="Email"
              className="bg-white rounded-3xl py-3 w-full sm:w-auto px-6 text-black shadow-md"
              {...register("email")}
            />

            <button
              disabled={isSubmitting}
              type="submit"
              className="hidden sm:block bg-primary rounded-3xl py-3 px-6 text-white cursor-pointer hover:bg-primarydark transition-colors duration-300 font-extrabold"
            >
              {isSubmitting ? "WYSYŁANIE" : "ZAPISZ SIĘ DO NEWSLETTERA"}
            </button>
            <button className="absolute right-2 top-1 z-20 sm:hidden  rounded-full bg-primary p-2 text-white">
              <Send />
            </button>
          </form>
          {errors.email && (
            <p className="text-red-500 text-sm ml-2">{errors.email.message}</p>
          )}
        </div>
        {/* <div className="hidden lg:block w-1/2 relative ">
          <Image src="/heroguy.png" fill={true} alt="guy" objectFit="contain" />
        </div> */}
      </div>
    </motion.div>
  );
}
