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
    <div className="w-full sm:w-1/3 p-4 sm:p-6 rounded-3xl shadow-xl flex flex-col items-center gap-4 bg-background font-bold text-primary transition-all duration-300">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg">
        <Image
          src="/steve.jpg"
          fill
          alt="contactperson"
          className="object-cover"
        />
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-center">
        Julia Ciemięga
      </h2>
      <div className="flex items-center gap-2 text-base font-normal">
        <Phone className="text-primary" />
        <p>+48 579 814 481</p>
      </div>
      <div className="flex items-center gap-2 text-base font-normal">
        <Mail className="text-primary" />
        <Link href="mailto:juliaciemiega@gmail.com">
          juliaciemiega@gmail.com
        </Link>
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
