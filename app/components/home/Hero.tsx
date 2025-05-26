"use client";

import React from "react";
import { Gliker } from "../../fonts/gliker";
import { CalendarDays, Clock, MapPin } from "lucide-react";
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
      <div className="relative w-full bg-backgroundsecondary h-[90%] rounded-4xl flex flex-row justify-between shadow-md hover:shadow-lg transition">
        <Navbar />
        <div className="mt-24 p-6 lg:w-1/2 w-full gap-4 flex flex-col items-start justify-start">
          <h1 className={`font-bold ${Gliker.className} text-5xl text-primary`}>
            ManuArt Festiwal
          </h1>
          <h2
            className={`font-bold ${Gliker.className} text-3xl text-secondary`}
          >
            {" "}
            Twórz i Inspiruj
          </h2>
          <div className="w-full flex justify-start items-center gap-2 ">
            <CalendarDays className="text-primarydark w-6 h-6" />
            <p className="font-bold text-primarydark text-xl">
              14 czerwca 2025
            </p>
          </div>
          <div className="w-full flex justify-start items-center gap-2">
            <Clock className="text-primarydark w-6 h-6" />
            <p className="font-bold text-primarydark text-xl">10:00 - 17:00</p>
          </div>
          <div className="w-full flex justify-start items-center gap-2 ">
            <MapPin className="text-primarydark w-6 h-6" />
            <p className="font-bold text-primarydark text-xl">
              Galeria Szyb Wilson, Katowice
            </p>
          </div>
          <Button text="MAPA WYDARZENIA" href="/wydarzenie" />
          <h2
            className={`text-3xl ${Gliker.className} text-secondary
        }`}
          >
            Bądź na bieząco
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="hidden lg:flex flex-row gap-2 items-center justify-center  "
          >
            <input
              placeholder="Email"
              className="bg-white rounded-3xl py-3 px-6 text-black focus:outline-primary"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 ml-2">
                {errors.email.message}
              </p>
            )}
            <button
              disabled={isSubmitting}
              type="submit"
              className="bg-primary rounded-3xl py-3 px-6 text-white cursor-pointer hover:bg-primarydark transition-colors duration-300 font-extrabold"
            >
              {isSubmitting ? "WYSYŁANIE" : "ZAPISZ SIĘ DO NEWSLETTERA"}
            </button>
          </form>
        </div>
        {/* <div className="hidden lg:block w-1/2 relative ">
          <Image src="/heroguy.png" fill={true} alt="guy" objectFit="contain" />
        </div> */}
      </div>
    </motion.div>
  );
}
