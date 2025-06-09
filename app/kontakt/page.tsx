import React from "react";
import { Gliker } from "../fonts/gliker";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

import Link from "next/link";
import { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
};

const ContactPerson = () => {
  return (
    <div className="w-full sm:w-2/3 p-4 sm:p-6 rounded-3xl shadow-xl flex flex-col sm:flex-row justify-between items-start gap-4 bg-background font-bold text-primary transition-all duration-300">
      <div className="flex flex-col gap-6 sm:gap-12">
        <h2 className="text-xl sm:text-2xl font-bold text-center">
          Julia Ciemięga - Koordynatorka główna projektu
        </h2>
        <div className="flex flex-col gap-4 justify-self-center">
          <div className="flex items-center gap-2 text-lg sm:text-xl font-normal">
            <Phone className="text-primary" />
            <p>+48 572 465 803</p>
          </div>
          <div className="flex items-center gap-2 text-lg sm:text-xl font-normal">
            <Mail className="text-primary" />
            <Link href="mailto:juliaciemiega@gmail.com">
              juliaciemiega@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div className="relative w-full h-1/3 sm:w-1/3 aspect-square sm:h-full rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/organisators/julia.png"
          fill
          alt="contactperson"
          className="object-cover"
        />
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="flex flex-col px-4 py-12 justify-center items-start gap-8 sm:gap-12">
      <h1
        className={`${Gliker.className} text-4xl sm:text-5xl text-background text-shadow-md`}
      >
        Kontakt
      </h1>
      <div className="w-full flex flex-col gap-6 sm:gap-8 sm:flex-row sm:justify-start">
        <ContactForm />
        <ContactPerson />
      </div>
    </div>
  );
};

export default ContactPage;
