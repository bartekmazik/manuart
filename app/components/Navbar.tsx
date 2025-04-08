"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function isHome(path) {
  if (path === "/") {
    return "absolute top-0 left-0 z-50 pt-6 px-10";
  } else {
    return "";
  }
}

function Dropdown() {
  return <div>xd</div>;
}

const Navbar = () => {
  const route = usePathname();
  return (
    <div
      className={`${isHome(
        route
      )} border w-full flex flex-row items-center justify-start gap-10`}
    >
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={128} height={128} />
      </Link>
      <div className="flex flex-row items-center gap-8 justify-between font-bold hover:text-primarydark text-xl text-primary">
        <Link href={"/About"}>Wydarzenie</Link>
        <Link href={"/About"}>O nas</Link>
        <Link href={"/About"}>Partnerzy</Link>
        <Link href={"/About"}>Kontakt</Link>
      </div>
    </div>
  );
};

export default Navbar;
