import React from "react";
import { Gliker } from "../fonts/gliker";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const ContactPerson = () => {
  return (
    <div className="w-full sm:w-1/3 p-6 rounded-3xl shadow-xl flex flex-col items-center gap-4 bg-backgroundsecondary font-bold text-primary transition-all duration-300">
      <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg">
        <Image
          src="/steve.jpg"
          fill
          alt="contactperson"
          className="object-cover"
        />
      </div>
      <h2 className="text-2xl font-bold">Julia Ciemięga</h2>
      <div className="flex flex-row items-center gap-2 text-base font-normal">
        <Phone className="text-primary" />
        <p>+48 579 814 481</p>
      </div>
      <div className="flex flex-row items-center gap-2 text-base font-normal">
        <Mail className="text-primary" />
        <p>juliaciemiega@gmail.com</p>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="w-1/3 h-96 flex flex-col text-primary bg-backgroundsecondary shadow-xl rounded-4xl gap-12 p-6">
      <h2 className="text-2xl font-bold self-center">Napisz do nas!</h2>
      <form className="flex flex-col gap-4">
        <input
          placeholder="Email"
          className="bg-white py-2 px-4 text-black rounded-full"
        />
        <input
          placeholder="Twoja wiadomość"
          className="bg-white py-2 px-4 text-black rounded-full"
        />
        <button className="bg-primary py-2 px-4 text-white w-1/2 self-center font-bold rounded-full">
          WYŚLIJ
        </button>
      </form>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className=" flex flex-col pt-12 justify-center sm:justify-start items-start gap-12">
      <h1 className={`${Gliker.className} text-5xl text-primary`}>Kontakt</h1>
      <div className="w-full flex flex-row justify-between">
        <ContactForm />
        <ContactPerson />
      </div>
    </div>
  );
};

export default ContactPage;
