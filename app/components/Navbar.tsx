"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

/*make navbar absolute if route is home*/

export const NavbarProvider = () => {
  const pathname = usePathname();
  return <>{pathname !== "/" ? <Navbar /> : <></>}</>;
};

function isHome(path: string) {
  if (path === "/") {
    return "absolute top-0 left-0 w-full  pt-2";
  } else {
    return "pt-2 w-screen";
  }
}

const menuVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: "-100%", opacity: 0 },
};

function Dropdown({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-50  bg-background p-10 flex flex-col gap-8 text-2xl font-bold text-primary"
    >
      <button
        className="text-right text-3xl self-end text-primarydark"
        onClick={onClose}
      >
        x
      </button>
      <Link href="/wydarzenie" onClick={onClose}>
        Mapa wydarzenia
      </Link>
      <Link href="/partnerzy" onClick={onClose}>
        Warsztaty
      </Link>
      <Link href="/partnerzy" onClick={onClose}>
        Wystawcy
      </Link>{" "}
      <Link href="/partnerzy" onClick={onClose}>
        Partnerzy
      </Link>{" "}
      <Link href="/partnerzy" onClick={onClose}>
        Regulamin
      </Link>{" "}
      <Link href="/paneuropa" onClick={onClose}>
        O nas
      </Link>
      <Link href="/kontakt" onClick={onClose}>
        Kontakt
      </Link>
    </motion.div>
  );
}
const Navbar = () => {
  const route = usePathname();

  const [isOpen, setIsOpen] = useState(false); //dropdown control

  return (
    <>
      <div
        className={`${isHome(
          route
        )}  px-4 sm:px-10  flex flex-row items-center justify-between sm:justify-start sm:gap-10`}
      >
        <Link href="/" className="relative w-24 h-24 sm:w-32 sm:h-32">
          <Image src="/logo.png" alt="logo" fill />
        </Link>
        <div className="hidden sm:flex flex-row items-center gap-8 justify-between font-bold  text-xl text-primary">
          <Link
            href={"/wydarzenie"}
            className="hover:text-primarydark transition-colors duration-500"
          >
            Mapa wydarzenia
          </Link>

          <Link
            href={"/kontakt"}
            className="hover:text-primarydark transition-colors duration-500"
          >
            Wystawcy
          </Link>
          <Link
            href={"/kontakt"}
            className="hover:text-primarydark transition-colors duration-500"
          >
            Warsztaty
          </Link>
          <Link
            href={"/kontakt"}
            className="hover:text-primarydark transition-colors duration-500"
          >
            Regulamin
          </Link>
          <Link
            href={"/paneuropa"}
            className="hover:text-primarydark transition-colors duration-500"
          >
            O nas
          </Link>
          <Link
            href={"/partnerzy"}
            className="hover:text-primarydark transition-colors duration-500"
          >
            Partnerzy
          </Link>
          <Link
            href={"/kontakt"}
            className="hover:text-primarydark transition-colors duration-500"
          >
            Kontakt
          </Link>
        </div>
        <button
          className="sm:hidden p-4 sm:self-start "
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </button>
        {/*dropdown animation wrapper*/}
        <AnimatePresence>
          {isOpen && <Dropdown onClose={() => setIsOpen(false)} />}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
