"use client";
import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const messageSchema = z.object({
  email: z.string().email("Niepoprawny adres email"),
  message: z.string().min(10, "Wiadomość musi mieć minimum 10 znaków"),
});

type MessageBody = z.infer<typeof messageSchema>;

export const ContactForm = () => {
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
    <div className="w-full sm:w-1/3 h-auto flex flex-col text-primary bg-background shadow-xl rounded-3xl gap-8 sm:gap-12 p-4 sm:p-6">
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
            className="bg-white py-2 px-4 text-black rounded-full w-full  shadow-md"
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
            className="bg-white py-2 px-4 text-black rounded-2xl w-full min-h-[100px] shadow-md"
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
          className="bg-primary cursor-pointer hover:bg-primarydark transition-colors duration-300 py-2 px-4 text-white w-1/2 self-center font-bold rounded-full disabled:opacity-50"
        >
          {isSubmitting ? "WYSYŁANIE" : "WYŚLIJ"}
        </button>
      </form>
    </div>
  );
};
