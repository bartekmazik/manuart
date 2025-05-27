import Link from "next/link";
import React from "react";

export function Button({
  text,
  href,
  className,
  variant,
}: {
  text: string;
  href: string;
  className?: string;
  variant: "green" | "light"; //green or light
}) {
  return (
    <Link
      type="button"
      href={`${href}`}
      className={`${className} ${
        variant === "green"
          ? "bg-primary hover:bg-primarydark text-white"
          : "bg-background hover:bg-gray-100 text-primarydark"
      }
      } w-full max-w-xs  cursor-pointer  transition-colors duration-300 font-extrabold  rounded-3xl flex justify-center items-center py-3 px-6 `}
    >
      {text}
    </Link>
  );
}
