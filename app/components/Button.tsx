import Link from "next/link";
import React from "react";

export function Button({
  text,
  href,
  className,
}: {
  text: string;
  href: string;
  className?: string;
}) {
  return (
    <Link
      type="button"
      href={`${href}`}
      className={`${className} w-full max-w-xs bg-primary cursor-pointer hover:bg-primarydark transition-colors duration-300 font-extrabold text-white rounded-3xl flex justify-center items-center py-3 px-6 `}
    >
      {text}
    </Link>
  );
}
