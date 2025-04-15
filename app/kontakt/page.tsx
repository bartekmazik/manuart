"use client";
import React from "react";
import { Gliker } from "../fonts/gliker";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";

//zod schema
const messageSchema = z.object({
  email: z.string().email("Niepoprawny adres email"),
  message: z.string().min(10, "Wiadomość musi mieć minimum 10 znaków"),
});

type MessageBody = z.infer<typeof messageSchema>;

const ContactPerson = () => {
  return (
    <div className="w-full sm:w-1/3 p-4 sm:p-6 rounded-3xl shadow-xl flex flex-col items-center gap-4 bg-backgroundsecondary font-bold text-primary transition-all duration-300">
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

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<MessageBody>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: MessageBody) => {
    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      reset();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="w-full sm:w-1/3 h-auto flex flex-col text-primary bg-backgroundsecondary shadow-xl rounded-3xl gap-8 sm:gap-12 p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold self-center">
        Napisz do nas!
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 sm:gap-4"
      >
        <div>
          <input
            placeholder="Email"
            className="bg-white py-2 px-4 text-black rounded-full w-full"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1 ml-2">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <textarea
            placeholder="Twoja wiadomość"
            className="bg-white py-2 px-4 text-black rounded-2xl w-full min-h-[100px]"
            {...register("message")}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1 ml-2">
              {errors.message.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary py-2 px-4 text-white w-1/2 self-center font-bold rounded-full disabled:opacity-50"
        >
          {isSubmitting ? "WYSYŁANIE" : "WYŚLIJ"}
        </button>
      </form>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="flex flex-col px-4 pt-8 sm:pt-12 justify-center items-start gap-8 sm:gap-12">
      <h1 className={`${Gliker.className} text-4xl sm:text-5xl text-primary`}>
        Kontakt
      </h1>
      <div className="w-full flex flex-col gap-6 sm:gap-8 sm:flex-row sm:justify-between">
        <ContactForm />
        <ContactPerson />
      </div>
    </div>
  );
};

export default ContactPage;
